# Botee — demó SPA

Egyoldalas (SPA) termékbemutató a **Botee** AI magántanár robothoz: egy gyerekeknek szóló,
LLM-alapú tanulótárs, amivel a diák **élőszóban beszélget**.

- **6 colos haskijelző** — itt jelennek meg a feladatok, a pontok és az ábrák
- **3 colos arckijelző** — gesztikuláció és érzelmek (gondolkodik, kacsint, tapsol)
- **Első demó tananyag:** matematika alsó tagozat — szorzótábla, osztás, gramm/kilogramm,
  méter/centiméter, fejszámolás

## Futtatás

Semmilyen build nincs, tiszta HTML/CSS/JS. Elég egy statikus szerver:

```bash
npx serve .            # vagy
python -m http.server 8080
```

Aztán nyisd meg: <http://localhost:8080>

A `file://` megnyitás is működik, de statikus szerverrel biztosabb.

## Felépítés

```
index.html        az összes nézet (hash-router kapcsolgatja)
css/styles.css    design rendszer, animációk, reszponzív töréspontok
js/app.js         router, scroll-animációk, robot SVG, matek demó, űrlap
assets/robot.svg  a robot illusztráció önálló képként (OG image)
assets/favicon.svg
```

## Nézetek

| Útvonal | Tartalom |
|---|---|
| `#/` | Hero animált robottal, „hogyan működik” 3 lépés, előnyök, CTA |
| `#/robot` | Hardver bemutató, a két kijelző, adatvédelem, tananyag |
| `#/demo` | **Interaktív matek demó** — 8 feladat, pontok, sorozat, magyarázatkérés |
| `#/eredmenyek` | Miért nő a teljesítmény: tanulási kör, mutatók, sávok |
| `#/kapcsolat` | Elérhetőségek és üzenetküldő űrlap |

## Az élő demó

A `#/demo` nézet a robot haskijelzőjét utánozza:

- 5 feladatgenerátor (szorzótábla, osztás, gramm↔kg, m↔cm, fejszámolás), véletlen feladatokkal
- pont- és sorozatrendszer (sorozatbónusz max. +10 pont), konfetti jó válasznál
- a robotarc reagál: `idle` / `think` / `happy` / `oops`
- **„Nem értem, magyarázd el!”** — feladatra szabott, gyereknyelvű magyarázat, ahányszor csak kell
- opcionális felolvasás a böngésző `speechSynthesis` API-ján keresztül (`hu-HU`)

Éles termékben ezen a ponton lép be az LLM: a magyarázatokat nem előre írt sablonok adják,
hanem a modell generálja a gyerek konkrét kérdésére.

## Testreszabás előtt

- **Elérhetőségek**: a `#/kapcsolat` nézetben `hello@botee.hu` és `+36 1 234 5678` szerepel — cseréld valósra.
- **Számok**: az „Eredmények” nézet értékei a koncepció célszámai, az oldal ezt jelzi is
  („bemutató tartalom, nem mért eredmény”). Pilot után írd át valós adatra.
- **Színek**: minden a `css/styles.css` tetején lévő `:root` változókból jön.
- Az űrlap nem küld sehova adatot; backend nélkül csak visszajelzést mutat.

## Hozzáférhetőség

Billentyűzettel járható, `prefers-reduced-motion` esetén az animációk kikapcsolnak,
a demó állapotváltozásai `aria-live` régiókban jelennek meg.
