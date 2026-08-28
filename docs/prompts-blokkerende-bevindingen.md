# Fixprompts voor de blokkerende bevindingen (B1–B8)

Bij `docs/toegankelijkheidsanalyse-2026-08.md`. Elke prompt is zelfstandig: kopieer hem los in een AI-codeersessie, ook als die sessie de rest van het rapport niet kent.

Voor de ernstige en matige bevindingen (E1–E10, M1–M14): zie `docs/prompts-overige-bevindingen.md`. Vier onderwerpen overlappen met de prompts hieronder — dat document bevat de overlaptabel.

**Volgorde.** B0 eerst — zonder die fix bouwt de app niet en kun je niets verifiëren. Daarna B1, B2, B3 (de chat hoorbaar maken), dan B4, dan B5/B6, dan B7/B8. Twee koppelingen: B1 en B2 vormen samen één ontwerp (B1 onderdrukt aankondigingsruis tijdens streamen, B2 dekt de stilte die daardoor ontstaat af) — voer B1 vóór B2 uit en lever ze samen op. B4 en B7 raken dezelfde bestanden; voer ze niet parallel uit.

**Verificatie.** Geen van deze fixes is af zonder een echte screenreadercontrole. Draai NVDA (Windows) of VoiceOver (macOS: Cmd+F5) en loop de flow door. Een axe-scan vindt B5 en B6, maar mist B1, B3, B7 en B8 volledig — die gaan over gedrag in de tijd, niet over de DOM op één moment.

---

## B0 — De ontbrekende import die de build breekt

```
In de repo PostNL "Digitaal Versturen" (React 18 + Vite + Tambo generative UI).

`src/app/lib/tambo.ts` regel 2 importeert `WelcomeCard` uit
`../components/shipment/WelcomeCard`. Dat bestand bestaat niet en heeft nooit in
de git-historie gestaan. De import wordt nergens gebruikt: `WelcomeCard` komt
niet voor in de `tamboComponents`-array verderop in het bestand. De Vite-build
faalt hierop.

Verwijder de ongebruikte import. Controleer daarna met `grep -rn "WelcomeCard" src/`
dat er geen enkele verwijzing meer overblijft, en dat `pnpm build` slaagt.

Verander verder niets.
```

---

## B1 — Live region op de berichtenlijst

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/chat/ShipmentApp.tsx` rendert de component `ChatView` de
berichtenlijst (rond regel 466-523) in een gewone `<div>`. Antwoordt de assistent
of verschijnt er een generatieve kaart, dan wordt dat niet aangekondigd aan
schermlezers. Een blinde gebruiker typt een bericht, hoort niets, en weet niet
dat er inmiddels een vraag op het scherm staat. WCAG 4.1.3 (AA).

OPDRACHT
Maak de container waarin de berichten worden gerenderd een live region:
`role="log"`, `aria-live="polite"`, `aria-relevant="additions"`.

Kies daarvoor het element dat bij de eerste render al bestaat en dat blijft
bestaan terwijl er berichten in verschijnen — NIET een element dat samen met zijn
inhoud gemount wordt. Een live region die tegelijk met zijn eerste inhoud in de
DOM komt, wordt door de meeste schermlezers niet opgepikt. Concreet: zet het op
de vaste wrapper, niet op iets binnen `messages.map(...)`.

Gebruik `polite`, niet `assertive` — `assertive` onderbreekt de gebruiker midden
in wat hij aan het lezen is.

Geef de region ook een toegankelijke naam, bijvoorbeeld via `aria-label="Gesprek"`.

VOORKOM GESTOTTER TIJDENS STREAMEN
De tekst van een antwoord komt token voor token binnen — zie de aparte tak in
`sanitizeMessageText` (regel 113-115) voor "tijdens streaming is de sluit-tag nog
niet aangekomen". Elk fragment veroorzaakt een re-render. Zonder maatregel gaat de
live region mogelijk bij élk fragment af: een stroom halve zinnen in plaats van
één antwoord.

Zet daarom `aria-busy="true"` op de live region zolang `isStreaming` waar is, en
zet hem op `false` zodra het streamen klaar is. Dat vertelt hulpsoftware om
aankondigingen vast te houden tot het bericht compleet is.

Drie voorwaarden:
1. Zet `aria-busy` ALLEEN op de berichtenlog, nooit op het `role="status"`-element
   uit bevinding B2 — daar zou het juist de laadmelding onderdrukken.
2. Zorg dat `aria-busy` gegarandeerd terugklapt naar `false`, ook op foutpaden.
   Blijft hij op `true` hangen, dan is de live region PERMANENT stil — aanzienlijk
   erger dan het gestotter dat je oploste. Leid hem af van `isStreaming` in plaats
   van hem apart bij te houden, zodat er geen tweede bron van waarheid ontstaat.
3. Behandel dit als progressive enhancement. NVDA en JAWS honoreren `aria-busy`
   redelijk; VoiceOver is er historisch slordiger in. Wordt het genegeerd, dan val
   je terug op het gestotter — niet op stilte. Verifieer per schermlezer.

Tijdens het streamen is de log dus stil. Dat gat wordt gevuld door de statusmelding
uit bevinding B2 ("PostNL-assistent is bezig met antwoorden"). B1 en B2 vormen samen
één ontwerp: B1 onderdrukt de ruis, B2 dekt de stilte af. Voer ze in die volgorde uit.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` — dat zijn legacy shadcn-componenten
  die volgens `guidelines/Guidelines.md` verboden zijn in dit project.
- Geen hardgecodeerde kleuren of pixelwaarden; gebruik `--stamp-*` tokens.
- Verander niets aan de visuele weergave.

VERIFICATIE
Start de app, stuur een bericht en luister met VoiceOver of NVDA of het antwoord
wordt voorgelezen zonder dat je ernaartoe navigeert.

Test daarna specifiek op het gestotter: stuur een bericht dat een lang antwoord
oplevert en luister of je één samenhangend antwoord hoort, of een stroom halve
zinnen. Doe dit met minstens twee schermlezers — `aria-busy` wordt niet overal
gelijk ondersteund. Werkt het in geen enkele, overweeg dan de live region pas te
vullen zodra het bericht compleet is, in plaats van hem tijdens het streamen mee
te laten groeien.
```

---

## B2 — Laadstatus hoorbaar maken

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/chat/ShipmentApp.tsx`, rond regel 528, wordt tijdens het
streamen van een AI-antwoord een kale spinner getoond:

    <span className="stamp-spinner stamp-spinner--l" />

Geen tekst, geen rol, geen live region. Het streamen kan seconden duren; in die
tijd krijgt een schermlezergebruiker geen enkel signaal en lijkt de app kapot.
WCAG 4.1.3 (AA).

OPDRACHT
1. Vervang de losse `<span>` door het `Loader`-component uit
   `@design-system/react` met `variant="spinner"`. Lees eerst de props in
   `node_modules/@design-system/react/dist/src/components/Loader/Loader.d.ts` —
   het component heeft mogelijk al een label-prop voor precies dit doel. Gebruik
   die als hij bestaat, in plaats van er zelf iets omheen te bouwen.
2. Zorg dat er een tekstuele status wordt aangekondigd zolang `isStreaming` waar
   is, bijvoorbeeld in een `role="status"`-element met de tekst
   "PostNL-assistent is bezig met antwoorden".
3. Kondig ook het einde aan, zodat hoorbaar is wanneer de gebruiker weer aan zet
   is — bijvoorbeeld door de statustekst leeg te maken zodra `isStreaming` false
   wordt, of door hem te vervangen door "Antwoord ontvangen".

Let op dat het `role="status"`-element permanent in de DOM staat en dat alleen de
tekst erbinnen verandert. Een status-element dat mount en unmount wordt vaak
gemist.

SAMENHANG MET B1
Als bevinding B1 al is uitgevoerd, staat de berichtenlog tijdens het streamen op
`aria-busy="true"` en is hij dus stil — bewust, om te voorkomen dat elk
binnenkomend tekstfragment apart wordt voorgelezen. Deze statusmelding is wat dat
gat opvult. B1 onderdrukt de ruis, B2 dekt de stilte af; los van elkaar werkt geen
van beide goed.

Zet `aria-busy` NIET op dit `role="status"`-element — dat zou juist de laadmelding
onderdrukken.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- Gebruik `--stamp-*` tokens, geen hardgecodeerde waarden.
- De visuele spinner moet er hetzelfde uitzien als nu.

VERIFICATIE
Stuur een bericht en luister of het begin én het einde van het wachten worden
aangekondigd.
```

---

## B3 — Wie zegt wat

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/chat/ShipmentApp.tsx`, rond regel 484-503, worden berichten
van de gebruiker en van de assistent alleen visueel onderscheiden: `alignSelf`
(`flex-end` versus `flex-start`) en een achtergrondkleur op gebruikersberichten.
Voor een schermlezer is het één ononderbroken lap tekst waarin vraag en antwoord
in elkaar overlopen. In een gesprek van tien beurten is dat niet meer te volgen.
WCAG 1.3.1 (A).

OPDRACHT
1. Zet vóór de tekst van elk bericht een visueel verborgen afzender:
   "Jij:" bij `message.role === "user"`, "PostNL-assistent:" bij de assistent.
2. Gebruik daarvoor de bestaande `sr-only`-utility uit `@design-system/css` —
   die is al globaal geïmporteerd via `src/styles/index.css`. Bouw GEEN eigen
   visually-hidden-klasse.
3. Markeer elk bericht als `<article>` in plaats van een kale `<div>`, zodat
   gebruikers per bericht kunnen navigeren in plaats van per regel.

Let op: één afzenderlabel per bericht, niet per contentblok. Een bericht kan
meerdere blokken bevatten (`block.type === "text"` en `block.type === "component"`);
het label hoort op het niveau van `message`, niet binnen de `.map` over
`message.content`.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- Er mag visueel niets veranderen.

VERIFICATIE
Laat een schermlezer het gesprek van boven naar beneden voorlezen en controleer
dat bij elke beurt hoorbaar is wie er spreekt.
```

---

## B4 — Geselecteerde staat doorgeven

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
De keuzetegels in de verzendflow zijn zelfgebouwde `<button>`-elementen zonder
`aria-pressed` of `role="radio"`/`aria-checked`. De selectie wordt alleen getoond
met een absoluut gepositioneerde `<div aria-hidden>` die een ring tekent — dus
expliciet verborgen voor hulpsoftware. Een schermlezergebruiker hoort drie knoppen
die klinken alsof geen ervan gekozen is, en krijgt na het klikken geen bevestiging.
WCAG 1.3.1 en 4.1.2 (beide A).

Verzwarend: meerdere kaarten hebben een vóórgeselecteerde standaardoptie
(`DeliveryTimeCard` staat op "standard", `DeliveryLocationCard` op "pickup-point",
`DestinationCard` op "NL"). Wie niets kiest en bevestigt, verstuurt een keuze die
hij nooit heeft horen bestaan.

BETROKKEN BESTANDEN (allemaal in `src/app/components/shipment/`)
- `SelectionTile.tsx` en `SelectionRow.tsx` — de gedeelde tegelcomponenten
- `InsuranceCard.tsx` — heeft een eigen `InsuranceTile` die `SelectionTile`
  dupliceert in plaats van hergebruikt
- `DestinationCard.tsx` — heeft de tegellogica nóg een keer inline, met
  focusafhandeling via directe DOM-manipulatie (`querySelector` + `style.display`)
- Gebruikers van de tegels: `DeliveryTimeCard`, `DeliveryLocationCard`,
  `HsCodeCard`, `ExportReasonCard`, `OrderSummaryCard`

OPDRACHT
Vervang de zelfgebouwde tegels door `RadioButton` + `RadioButtonGroup` uit
`@design-system/react`. De projectdocumentatie (`components.md`) wijst die
combinatie expliciet aan voor selecteerbare optietegels, en `RadioButton` heeft
een `message`-prop voor de beschrijvende tekst.

Lees eerst de echte API in:
- `node_modules/@design-system/react/dist/src/components/RadioButton/RadioButton.d.ts`
- `node_modules/@design-system/react/dist/src/components/RadioButtonGroup/RadioButtonGroup.d.ts`

Let op de quirk die in `tokens.md` staat: `RadioButton` heeft een VERPLICHTE
`message`-prop (de kaartbeschrijving) en een optionele `label` (kleinere kop
erboven). Verifieer dat tegen het typebestand voordat je bouwt.

Dit lost in één keer op: geselecteerde staat, groepsrelatie,
pijltjestoetsnavigatie en de focusring — allemaal zaken die nu handmatig zijn
nagebouwd en waarvan alleen het visuele deel is meegenomen.

Geef elke groep een toegankelijke naam die verwijst naar de kop van de kaart
(bijvoorbeeld via `aria-labelledby` naar de `<Heading>` erboven), zodat hoorbaar
is waar de keuze over gaat.

Consolideer tegelijk `InsuranceTile` en de inline tegels in `DestinationCard`, zodat
er nog maar één implementatie is.

ALS DE ONTWERPKEUZE IS OM DE EIGEN TEGELS TE BEHOUDEN
Dan is het minimum: `role="radiogroup"` op de wrapper met een toegankelijke naam,
`role="radio"` + `aria-checked` op elke tegel, en pijltjestoetsnavigatie met een
roving tabindex (alleen de geselecteerde optie in de tabvolgorde). Dat is fors
handwerk dat het design system al voor je heeft gedaan — meld dat expliciet
voordat je die route inslaat.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- Zet GEEN `tabindex` op `<div>`-elementen — gebruik native elementen of de
  componenten van het design system.
- Geen hardgecodeerde kleuren of pixelwaarden; `--stamp-*` tokens.
- De kaarten moeten er visueel hetzelfde uitzien.

VERIFICATIE
Doorloop elke kaart met een schermlezer: hoor je bij het binnenkomen welke optie
al geselecteerd is, en hoor je de wijziging als je een andere kiest? Controleer
ook dat pijltjestoetsen binnen de groep werken en dat Tab de hele groep als één
stop behandelt.
```

---

## B5 — Naam voor het chat-invoerveld

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
`src/app/components/chat/ChatInputBox.tsx` regel 97-117 bevat het belangrijkste
invoerveld van de hele app als een ruwe `<input>` met alleen een `placeholder`.
Geen `<label>`, geen `aria-label`, geen `aria-labelledby`. Een schermlezer kondigt
het aan als "invoerveld, leeg". Bovendien verdwijnt een placeholder zodra je typt,
dus ook voor slechtziende gebruikers is het geen betrouwbaar label.
WCAG 3.3.2 en 4.1.2 (beide A).

De projectdocumentatie is hier expliciet over (`components.md`): "Never rely
solely on placeholder for instructions — always include a label."

OPDRACHT
Vervang de ruwe `<input>` door `TextInput` uit `@design-system/react`, gewikkeld
in een `FormField` met een `FormFieldLabel` — precies zoals `AddressCard.tsx` en
`SenderCard.tsx` het al goed doen. Neem dat als voorbeeld.

Is een zichtbaar label ontwerpmatig niet gewenst, gebruik dan een `FormFieldLabel`
met de `sr-only`-utility uit `@design-system/css`. Gebruik NIET alleen een
`aria-label`: dan bestaat het label ook visueel niet voor mensen die het nodig
hebben. Voorgestelde labeltekst: "Beschrijf wat je wilt versturen".

Genereer het `id` met Reacts `useId()`-hook, niet met een vaste string — dit
component wordt op twee plekken gerenderd (landingsview en chatview).

RUIM METEEN TWEE BUGS OP IN HETZELFDE BESTAND
1. Regel 113-115: `fontSize`, `fontFamily` én `lineHeight` krijgen alle drie de
   waarde `var(--stamp-color-text-default)` — een kleurtoken. Alle drie ongeldig,
   dus de tekst valt terug op de browserstandaard. Vervangen door de juiste
   `--stamp-text-body-*`-tokens, of laten vervallen als `TextInput` de typografie
   zelf regelt.
2. Regel 36-43: de variabele `borderColor` wordt berekend maar nergens gebruikt —
   de JSX zet de rand rechtstreeks. Daardoor heeft de `variant`-prop ("landing"
   versus "chat") geen enkel visueel effect. Bepaal wat de bedoeling was en maak
   het consistent, of verwijder de dode code én de prop.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Enter moet blijven versturen, Shift+Enter niet — dat gedrag staat nu in
  `handleKeyDown` en moet behouden blijven.

VERIFICATIE
Tab naar het veld en controleer met een schermlezer dat de naam wordt voorgelezen.
Controleer dat de tekstgrootte nu de huisstijl volgt in plaats van de
browserstandaard.
```

---

## B6 — Namen voor de eenheidkeuzes in het douaneformulier

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/shipment/CustomsFormCard.tsx`, in de hulpcomponent
`SuffixInput` rond regel 117-138, staan twee keuzelijsten als kale
`<select>`-elementen zonder label of `aria-label`: Gram/Kilogram/Ons voor het
gewicht, en Euro/Dollar/Pond voor de waarde.

Het bijbehorende `FormFieldLabel` ("Totale gewicht", "Totale waarde") is met
`htmlFor` gekoppeld aan het TEKSTVELD ernaast, niet aan de select. Een
schermlezergebruiker hoort dus een naamloze keuzelijst en moet uit de opties zelf
afleiden wat er gevraagd wordt. Bij douanegegevens is dat meer dan hinderlijk:
een verkeerde eenheid betekent een verkeerde aangifte.
WCAG 3.3.2 en 4.1.2 (beide A).

OPDRACHT
1. Geef beide selects een eigen toegankelijke naam: "Eenheid voor gewicht" en
   "Valuta". Gebruik bij voorkeur een `sr-only` `<label>` met een eigen `id`,
   niet alleen `aria-label`.
2. Onderzoek of `InputGroup` uit `@design-system/react` bedoeld is voor precies
   deze samengestelde velden (invoer + eenheid). Zo ja, gebruik dat in plaats van
   de handmatige flexconstructie met een `<div>` eromheen. Lees
   `node_modules/@design-system/react/dist/src/components/InputGroup/InputGroup.d.ts`.
3. Regel 97 en 123: beide controls hebben `outline: "none"` zonder vervangende
   focusindicator. Er is bij focus geen enkele visuele verandering — een harde
   WCAG 2.4.7-fout. Verwijder `outline: "none"`, of vervang het door een zichtbare
   `outline` met `outline-offset` op `:focus-visible`.
4. De `id`'s in dit bestand (`aantal`, `gewicht`, `waarde`, `land-herkomst`) zijn
   hardgecodeerd. Deze kaart kan in een generatieve chat twee keer verschijnen,
   waardoor dubbele DOM-id's ontstaan en labelkoppelingen breken. Genereer ze met
   Reacts `useId()`.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- De randkleur van de invoervelden is nu `--stamp-color-border-default` (#bec0cb),
  dat op wit maar 1,8:1 haalt terwijl WCAG 1.4.11 minimaal 3:1 eist. Gebruik
  `--stamp-color-border-strong` (5,4:1), of laat `TextInput` de rand bepalen.

VERIFICATIE
Tab door het formulier met een schermlezer: elke control moet een eigen naam
hebben, en elke control moet zichtbaar focus krijgen.
```

---

## B7 — Focus behouden bij bevestigen

```
PostNL "Digitaal Versturen": een React-prototype met het Stamp design system
(`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
Alle tien kaarten in `src/app/components/shipment/` renderen hun actieknop
voorwaardelijk, volgens dit patroon:

    {!submitted && !isSending && (
      <Flex justifyContent="end">
        <Button variant="primary" ...>Bevestigen</Button>
      </Flex>
    )}

Drukt de gebruiker op die knop, dan wordt precies het element waar de focus op
staat uit de DOM verwijderd. De browser laat de focus terugvallen naar `<body>`.
De gebruiker staat weer aan het begin van de pagina en moet zich door de hele
gespreksgeschiedenis heen tabben om bij het nieuwe antwoord te komen. Bij een
verzendproces van acht stappen: acht keer opnieuw beginnen. WCAG 2.4.3 (A).

Voorkomens: `AddressCard.tsx:213`, `SenderCard.tsx:181`, `CustomsFormCard.tsx:288`,
`DeliveryLocationCard.tsx:119`, `DeliveryTimeCard.tsx:170`, `DestinationCard.tsx:335`,
`ExportReasonCard.tsx:141`, `HsCodeCard.tsx:81`, `InsuranceCard.tsx:252`,
`OrderSummaryCard.tsx:272`. `ProductOfferCard.tsx:231` gebruikt dezelfde constructie
met `decision` in plaats van `submitted`.

OPDRACHT
Kies één aanpak en pas hem consistent toe op alle elf plekken.

Voorkeur: verwijder de knop niet uit de DOM. Laat hem staan en zet `aria-disabled="true"`
met een handler die de actie blokkeert. Waarom `aria-disabled` en niet `disabled`:
een `disabled` knop is niet focusbaar en verdwijnt uit de tabvolgorde, waardoor de
focus alsnog verloren gaat en de gebruiker niet kan teruglezen wat hij bevestigd
heeft. Met `aria-disabled` blijft de knop bereikbaar en voorleesbaar, maar niet
activeerbaar. Pas de knoptekst of een `sr-only`-toevoeging aan zodat hoorbaar is
dat de stap is afgerond.

Alternatief, als weghalen de bewuste ontwerpkeuze is: verplaats de focus expliciet
naar het nieuwe antwoord of naar de kop van de volgende kaart zodra die gerenderd
is, met `tabindex="-1"` op dat doelelement.

DOE HETZELFDE VOOR DE UITGESCHAKELDE KEUZETEGELS
In `SelectionTile.tsx:25` en `SelectionRow.tsx:23` krijgen na bevestiging ALLE
opties `disabled` — ook de niet-gekozen. Daardoor kan een schermlezergebruiker
niet meer teruglezen waaruit hij koos, terwijl een ziende gebruiker de opties nog
gewoon in beeld heeft. Gebruik ook daar `aria-disabled` met een blokkerende handler.

SAMENHANG
Als je bevinding B4 (vervangen door `RadioButtonGroup`) nog moet uitvoeren, doe die
eerst — hij raakt dezelfde bestanden. Voer B4 en B7 niet parallel uit.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Visueel moet een bevestigde kaart er hetzelfde uitzien als nu.

VERIFICATIE
Doorloop de flow volledig met alleen het toetsenbord. Controleer na élke bevestiging
waar de focus staat — hij mag nooit op `<body>` belanden. Test dat met
`document.activeElement` in de console én met een schermlezer.
```

---

## B8 — Focus en aankondiging bij viewwissels

```
PostNL "Digitaal Versturen": een chat-prototype in React met het Stamp design
system (`@design-system/react`). De UI-taal is Nederlands.

PROBLEEM
In `src/app/components/chat/ShipmentApp.tsx` zijn er twee plekken waar de
interface volledig verandert zonder aankondiging of focusverplaatsing.
WCAG 2.4.3 (A) en 4.1.3 (AA).

1. LANDING NAAR CHAT (regel 588-605). Zodra `hasMessages` waar wordt, vervangt
   `ChatView` de hele `LandingView`. Alles verandert: de `<h1>` "Goedemorgen, wat
   wil je versturen?" verdwijnt, de footer verdwijnt, het invoerveld verhuist naar
   onderaan. Voor een blinde gebruiker gebeurt dat geluidloos, en het document
   heeft daarna helemaal geen `<h1>` meer.

2. CATEGORIE KIEZEN OP DE LANDINGSPAGINA (regel 299-385). Klikt de gebruiker op
   "Kleding & textiel", dan wordt de categorielijst in-place vervangen door een
   lijst suggesties — de knop waar de focus op stond bestaat niet meer. Klikt hij
   vervolgens op een suggestie, dan wordt de tekst alleen in het invoerveld gezet
   (`onChange(prompt)`), zonder te versturen en zonder de focus daarheen te
   verplaatsen. Er gebeurt dan schijnbaar helemaal niets.

OPDRACHT
1. Geef `ChatView` een eigen `<h1>` die het gesprek benoemt (mag `sr-only` zijn,
   bijvoorbeeld "Gesprek over je zending"), zodat het document altijd precies één
   `<h1>` heeft.
2. Verplaats bij de wissel landing → chat de focus naar die kop. Zet er
   `tabindex="-1"` op zodat hij programmatisch focusbaar is zonder in de
   tabvolgorde te komen.
3. Verplaats bij het kiezen van een categorie de focus naar de kop van de nieuwe
   suggestielijst (de `<Heading level={2}>` met de categorienaam), zodat hoorbaar
   is dat de lijst is vervangen. Doe hetzelfde bij "Terug".
4. Verplaats bij het kiezen van een suggestie de focus naar het chat-invoerveld,
   zodat hoorbaar is dat de tekst daar is ingevuld en de gebruiker hem kan
   aanvullen voordat hij verstuurt.

Voer focusverplaatsingen uit in een `useEffect` die op de betreffende
statuswijziging reageert, niet direct in de klikhandler — anders verplaats je de
focus voordat React het nieuwe element heeft gerenderd.

SAMENHANG
Als bevinding B1 (live region op de berichtenlijst) al is uitgevoerd, wordt het
eerste antwoord sowieso aangekondigd. Deze fix zorgt ervoor dat de gebruiker ook
weet waar hij zich bevindt en verder kan navigeren.

CONSTRAINTS
- Importeer NOOIT uit `src/app/components/ui/` (legacy shadcn, verboden).
- Zet GEEN `tabindex="0"` op `<div>`-elementen. `tabindex="-1"` op een kop die je
  programmatisch focust is wél correct en is precies wat hier bedoeld wordt.
- `--stamp-*` tokens, geen hardgecodeerde waarden.
- Er mag visueel niets veranderen; controleer dat de gefocuste kop geen ongewenste
  focusring krijgt (gebruik `:focus-visible`, niet `:focus`).

VERIFICATIE
Doorloop met een schermlezer: start op de landingspagina, kies een categorie, kies
een suggestie, verstuur. Bij elke stap moet hoorbaar zijn wat er veranderd is en
waar je nu bent.
```
