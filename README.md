# 👑 Znovuzrození království v0.12.2

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

## Novinky ve verzi 0.12.2
- 🗺️ Nová mapa říše: je vyšší a posouvá se prstem, takže ikony jsou větší a nepřekrývají se.
- Karty mají na mapě své okrsky – Lomy a dílny, Pole a lesy, Trh a město, Stráž a magie a Přístav. Nepřátelé táboří na Hranicích.
- Pod každou ikonou je jméno karty. Použitá karta dostane zelenou fajfku místo zešednutí, úroveň ukazuje štítek ★.
- Filtry nad mapou: Vše, Budovy, Nepřátelé a Volné (karty, které v tomto kole ještě můžeš použít).
- Zamčený kraj odemkneš klepnutím přímo na mapě. Po otevření se mapa sama posune k nepříteli.
- 🏛️ Síň slávy má záložky Kampaně, Denní, Rychlá, Hádanky a Úspěchy – rekordy, série dnů a nejlepší hry.
- 🏅 13 nových úspěchů za denní výzvu, rychlou hru a hádanky.

## Soubory
| Soubor | K čemu je |
|---|---|
| `index.html` | celá hra včetně kreseb karet |
| `manifest.webmanifest` | instalace jako aplikace |
| `sw.js` | offline režim, písmo a řízené aktualizace |
| `version.json` | číslo nejnovější verze a její novinky |
| `icon-*.png`, `apple-touch-icon.png` | ikony aplikace |
| `.nojekyll` | GitHub Pages servíruje soubory tak, jak jsou |
