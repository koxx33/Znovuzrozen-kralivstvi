# 👑 Znovuzrození království v0.12.0

Komiksová legacy karetní hra v jednom HTML souboru. Obnov zchudlé království,
vylepšuj kreslené karty, lep trvalé pečetě, plň deset kapitol kampaně a vyhraj Válku o korunu.

Jazyky: čeština, angličtina, němčina, polština, francouzština, španělština a ukrajinština
(při prvním spuštění podle telefonu, změna dlaždicí 🌐 v hlavním menu).

## Hrát
- **Online / jako aplikace:** otevři adresu GitHub Pages (viz níže) a v menu prohlížeče zvol
  *Přidat na plochu* / *Instalovat aplikaci*. Hra pak funguje i bez internetu.
- **Offline soubor:** stačí otevřít `index.html` v prohlížeči (bez instalace a bez aktualizací).

## Nasazení na GitHub Pages
1. Vytvoř repozitář (např. `znovuzrozeni-kralovstvi`) a nahraj do něj **obsah** tohoto ZIPu (ne samotný ZIP).
2. *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save*.
3. Za minutu je hra na `https://<tvoje-jméno>.github.io/znovuzrozeni-kralovstvi/`.

Novou verzi stačí nahrát přes tu starou ve stejném repozitáři – uložená kampaň zůstane.

## Aktualizace
Nahraj soubory z nového ZIPu přes ty staré (nejdůležitější jsou `index.html`, `sw.js` a `version.json`).
Nainstalovaná hra novou verzi sama najde, ukáže co je nového a nainstaluje ji **jen po potvrzení**
(*Aktualizovat / Teď ne / Přeskočit tuto verzi*). Rozehraná kampaň zůstane uložená.

## Novinky ve verzi 0.12.0
- 📅 Denní výzva: každý den nový balíček, stejný pro všechny. 10 kol, osobní rekord a série dní v řadě.
- ⏱️ Rychlá hra: 12 kol bez kampaně s náhodnými rozšířeními. Hraje se o body.
- 🧩 Královské hádanky: 20 zadání s pevnými kartami a cílem. Za rychlé splnění až 👑👑👑, další hádanka se odemkne po splnění předchozí.
- 📤 Výsledek režimu se dá sdílet jako obrázek.
- Rozehraná kampaň se během rychlých režimů odloží a pak se vrátí beze změny.
- Ukrajinské nadpisy mají přibalené komiksové písmo s azbukou.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
