#!/usr/bin/env python3
"""Versões da skill consultor-som: snapshot, restauração, versão estável e diff.

Uso:
  python versoes.py backup --motivo "texto"     snapshot completo antes de mudar algo
  python versoes.py listar                      snapshots e qual é a versão estável
  python versoes.py mudancas                    quantos snapshots desde a versão estável
  python versoes.py diff <nome|ultimo|estavel>  o que mudou entre o snapshot e a versão atual
  python versoes.py restaurar <nome|ultimo|estavel>
  python versoes.py estavel <nome|atual>        marca uma versão como estável (após regressão OK)

CHANGELOG.md e aprendizado/ nunca são sobrescritos ao restaurar: o histórico é preservado.
"""
import argparse
import datetime
import difflib
import filecmp
import shutil
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

PRESERVAR = {"CHANGELOG.md", "aprendizado"}


def caminhos(raiz):
    raiz = Path(raiz) if raiz else Path(__file__).resolve().parents[2]
    return raiz / "consultor-som", raiz / "consultor-som-workspace" / "historico"


def snapshots(hist):
    if not hist.exists():
        return []
    return sorted(p for p in hist.iterdir() if p.is_dir())


def estavel_atual(hist):
    f = hist / "ESTAVEL.txt"
    return f.read_text(encoding="utf-8").strip() if f.exists() else None


def resolver(hist, nome):
    snaps = snapshots(hist)
    if nome == "ultimo":
        if not snaps:
            sys.exit("Nenhum snapshot.")
        return snaps[-1]
    if nome == "estavel":
        e = estavel_atual(hist)
        if not e:
            sys.exit("Nenhuma versão estável marcada.")
        nome = e
    p = hist / nome
    if not p.is_dir():
        sys.exit(f"Snapshot não encontrado: {nome}")
    return p


def backup(skill, hist, motivo):
    hist.mkdir(parents=True, exist_ok=True)
    base = datetime.datetime.now().strftime("%Y-%m-%d_%H%M%S")
    destino, n = hist / base, 1
    while destino.exists():  # dois snapshots no mesmo segundo
        n += 1
        destino = hist / f"{base}-{n}"
    shutil.copytree(skill, destino)
    (destino / "MOTIVO.txt").write_text(motivo or "", encoding="utf-8")
    print(f"Snapshot criado: historico/{destino.name}")
    return destino


def listar(hist):
    e = estavel_atual(hist)
    for s in snapshots(hist):
        m = (s / "MOTIVO.txt").read_text(encoding="utf-8").strip() if (s / "MOTIVO.txt").exists() else ""
        marca = "  <- ESTÁVEL" if s.name == e else ""
        print(f"{s.name}  {m}{marca}")
    if not e:
        print("(nenhuma versão estável marcada)")


def mudancas(hist):
    e = estavel_atual(hist)
    snaps = [s.name for s in snapshots(hist)]
    n = len(snaps) - (snaps.index(e) + 1) if e in snaps else len(snaps)
    print(f"Snapshots desde a versão estável ({e or 'nenhuma'}): {n}")


def arquivos(d):
    return {p.relative_to(d).as_posix() for p in d.rglob("*") if p.is_file() and p.name != "MOTIVO.txt"
            and "__pycache__" not in p.parts}


def diff(skill, snap):
    a, b = arquivos(snap), arquivos(skill)
    for rel in sorted(a | b):
        if rel not in b:
            print(f"--- removido desde o snapshot: {rel}")
        elif rel not in a:
            print(f"+++ novo desde o snapshot: {rel}")
        elif not filecmp.cmp(snap / rel, skill / rel, shallow=False):
            old = (snap / rel).read_text(encoding="utf-8", errors="replace").splitlines()
            new = (skill / rel).read_text(encoding="utf-8", errors="replace").splitlines()
            sys.stdout.writelines(l + "\n" for l in difflib.unified_diff(old, new, f"snapshot/{rel}", f"atual/{rel}", lineterm="", n=1))


def restaurar(skill, hist, snap):
    if not (snap / "SKILL.md").exists() or not (snap / "references").is_dir():
        sys.exit(f"historico/{snap.name} não é um snapshot completo (falta SKILL.md ou references/) — restauração cancelada.")
    backup(skill, hist, f"automático antes de restaurar {snap.name}")
    for item in list(skill.iterdir()):
        if item.name in PRESERVAR:
            continue
        shutil.rmtree(item) if item.is_dir() else item.unlink()
    for item in snap.iterdir():
        if item.name in PRESERVAR or item.name == "MOTIVO.txt":
            continue
        (shutil.copytree if item.is_dir() else shutil.copy2)(item, skill / item.name)
    print(f"Restaurado de historico/{snap.name} (CHANGELOG.md e aprendizado/ preservados). Registre o rollback no CHANGELOG.")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--raiz", help="pasta que contém consultor-som/ (padrão: a da skill)")
    sp = p.add_subparsers(dest="cmd", required=True)
    b = sp.add_parser("backup"); b.add_argument("--motivo", default="")
    sp.add_parser("listar")
    sp.add_parser("mudancas")
    d = sp.add_parser("diff"); d.add_argument("nome")
    r = sp.add_parser("restaurar"); r.add_argument("nome")
    e = sp.add_parser("estavel"); e.add_argument("nome")
    a = p.parse_args()
    skill, hist = caminhos(a.raiz)
    if not skill.is_dir():
        sys.exit(f"Skill não encontrada em {skill}")
    if a.cmd == "backup":
        backup(skill, hist, a.motivo)
    elif a.cmd == "listar":
        listar(hist)
    elif a.cmd == "mudancas":
        mudancas(hist)
    elif a.cmd == "diff":
        diff(skill, resolver(hist, a.nome))
    elif a.cmd == "restaurar":
        restaurar(skill, hist, resolver(hist, a.nome))
    elif a.cmd == "estavel":
        snap = backup(skill, hist, "versão estável") if a.nome == "atual" else resolver(hist, a.nome)
        (hist / "ESTAVEL.txt").write_text(snap.name, encoding="utf-8")
        print(f"Versão estável: {snap.name}")


if __name__ == "__main__":
    main()
