# 👑 Znovuzrození království v0.12.3

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

## Novinky ve verzi 0.12.3
- 🗺️ Mapa říše je zase opravdová krajina – hory, hvozd, močály, řeka, hrad a moře – a je dvakrát větší.
- Mapu posouváš prstem do všech stran, dvěma prsty ji přiblížíš nebo oddálíš, dvojím klepnutím přiblížíš. Tlačítka + / − / ⤢ fungují taky.
- Okrsky jsou místa v krajině: lomy pod horami, pole a lesy u řeky, trh u hradu, stráž za řekou a lodě v přístavu.
- Jména, fajfky u použitých karet, štítky ★, filtry i odemykání krajů klepnutím zůstaly. Jména se při oddálení schovají.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
