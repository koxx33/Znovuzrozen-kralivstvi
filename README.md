# 👑 Znovuzrození království v0.7.7

Komiksová legacy karetní hra v jednom HTML souboru (dříve *Králův odkaz*). Obnov zchudlé království,
vylepšuj kreslené karty, lep trvalé pečetě, plň deset kapitol kampaně a vyhraj Válku o korunu.

## Hrát
- **Online / jako aplikace:** otevři adresu GitHub Pages (viz níže) a v menu prohlížeče zvol
  *Přidat na plochu* / *Instalovat aplikaci*. Hra pak funguje i bez internetu.
- **Offline soubor:** stačí otevřít `index.html` v prohlížeči (bez instalace a bez aktualizací).

## Nasazení na GitHub Pages
1. Vytvoř repozitář (např. `znovuzrozeni-kralovstvi`) a nahraj do něj **obsah** tohoto ZIPu (ne samotný ZIP).
2. *Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save*.
3. Za minutu je hra na `https://<tvoje-jméno>.github.io/znovuzrozeni-kralovstvi/`.

Pokud už máš nasazený *Králův odkaz*, můžeš nové soubory nahrát přes ty staré ve stejném repozitáři –
uložená kampaň zůstane, protože hra používá stejné místo pro uložení.

## Aktualizace
Nahraj soubory z nového ZIPu přes ty staré (nejdůležitější jsou `index.html`, `sw.js` a `version.json`).
Nainstalovaná hra novou verzi sama najde, ukáže co je nového a nainstaluje ji **jen po potvrzení**
(*Aktualizovat / Teď ne / Přeskočit tuto verzi*). Rozehraná kampaň zůstane uložená.

## Novinky ve verzi 0.7.7
- Blikání potvrzeno a vyřešeno: dělala ho pohyblivá krajina v hlavním menu. Nově je krajina s hradem v menu jako pevný obrázek přímo v pozadí menu – vypadá stejně (hrad, mlýn, mraky, praporky), jen se nehýbe, a nic nebliká.
- Pohyblivou krajinu si můžeš dál zapnout v panelu 🔊 (Pozadí menu: 🖼️ obrázek / 🎬 živé / 🚫 vypnuté), na některých telefonech ale může blikat.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
