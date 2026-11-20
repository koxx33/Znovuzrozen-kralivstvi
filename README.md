# 👑 Znovuzrození království v0.7.0

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

## Novinky ve verzi 0.7.0
- 📚 Sbírka karet: všechny karty ze všech balíčků na jednom místě. Objevené karty i jejich vylepšené strany se ukládají napříč kampaněmi, neobjevené jsou schované za otazníkem. U každé karty vidíš všechny strany a kolikrát jsi ji porazil nebo roztrhal. Otevřeš ji v hlavním menu nebo v Menu.
- 🎬 Animace karet: objevená karta přiletí z tlačítka Objevit, vylepšená se otočí na druhou stranu, použitá poskočí, zasažený nepřítel se zatřese (ŠVIH!), poražený vybuchne (BUM!), roztrhaná karta se rozpůlí a splněná událost se rozzáří (HOTOVO!).
- Nový úspěch Sběratel (50 karet ve sbírce). Animace se vypnou, když má telefon zapnuté omezení pohybu.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
