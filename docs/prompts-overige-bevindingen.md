# Fixprompts voor de overige bevindingen (E1–E10, M1–M14)

Vervolg op `docs/prompts-blokkerende-bevindingen.md`. Bij het rapport
`docs/toegankelijkheidsanalyse-2026-08.md`.

De 24 bevindingen zijn hier verdeeld over 15 prompts. Waar meerdere bevindingen
dezelfde bestanden raken of dezelfde onderliggende oorzaak hebben, zitten ze in
één prompt — dat levert een schonere wijziging op dan ze los uitvoeren. Waar een
bevinding op zichzelf staat, staat hij los.

**Drie prompts zijn geen codetaak.** P11 (contrastnorm) is een ontwerpbeslissing,
P14 (knopgrootte) is een verificatie, en de eerste helft van P10 (reflow) moet
worden gemeten voordat er iets te repareren valt. Ze staan er wel in, maar met een
andere opdracht: onderzoek en rapporteer, niet meteen wijzigen.

## Overlap met de blokkerende prompts — lees dit eerst

Vier onderwerpen zijn al deels afgehandeld in `prompts-blokkerende-bevindingen.md`.
Voer die eerst uit; de prompts hieronder dekken alleen wat er dan nog overblijft.

| Onderwerp | Al gedekt door | Rest staat in |
|---|---|---|
| Focusindicator + randcontrast in `CustomsFormCard` | B6 | P05 (overige bestanden) |
| `useId()` in `CustomsFormCard` | B6 | P07 (overige formulierkaarten) |
| `aria-disabled` op de keuzetegels | B7 | P12 (alleen de visuele kant) |
| Typografiebug en dode `borderColor` in `ChatInputBox` | B5 | P15 (overige codebevindingen) |

## Volgorde

Wil je één test met slechtziende deelnemers mogelijk maken, doe dan **P05, P12 en
P10** — dat is de visuele set. De rest kan in een vervolgsprint. **P06** (validatie)
en **P02** (skip-links) zijn blokkerend vóór productie, niet vóór de test.

---

## P01 — Taal van de pagina · dekt E1

```
PostNL "Digitaal Versturen": een React-prototype. De volledige UI-taal is Nederlands.

PROBLEEM
`index.html` regel 3 declareert `<html lang="en">`. Een schermlezer kiest daarop
zijn stemsynthese en leest de hele Nederlandse interface voor met een Engelse
uitspraak — "Bezorgtijd", "Huisnummer/postbus", "Verzekerd tot" worden
onverstaanbaar. WCAG 3.1.1 (A).

Omgekeerd staat er één Engelse zin ín de Nederlandse interface:
`src/app/components/chat/ChatInputBox.tsx` regel 158-169 toont "We use AI, check
important info. More info".

OPDRACHT
1. Zet `<html lang="nl">` in `index.html`.
2. Vertaal de disclaimer naar het Nederlands. Voorstel: "We gebruiken AI,
   controleer belangrijke informatie." met een link "Meer informatie".
   Wordt er bewust voor Engels gekozen, markeer die zin dan met `lang="en"`
   (WCAG 3.1.2, Taal van onderdelen).
3. Controleer of er elders nog Engelse UI-teksten staan die geen `lang` hebben:
   `grep -rn "We use AI\|More info" src/`

Let op: de `<title>` in `index.html` is al Nederlands ("Digitaal Versturen - Sep -
2026"), maar de `meta name="description"` is de generieke template-tekst blijven
staan: "Streamline your development with a comprehensive design system...". Die
beschrijving hoort niet bij deze app en is Engels. Vervang hem door een Nederlandse
omschrijving van wat de app doet.

VERIFICATIE
Laad de pagina met een schermlezer en luister of de stem Nederlands is. Controleer
in de DevTools dat `document.documentElement.lang === "nl"`.
```

---

## P02 — Landmark en skip-links · dekt E2, E3

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM 1 — geen hoofdgebied
`src/app/components/chat/ShipmentApp.tsx` (regel 577-607) heeft wel een `<header>`
en een `<footer>`, maar de inhoud daartussen is een reeks ongemarkeerde `<div>`s.
Landmark-navigatie — de manier waarop ervaren schermlezergebruikers een onbekende
pagina verkennen — heeft geen hoofdgebied om naartoe te springen. WCAG 1.3.1 (A).

PROBLEEM 2 — skip-links worden actief onderdrukt
`src/app/App.tsx` regel 11-44 bevat een `useEffect` die skip-links op twee manieren
onmogelijk maakt: een geïnjecteerde stylesheet die alles met "skip" in de klassenaam
op `display: none !important` zet, én een iteratie over álle `<a>`-elementen die
elke link verbergt waarvan de tekst of href "skip" bevat, of die naar
`#main-content` of `#content` wijst — herhaald na 300 ms. Hetzelfde CSS-blok staat
gedupliceerd in `src/styles/theme.css` regel 21-24. WCAG 2.4.1 (A).

De projectdocumentatie (`components.md`) noemt `SkipLinks` verplicht op elke pagina.

OPDRACHT
Deel A — altijd uitvoeren:
Wikkel de inhoud van `LandingView` en `ChatView` in een `<main>`. Eén per pagina,
niet genest in header of footer. Geef het een `id` waar een skip-link naar kan
wijzen.

Deel B — alleen uitvoeren als het team akkoord is:
Het onderdrukken van de skip-links is een bewuste keuze geweest (vermoedelijk omdat
de link niet in het Figma-ontwerp stond). Voor het prototype is dat verdedigbaar;
vóór productie is het blokkerend. VRAAG EERST OF DEZE STAP GEWENST IS. Zo ja:
verwijder de `useEffect` uit `App.tsx` én het CSS-blok uit `theme.css`, en zet het
`SkipLinks`-component uit `@design-system/react` bovenaan de pagina, wijzend naar
de `<main>` uit deel A.

Voer deel A hoe dan ook uit — zonder landmark heeft een skip-link geen bestemming,
en landmark-navigatie is ook zonder skip-link waardevol.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden volgens
  `guidelines/Guidelines.md`).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Er mag visueel niets veranderen door deel A.

VERIFICATIE
Roep in de DevTools-console de landmarks op, of gebruik de landmark-navigatie van
je schermlezer (NVDA: D-toets; VoiceOver: rotor → Landmarks). Er moet precies één
`main` zijn, naast `banner` en `contentinfo`.
```

---

## P03 — Dode bediening in de chatbalk · dekt E4, E5

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

Beide problemen zitten in `src/app/components/chat/ChatInputBox.tsx`.

PROBLEEM 1 — "More info" is geen link
Regel 161-168: een `<span>` met `textDecoration: underline` en `cursor: pointer`.
Niet focusbaar, geen rol, en er zit ook geen klikhandler op — hij ziet er alleen
uit als een link. Voor muisgebruikers verwarrend, voor toetsenbord- en
schermlezergebruikers bestaat hij niet. WCAG 2.1.1 en 4.1.2 (beide A).

PROBLEEM 2 — twee knoppen doen niets
Regel 88-127: de `IconButton`s "Bijlage toevoegen" en "Spraakbericht" hebben geen
`onClick`. Ze zitten wél in de tabvolgorde en worden correct aangekondigd, dus een
gebruiker denkt dat ze werken. Bij een test met blinde deelnemers is juist de
spraakknop een risico: dat is de affordance waarvan je verwacht dat deze doelgroep
hem opzoekt. Hij probeert hem, er gebeurt niets, en je conclusie gaat over
spraakinvoer terwijl je een niet-aangesloten knop hebt getest.

OPDRACHT
1. Vervang de `<span>` door het `Link`-component uit `@design-system/react` met
   `as="button"` (dat wordt elders in dit project al zo gebruikt, zie
   `ShipmentApp.tsx` regel 319, 341 en 367). Voeg een handler toe die daadwerkelijk iets
   doet, of maak duidelijk dat er nog niets achter zit.
2. Kies voor de twee dode knoppen één van drie, en pas hem op beide toe:
   implementeren, verbergen, of `aria-disabled="true"` met een toelichting dat de
   functie in dit prototype niet werkt. Neem de keuze op in de testbriefing.

CONSTRAINTS
- Zet GEEN `tabindex` op het bestaande `<span>`-element om het focusbaar te maken.
  Gebruik een native element of een component uit het design system — die geven rol,
  focusgedrag en toetsenbordafhandeling in één keer.
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- De chatbalk moet er hetzelfde uitzien.

VERIFICATIE
Tab door de chatbalk. Elk element dat eruitziet als bediening moet focus krijgen én
iets doen, of hoorbaar als uitgeschakeld worden aangekondigd.
```

---

## P04 — Betekenis die alleen in een pictogram zit · dekt E8

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/shipment/InsuranceCard.tsx` regel 104-119 krijgt de regel
"Met track & trace" in de ene tegel een `ListCheckIcon` (vinkje) en in de tegel
"Nee, dankje" een `CloseIcon` (kruisje). Dezelfde tekst, tegengestelde betekenis,
en het onderscheid zit volledig in de vorm en kleur van een icoon.

Verzwarend: iconen uit `@design-system/icons` hebben standaard `role="presentation"`
(zie `icon-discovery.md` regel 58). Ze zijn dus niet alleen visueel subtiel — voor
hulpsoftware bestaan ze helemaal niet. Een schermlezergebruiker hoort in beide
tegels exact dezelfde regel en krijgt geen enkele aanwijzing welke optie wél en
welke géén track & trace bevat. Bij het kiezen van een verzekering is dat een
betekenisvol verschil. WCAG 1.4.1 en 1.3.1 (beide A).

OPDRACHT
Zet het onderscheid in tekst. Twee routes, eerste heeft de voorkeur:
1. Pas de zichtbare tekst aan, zodat hij zelf het verschil draagt: "Zonder track &
   trace" in plaats van "Met track & trace" met een kruisje. Dit helpt ook
   slechtziende gebruikers en mensen die het icoon niet als betekenisdragend
   herkennen.
2. Als de tekst om ontwerpredenen gelijk moet blijven: voeg een `sr-only`-toevoeging
   toe met "inbegrepen" respectievelijk "niet inbegrepen". Gebruik de
   `sr-only`-utility uit `@design-system/css` — die is al globaal geïmporteerd via
   `src/styles/index.css`. Bouw geen eigen visually-hidden-klasse.

Loop meteen de rest van de app na op hetzelfde patroon: `grep -rn "Icon" src/app/components/shipment/`
en beoordeel per icoon of het decoratief is (naast tekst die hetzelfde zegt) of
betekenisdragend (draagt informatie die nergens anders staat). Alleen de tweede
categorie heeft een toegankelijke naam nodig.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Visueel moet de kaart hetzelfde blijven bij route 2.

VERIFICATIE
Laat een schermlezer beide verzekeringstegels voorlezen. Het verschil tussen wel en
niet inbegrepen moet hoorbaar zijn zonder dat je de iconen ziet.
```

---

## P05 — Zichtbaarheid van bediening · dekt E6, E7

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

LET OP — OVERLAP
`CustomsFormCard.tsx` is al behandeld in prompt B6 uit
`docs/prompts-blokkerende-bevindingen.md`. Voer B6 eerst uit. Deze prompt gaat over
de overige bestanden.

PROBLEEM 1 — randcontrast onder de norm
`--stamp-color-border-default` (#bec0cb) haalt op wit maar 1,8:1. WCAG 1.4.11 (AA)
eist minimaal 3:1 voor de contouren van bedieningselementen. Dit is onder meer de
rand die kaarten krijgen zodra ze bevestigd zijn (in alle tien kaarten in
`src/app/components/shipment/`, in de `submitted`-tak van de `Card`-styling).

Ter referentie: `--stamp-color-border-strong` (#67687f) haalt 5,4:1 en voldoet ruim.

PROBLEEM 2 — focusindicator ontbreekt of is fragiel
Meerdere componenten zetten `outline: "none"` en tekenen zelf een focusring als
absoluut gepositioneerde `<div>`, aangestuurd door React-state (`onFocus`/`onBlur`):
- `SelectionTile.tsx` regel 43
- `SelectionRow.tsx` regel 41
- `ChatInputBox.tsx` regel 110
- `DestinationCard.tsx` regel 240-253 — daar nog rommeliger, via directe
  DOM-manipulatie met `querySelector` en `style.display`

Visueel werkt dat, maar het is kwetsbaar: in de hoog-contrastmodus van Windows
(`forced-colors`) worden achtergrond- en randkleuren overschreven en kan de ring
verdwijnen, terwijl een echte `outline` daar juist behouden blijft. Bovendien
reageren de ringen op `:focus` in plaats van `:focus-visible`, dus ze verschijnen
ook na een muisklik. WCAG 2.4.7 (AA).

OPDRACHT
1. Vervang `--stamp-color-border-default` door `--stamp-color-border-strong` overal
   waar het de contour van een bedienbaar of identificeerbaar element is. Laat het
   staan waar het een puur decoratieve scheidingslijn is (zoals de `Divider` in
   `ProductOfferCard.tsx` en `OrderSummaryCard.tsx`) — 1.4.11 geldt daar niet.
2. Vervang de JS-gestuurde focusringen door CSS: `outline` met `outline-offset` op
   `:focus-visible`. Verwijder daarbij de `focused`-state, de bijbehorende
   `onFocus`/`onBlur`-handlers en de ring-`<div>`s. Dat scheelt state én werkt in
   forced-colors.
3. Ruim de DOM-manipulatie in `DestinationCard.tsx` op — die querySelector-constructie
   verdwijnt volledig als je stap 2 uitvoert.

SAMENHANG
Als bevinding B4 (keuzetegels vervangen door `RadioButtonGroup`) nog op de rol staat,
overweeg die eerst uit te voeren: dan vervallen `SelectionTile`, `SelectionRow` en de
inline tegels in `DestinationCard` grotendeels, en hoef je hier alleen nog de
kaartranden te doen.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde kleuren of pixelwaarden.
- Gebruik `:focus-visible`, niet `:focus` — anders krijgt elke muisklik een ring.

VERIFICATIE
1. Meet de randcontrasten met de contrastchecker in de DevTools; elke bedienbare
   contour moet ≥3:1 halen.
2. Tab door de hele flow en controleer dat élk focusbaar element een zichtbare ring
   krijgt.
3. Zet Windows in hoog-contrastmodus (Instellingen → Toegankelijkheid → Contrastthema's)
   en herhaal stap 2. Dit is de test die de huidige implementatie niet doorstaat.
```

---

## P06 — Validatie en foutmeldingen · dekt E9

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
Geen enkel formulierveld wordt gecontroleerd, in geen van de formulierkaarten
(`AddressCard.tsx`, `SenderCard.tsx`, `CustomsFormCard.tsx`, `DestinationCard.tsx`
in `src/app/components/shipment/`). Postcode, e-mailadres en telefoonnummer gaan
ongezien door. Verplichte velden zijn niet gemarkeerd — alleen "(niet verplicht)"
als suffix bij twee optionele velden, waaruit de gebruiker het omgekeerde moet
afleiden. `FormFieldError` uit het design system wordt nergens gebruikt.

Een leeg adresformulier kan bevestigd worden en levert de tekst
"Ontvanger: , , e-mail: niet opgegeven".
WCAG 3.3.1 (A) en 3.3.3 (AA).

Waarom dit zwaarder telt voor blinde gebruikers: foutherstel is precies het moment
waarop formulieren onbruikbaar worden. Een foutmelding die visueel verschijnt maar
niet wordt aangekondigd, is de klassieke faalwijze.

OPDRACHT
1. Markeer verplichte velden als zodanig, zichtbaar én programmatisch (`required`
   of `aria-required`). Kies één consistente conventie voor het hele project — nu
   worden alleen de optionele velden gemarkeerd, wat de omgekeerde logica is.
2. Voeg validatie toe op postcode (NL-formaat: 4 cijfers + 2 letters) en e-mail.
3. Toon fouten met `FormFieldError` uit `@design-system/react` en koppel ze aan het
   veld met `aria-describedby`, zodat de melding bij het veld wordt voorgelezen en
   niet als losstaande tekst.
4. Kondig bij het versturen aan dát er fouten zijn — bijvoorbeeld via een
   `role="alert"`-samenvatting boven het formulier — en verplaats de focus naar het
   eerste foutieve veld. Zonder die twee dingen weet een schermlezergebruiker niet
   dat de bevestiging is mislukt.
5. Blokkeer verzending zolang er fouten zijn.

Lees eerst de API in
`node_modules/@design-system/react/dist/src/components/FormFieldError/FormFieldError.d.ts`
en kijk of `FormField` de `aria-describedby`-koppeling al zelf legt — mogelijk hoef
je dat niet handmatig te doen.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens; gebruik `--stamp-color-text-negative` / `--stamp-color-border-error`
  voor foutstaten.
- Foutmeldingen in het Nederlands, en concreet: zeg wat er mis is én wat de gebruiker
  moet doen. Niet "Ongeldige invoer" maar "Vul een postcode in, bijvoorbeeld 1111 AA".

VERIFICATIE
Verstuur een leeg formulier met een schermlezer aan. Je moet horen dát het mislukt is,
hoeveel velden er mis zijn, en bij het eerste veld belanden met de melding erbij.
```

---

## P07 — Formulierhygiëne · dekt E10, M2, M12

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

LET OP — OVERLAP
`CustomsFormCard.tsx` is voor het id-deel al behandeld in prompt B6 uit
`docs/prompts-blokkerende-bevindingen.md`. Deze prompt dekt de overige kaarten.

PROBLEEM 1 — dubbele DOM-id's (WCAG 1.3.1, A)
De formulierkaarten gebruiken vaste, hardgecodeerde id's: `naam`, `postcode`,
`huisnummer`, `toevoeging`, `email`, `telefoon` in `AddressCard.tsx` (vanaf regel 93),
`sender-*` in `SenderCard.tsx`, `ander-land` in `DestinationCard.tsx` regel 289.

In een generatieve chat is het normaal dat dezelfde kaart twee keer in één gesprek
verschijnt — bijvoorbeeld als de gebruiker een adres wil corrigeren. Beide kaarten
blijven in de thread staan, en er zijn dan twee elementen met `id="naam"`. `htmlFor`
koppelt altijd aan het eerste; het label van de tweede kaart wijst dus naar het
invoerveld van de eerste. De gebruiker vult een veld in dat volgens de schermlezer
iets anders heet.

PROBLEEM 2 — combobox zonder zichtbaar label (WCAG 3.3.2, A)
`DestinationCard.tsx` regel 289-296: `FormField id="ander-land"` bevat geen
`FormFieldLabel`. De `ComboboxInput` heeft alleen een placeholder ("Zoek een land...").

PROBLEEM 3 — geen autocomplete (WCAG 1.3.5, AA)
Naam, postcode, huisnummer, e-mail en telefoon in `AddressCard.tsx` en
`SenderCard.tsx` missen allemaal een `autocomplete`-attribuut. Gebruikers die op
automatisch invullen leunen — waaronder veel mensen met een motorische of cognitieve
beperking — moeten alles handmatig typen.

OPDRACHT
1. Vervang alle hardgecodeerde id's door waarden uit Reacts `useId()`-hook.
   Let op: `FormField` krijgt in de huidige code hetzelfde `id` mee als de input die
   het omhult (bijvoorbeeld `<FormField id="sender-naam">` rond
   `<TextInput id="sender-naam">`). Controleer in
   `node_modules/@design-system/react/dist/src/components/FormField/FormField.d.ts`
   wat `FormField` met dat `id` doet — als het dat op zijn eigen wrapper-element zet,
   is dat óók een duplicaat en moet je er twee verschillende id's van maken.
2. Voeg een `FormFieldLabel` toe aan de combobox in `DestinationCard.tsx`.
   Voorstel: "Ander land".
3. Voeg `autocomplete` toe: `name`, `postal-code`, `email`, `tel`. Gebruik de
   `shipping`- en `billing`-prefixen om ontvanger (`AddressCard`) en afzender
   (`SenderCard`) te onderscheiden — bijvoorbeeld `shipping name` versus
   `billing name`. Zoek uit welke van de twee bij PostNL logisch de "shipping" is
   en documenteer die keuze in een comment.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Visueel mag alleen het nieuwe combobox-label bijkomen.

VERIFICATIE
Draai in de console: `new Set([...document.querySelectorAll('[id]')].map(e=>e.id)).size
=== document.querySelectorAll('[id]').length` — dat moet `true` opleveren. Forceer
daarvoor eerst een gesprek waarin dezelfde kaart twee keer verschijnt.
```

---

## P08 — Decoratieve afbeeldingen verbergen · dekt M1, M6

```
PostNL "Digitaal Versturen": een React-prototype. De UI-taal is Nederlands.

PROBLEEM 1 — vlaggen met de landcode als alt (WCAG 1.1.1, A)
`src/app/components/shipment/DestinationCard.tsx` regel 142 en 317 zetten
`alt={code}` op de vlagafbeeldingen. Een schermlezer leest dan "N L, afbeelding,
Nederland" — de code is ruis vóór de informatie die er al staat, want de landnaam
staat in de tekst ernaast.

PROBLEEM 2 — naamloze betaallogo's (WCAG 1.1.1, A)
`src/app/components/shipment/OrderSummaryCard.tsx` regel 37-101 bevat inline SVG's
voor iDEAL/Wero, Mastercard en Visa, zonder `aria-hidden` en zonder toegankelijke
naam.

OPDRACHT
1. Zet `alt=""` op beide vlagafbeeldingen — de landnaam staat er al naast, dus ze
   zijn decoratief.
2. Zet `aria-hidden="true"` op de drie betaallogo-SVG's. De namen "iDEAL" en
   "Creditcard" plus "Visa, Mastercard of American Express" staan al in de tekst.
3. Aanvullend, geen WCAG-punt maar wel relevant voor de testomgeving: de vlaggen
   komen van een externe CDN (`cdn.jsdelivr.net/gh/madebybowtie/FlagKit`). Valt die
   weg of blokkeert een netwerk hem, dan tonen browsers de alt-tekst als zichtbare
   tekst — na stap 1 dus niets. Overweeg de vlaggen lokaal op te nemen, of een
   zichtbare fallback te tonen. Meld dit als aandachtspunt in plaats van het
   ongevraagd op te lossen.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- Er mag visueel niets veranderen.

VERIFICATIE
Laat een schermlezer de bestemmingskaart en de betaalsectie voorlezen. Je hoort
alleen de landnamen en de betaalmethodenamen, geen codes en geen naamloze
afbeeldingen.
```

---

## P09 — Semantiek van de inhoud · dekt M3, M4, M5

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

Drie bevindingen over HTML die niet zegt wat de inhoud is. Alle drie WCAG 1.3.1 (A).

PROBLEEM 1 — koppenstructuur klopt niet in chatmodus
De enige `<h1>` staat in `LandingView` (`ShipmentApp.tsx` regel 285) en verdwijnt
zodra het gesprek begint; daarna begint het document op `<h2>`. Kaarten zijn
onderling inconsistent: de meeste openen op `<h2>`, `ProductOfferCard.tsx` regel
134-135 op `<h3>`.

PROBLEEM 2 — label/waarde-paren als koppen
`OrderSummaryCard.tsx` regel 202-221 rendert elk veld van de samenvatting ("Naam",
"Adres", "Bezorgtijd") als `<Heading level={4}>`. Koppen-navigatie — het
belangrijkste oriëntatiemiddel van schermlezergebruikers — loopt daardoor vol met
tientallen items, en de relatie label→waarde bestaat alleen in de layout. Dit is
juist de kaart waarop de gebruiker zijn hele bestelling controleert vóór betaling.

PROBLEEM 3 — gesplitste prijzen
`SplitPrice.tsx` regel 63-77 zet euro's en centen in aparte `<span>`s binnen een
flexcontainer, om ze visueel verschillend groot te maken. Schermlezers kunnen dat
als losse getallen voorlezen: "€ 10," … "85".

OPDRACHT
1. Geef `ChatView` een eigen `<h1>` die het gesprek benoemt, zodat het document
   altijd precies één `<h1>` heeft. Mag `sr-only` zijn. LET OP: als prompt B8 uit
   `docs/prompts-blokkerende-bevindingen.md` al is uitgevoerd, bestaat die `<h1>`
   al — controleer dat eerst en dupliceer hem niet.
   Laat vervolgens alle kaarten op hetzelfde niveau openen (`level={2}`) en de
   subkoppen daarbinnen op `level={3}`. De projectrichtlijn (`components.md`) zegt:
   nooit niveaus overslaan.
2. Vervang de label/waarde-paren in `OrderSummaryCard` door een definitielijst:
   `<dl>` met `<dt>` voor het label en `<dd>` voor de waarde. Dat legt de relatie
   expliciet vast en haalt tientallen valse koppen uit de navigatie. Behoud de
   visuele opmaak (label links met vaste breedte, waarde rechts uitgelijnd).
3. Geef de prijs in `SplitPrice` één toegankelijke naam. Zet `aria-hidden="true"` op
   de losse spans en een `aria-label` op de container, in de vorm "10 euro 85".
   Let op de gevallen die de component al afvangt: waarden zonder cijfers ("Gratis",
   "standaard") en waarden zonder komma. En op de prefixen: "+ € 5,00" en "- € 2,00"
   moeten als "plus" en "min" begrijpelijk blijven.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Er mag visueel niets veranderen.

VERIFICATIE
Vraag je schermlezer om de koppenlijst van de pagina (NVDA: invoerhulp + F7;
VoiceOver: rotor → Headings). Die moet kort en betekenisvol zijn, met precies één
`<h1>`. Laat daarna de besteloverzichtkaart voorlezen: elke prijs moet als één
bedrag klinken.
```

---

## P10 — Reflow bij zoom en bewegingsvoorkeur · dekt M7, M8

```
PostNL "Digitaal Versturen": een React-prototype. De UI-taal is Nederlands.

DEEL 1 — EERST METEN, DAN PAS REPAREREN (M8, WCAG 1.4.10 en 1.4.4, AA)
De app gebruikt een vaste `height: 100vh` met `overflow: hidden`
(`ShipmentApp.tsx` regel 578-585) en meerkoloms grids zonder responsive fallback:
`1fr 1fr 1fr` in `CustomsFormCard.tsx` regel 226-228, `1fr 1fr` in
`InsuranceCard.tsx` regel 203-207 en in de categorielijst van `ShipmentApp.tsx`,
plus drie tegels naast elkaar in een `Flex` zonder `wrap` in `DeliveryTimeCard.tsx`
en `DeliveryLocationCard.tsx`.

Dit is nooit in een draaiende app geverifieerd. Doe dat eerst:
1. Zet de browser op 320 px breed (of 1280 px bij 400% zoom — WCAG 1.4.10 vraagt
   dat content leesbaar blijft zonder horizontaal scrollen).
2. Doorloop de volledige flow en noteer per kaart of er content wegvalt, of er
   horizontaal gescrold moet worden, en of de invoerbalk bereikbaar blijft.
3. Test ook of `100vh` op mobiel gedrag vertoont waarbij de browser-UI content
   afknelt.

RAPPORTEER WAT JE VINDT VOORDAT JE WIJZIGT. Als er niets misgaat, is dit geen
bevinding en moet het rapport worden bijgesteld.

Gaat er wél iets mis, dan is de richting:
- `100dvh` of `min-height` in plaats van vaste `100vh`
- grids die onder de mobiele breakpoint naar één kolom terugvallen; `Flex` uit
  `@design-system/react` ondersteunt responsieve waarden
  (`{ mobile, tablet, desktop }`) — gebruik dat in plaats van eigen media queries

DEEL 2 — BEWEGINGSVOORKEUR (M7, WCAG 2.3.3, AAA)
`ShipmentApp.tsx` regel 426-432 scrolt bij elk nieuw bericht geanimeerd via
`scrollIntoView({ behavior: "smooth" })`, zonder te kijken naar
`prefers-reduced-motion`.

Respecteer die voorkeur en val terug op `behavior: "auto"`. Bij sterke vergroting is
een geanimeerd springend viewport extra desoriënterend, dus dit raakt ook de
slechtziende doelgroep. Lees de voorkeur uit met
`window.matchMedia("(prefers-reduced-motion: reduce)")`.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde pixelwaarden of breakpoints — gebruik de
  responsieve props van `Flex` en `Grid`.
- Op desktopbreedte mag er niets veranderen.

VERIFICATIE
Herhaal de meting uit deel 1 en leg het verschil vast. Zet voor deel 2 in je OS
"beweging verminderen" aan en controleer dat het scrollen direct is.
```

---

## P11 — Contrastnorm · dekt M10 · GEEN CODETAAK

```
PostNL "Digitaal Versturen". Dit is een analyse- en adviesopdracht, geen wijziging.

CONTEXT
PostNL hanteert intern een contrastnorm van 5:1 voor tekst, strenger dan de
WCAG-eis van 4,5:1, vanwege het oranje in de huisstijl.

Twee tokencombinaties uit `tokens.md` halen WCAG AA wél maar de huisnorm niet:
- `--stamp-color-text-brand` (#D83D00) op wit → 4,6:1. Gebruikt voor alle
  kaarttitels (`<Heading color="brand">`).
- `--stamp-color-text-subtle` (#67687f) op `--stamp-color-background-variant`
  (#f1f1f2) → 4,8:1. Dat is de header- en footerachtergrond.

Ter vergelijking: `--stamp-color-text-subtle` op wit haalt 5,4:1 en voldoet wél.

OPDRACHT
1. Verifieer deze drie berekeningen met een contrasttool; ze zijn afgeleid uit de
   hex-waarden in de documentatie, niet gemeten op het scherm.
2. Inventariseer waar beide combinaties in de app daadwerkelijk voorkomen, en of ze
   als grote tekst kwalificeren — voor tekst vanaf 24 px of 18,66 px vet geldt een
   lagere eis (3:1), waardoor de bevinding daar vervalt.
3. Controleer ook de twee tokens die NIET in `tokens.md` gedocumenteerd staan en die
   ik daarom niet heb kunnen toetsen: `--stamp-color-border-selected` en
   `--stamp-color-border-focus-outline`. Die bepalen of de geselecteerde en de
   gefocuste staat zichtbaar zijn en moeten ≥3:1 halen tegen hun achtergrond.
   Zoek de waarden op in `node_modules/@design-system/tokens/dist/css/light.css`.
4. Leg twee opties voor aan design, met een aanbeveling: een donkerdere tekstvariant
   introduceren, of deze combinaties expliciet vastleggen als gedocumenteerde
   uitzondering op de huisnorm.

Wijzig geen tokens zonder akkoord — dit raakt de huisstijl en valt buiten de
bevoegdheid van een losse fix.

OPLEVERING
Een kort memo met de gemeten waarden, waar ze voorkomen, en de aanbeveling.
```

---

## P12 — De bevestigde kaart · dekt M9, M11

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

LET OP — OVERLAP
De `aria-disabled`-kant van M11 is al behandeld in prompt B7 uit
`docs/prompts-blokkerende-bevindingen.md`. Voer B7 eerst uit. Deze prompt gaat over
de visuele kant en het onderliggende ontwerpprobleem.

HET ONDERLIGGENDE PROBLEEM
De app behandelt "afgerond" als "uitgeschakeld". Dat zijn twee verschillende
toestanden, en de verwarring kost toegankelijkheid aan beide kanten.

Zichtbaar (M9, WCAG 1.4.3 AA met uitzondering): na bevestigen krijgt de hele kaart
`--stamp-color-background-disabled` plus `opacity: 0.6` (zie `SelectionTile.tsx`
regel 40 en de `submitted`-tak in alle kaarten). De tekst komt daarmee op ongeveer
4,2:1. Formeel zijn uitgeschakelde elementen vrijgesteld van 1.4.3 — maar dit ís de
weergave van de eigen keuze van de gebruiker, die de rest van het gesprek zichtbaar
in beeld blijft. Wil een slechtziende gebruiker terugkijken wat hij gekozen heeft,
dan is dat precies de tekst die is weggedimd.

Hoorbaar (M11): dezelfde redenering geldt voor de tabvolgorde. Zie B7.

OPDRACHT
Ontwerp en implementeer een derde toestand naast "actief" en "uitgeschakeld":
"bevestigd". Die toestand toont de gemaakte keuze met VOLLEDIG contrast — het is
informatie die de gebruiker moet kunnen teruglezen — maar maakt zichtbaar dat er
niets meer te bedienen valt.

Richting: verwijder `opacity: 0.6` en de disabled-achtergrond voor bevestigde
kaarten. Onderscheid de toestand met iets dat geen contrast kost, bijvoorbeeld een
rustiger rand, een bevestigingsicoon met tekstlabel, of het weglaten van de
niet-gekozen opties. Overleg met design welke richting bij de huisstijl past
voordat je bouwt.

Overweeg daarbij: moeten de niet-gekozen opties na bevestiging überhaupt zichtbaar
blijven? Als het antwoord nee is, wordt het probleem eenvoudiger — dan toon je alleen
nog de gekozen optie, op volle sterkte.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde kleuren of opacity-waarden.
- Contrast van alle tekst in de bevestigde toestand: minimaal 5:1 (interne
  PostNL-norm, strenger dan de WCAG-eis van 4,5:1).

VERIFICATIE
Doorloop de flow, bevestig alle stappen, en scroll terug naar boven. Elke gemaakte
keuze moet leesbaar zijn met de contrastchecker erop, en voorleesbaar met een
schermlezer.
```

---

## P13 — Dode links in header en footer · dekt M13

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
`src/app/components/chat/ShipmentApp.tsx` regel 158-176 (header) en 217-226 (footer)
bevatten zeven links met `href="#"`: "NL", "Inloggen", "Annuleren", "Privacy",
"Cookies", "Gebruiksvoorwaarden", "Algemene voorwaarden". Geen ervan doet iets.
WCAG 2.4.4 (A).

Twee aanvullende problemen bij de header:
- "NL" is als linknaam betekenisloos wanneer je hem los voorgelezen krijgt.
- De `ChevronDownIcon` bij "NL" en "Inloggen" suggereert een uitklapmenu dat er niet
  is — een link met een dropdown-affordance.

Waarom dit meer telt dan het lijkt: deelnemers tabben hier doorheen vóórdat ze bij
de inhoud zijn, bij elke stap opnieuw zolang de focus na bevestigen terugvalt naar
`<body>` (bevinding B7). En de skip-link die dit zou verzachten is bewust verborgen
(bevinding E3).

OPDRACHT
1. Geef "NL" een volledige naam: "Taal: Nederlands", of een `aria-label` met die
   strekking als de zichtbare tekst kort moet blijven.
2. Beoordeel per link of hij in het prototype een functie moet krijgen, of dat hij
   beter weggelaten kan worden. Een link die nergens heen gaat is voor een
   gebruikerstest schadelijker dan een link die er niet is.
3. Blijven ze staan, verwijder dan minstens de `ChevronDownIcon` waar er geen menu
   achter zit, en neem in de testbriefing op dat deze links niet werken.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Verander niets aan de visuele opmaak van header en footer, behalve wat stap 3
  vereist.

VERIFICATIE
Vraag je schermlezer om de linklijst van de pagina (NVDA: invoerhulp + F7 → Links;
VoiceOver: rotor → Links). Elke naam moet op zichzelf begrijpelijk zijn.
```

---

## P14 — Knopgrootte verifiëren · dekt M14 · GEEN CODETAAK

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`).

OPDRACHT — VERIFICATIE
`src/app/components/chat/ChatInputBox.tsx` regel 88-145 gebruikt drie keer
`IconButton` met `size="xl"`. De projectdocumentatie (`tokens.md` regel 70)
documenteert voor `IconButton` alleen `'s' | 'm' | 'l'`.

Zoek uit welke van tweeën waar is:
1. Lees `node_modules/@design-system/react/dist/src/components/IconButton/IconButton.d.ts`
   en controleer of `xl` een geldige waarde is.
2. Is hij ongeldig, meet dan in de DevTools de werkelijke afmeting van de drie
   knoppen. WCAG 2.5.8 (AA, WCAG 2.2) eist minimaal 24×24 CSS-pixels; voor
   touchdoelen is 44×44 de praktijknorm.
3. Meet ook of de knoppen elkaar niet te dicht naderen — 2.5.8 kent een uitzondering
   voor kleine doelen mits er genoeg tussenruimte is.

RAPPORTEER DE UITKOMST.
- Is `xl` geldig en zijn de knoppen groot genoeg: dan vervalt deze bevinding en moet
  `tokens.md` worden bijgewerkt, want die is dan verouderd.
- Is `xl` ongeldig: vervang door de grootste geldige waarde en controleer of de
  chatbalk er nog goed uitziet.

Dit is relevant voor de mobiele VoiceOver- en TalkBack-sessies, waar de knoppen met
een vinger worden geraakt.
```

---

## P15 — Losse codebevindingen

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`).

LET OP — OVERLAP
De twee bevindingen in `ChatInputBox.tsx` (ongeldige typografiewaarden, dode
`borderColor`) zijn al opgenomen in prompt B5 uit
`docs/prompts-blokkerende-bevindingen.md`. Sla ze hier over als B5 is uitgevoerd.

Geen WCAG-punten, wel bugs die de testomgeving beïnvloeden.

1. `src/app/components/PostNLLogo.tsx` regel 60-61: de uit `SIZE_MAP` berekende
   variabele `px` wordt nooit gebruikt; `width` en `height` staan hardgecodeerd op
   `"56px"`. De `size`-prop doet dus niets. Het logo in de header (`size="s"`,
   bedoeld: 32 px) en dat in de footer (`size="m"`, bedoeld: 40 px) zijn allebei
   56 px. Koppel de afmetingen aan `px`.

2. `src/app/components/shipment/ProductOfferCard.tsx` regel 227 en
   `OrderSummaryCard.tsx` regel 244 geven `color="subtle"` door aan `SplitPrice`.
   Dat component kent die prop niet (zie de `SplitPriceProps`-interface in
   `SplitPrice.tsx`). Stille no-op. Verwijder de prop, of voeg hem toe aan
   `SplitPrice` als de bedoeling was dat de totaalprijs subtieler wordt weergegeven —
   zoek uit wat het ontwerp voorschrijft.

3. `src/app/components/shipment/InsuranceCard.tsx` regel 47-155 bevat een eigen
   `InsuranceTile` die de logica van `SelectionTile.tsx` dupliceert in plaats van
   die te hergebruiken. Consolideer tot één implementatie. Doe dit ná bevinding B4
   (keuzetegels vervangen door `RadioButtonGroup`) als die nog op de rol staat —
   anders consolideer je code die daarna alsnog verdwijnt.

4. `src/app/App.tsx` regel 7-8: de Tambo-API-sleutel staat hardgecodeerd in de
   broncode en gaat mee in elke build. Geen toegankelijkheidspunt, wel iets om te
   regelen vóór je een testomgeving publiek bereikbaar maakt. Verplaats hem naar een
   omgevingsvariabele (`import.meta.env.VITE_TAMBO_API_KEY`) en roteer de huidige
   sleutel — hij staat inmiddels in de git-historie.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.

VERIFICATIE
Controleer visueel dat het logo in header en footer nu verschillende formaten heeft,
en dat de app nog bouwt en draait: `pnpm build`.
```
