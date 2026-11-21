# 👑 Znovuzrození království v0.10.0

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

## Novinky ve verzi 0.10.0
- 🌐 Hra mluví sedmi jazyky: čeština, angličtina, němčina, polština, francouzština, španělština a ukrajinština. Při prvním spuštění se jazyk vybere podle telefonu, změníš ho dlaždicí 🌐 v hlavním menu.
- Přeložené je všechno: karty, události, zakázky, kapitoly, pravidla, průvodce, menu i novinky. Data, sbírka a Síň slávy zůstávají při změně jazyka beze změny.
- Vibrace se teď zapínají v panelu 🔊 Zvuk a hudba.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
