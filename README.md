# 👑 Znovuzrození království v0.12.6

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

## Ilustrace

Kreslené obrázky karet, událostí, ikony a mapa jsou ve složce `obrazky/` (WebP), která se nahrává **jen jednou**
a do dalších verzí se už nepřidává. Když složka chybí, hra kreslí obrázky jako dřív.

## Novinky ve verzi 0.12.6
- 🎨 Nové kreslené ilustrace všech karet a událostí, ikony karet na mapě a ikony surovin.
- 🗺️ Mapa říše je teď malovaná krajina.
- Obrázky se načítají ze složky obrazky/ vedle hry. Po prvním zobrazení fungují i bez internetu. Když složka chybí, hra kreslí obrázky jako dřív.
- Stuha s názvem karty je zarovnaná do rámečku a dlouhé názvy se zmenší, aby se vešly.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
