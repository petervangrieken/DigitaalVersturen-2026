# Toegankelijkheidsanalyse — Digitaal Versturen (prototype)

**Datum:** 25 augustus 2026
**Onderwerp:** gereedheid voor gebruikerstest met blinde en slechtziende deelnemers
**Getoetst tegen:** WCAG 2.2 niveau A/AA (EN 301 549 §9), plus de interne PostNL-norm van 5:1 tekstcontrast
**Methode:** statische broncode-analyse van de volledige app

---

## Samenvatting

Het prototype is in de huidige staat **niet zinvol te testen met een screenreader**. Dat komt niet door een reeks losse WCAG-detailfouten, maar doordat de drie dingen die een gespreksinterface bruikbaar maken alle drie ontbreken:

1. er wordt niet aangekondigd dát er een antwoord komt of is;
2. er wordt niet aangekondigd wát er staat en van wie het komt;
3. er wordt niet doorgegeven wat er geselecteerd is.

Een blinde deelnemer zou tijdens de sessie voornamelijk stilte testen. Wat je dan meet is niet het concept, maar de afwezigheid van semantiek.

Voor **slechtziende deelnemers met vergroting** is de situatie duidelijk beter. Daar zijn vijf punten blokkerend (E6, E7, M8, M9, M10) en is een test met de juiste kanttekeningen wél al waardevol.

De goede kant: de formulierkaarten (adres, afzender, douane) zijn met `FormField` + `FormFieldLabel` + `htmlFor` netjes gelabeld, de knoppen in de chatbalk hebben correcte Nederlandse `aria-label`s, en het logo heeft een goede `role="img"`-constructie. De onderdelen die het design system levert zijn grotendeels goed gebruikt; de problemen zitten vrijwel allemaal in de zelfgebouwde componenten die het design system omzeilen.

**Inschatting:** de blokkerende set (B1–B8, E1, E2) is een beperkte ingreep, omdat Stamp de benodigde componenten al levert — `RadioButton` + `RadioButtonGroup` voor de keuzetegels, `Loader` voor de spinner, `FormFieldError` voor validatie, en de `sr-only`-utility uit `@design-system/css` voor verborgen tekst.

---

## 0. Blokkade vóór alles: de app bouwt niet

`src/app/lib/tambo.ts:2` importeert `WelcomeCard`:

```
import { WelcomeCard } from "../components/shipment/WelcomeCard";
```

Dat bestand bestaat niet in de repository en heeft er ook nooit in gestaan (gecontroleerd tegen de volledige git-historie). De import wordt verder nergens gebruikt — `WelcomeCard` staat niet in de `tamboComponents`-array. De Vite-build faalt hierop.

**Actie:** verwijder de ongebruikte import, of voeg het ontbrekende bestand toe. Zonder dit is er geen testomgeving om in te testen. Prioriteit: nu.

---

## Deel 1 — Wat is belangrijk bij testen met blinde en slechtziende gebruikers

### 1.1 Wat een screenreadergebruiker nodig heeft in een chat-app

Een chatinterface is voor een screenreader een lastig genre, omdat er content verschijnt zonder dat de gebruiker iets doet. Vier dingen moeten geregeld zijn:

- **Nieuwe berichten worden aangekondigd.** De berichtenlijst moet een live region zijn (`role="log"` met `aria-live="polite"`), zodat een binnenkomend antwoord wordt voorgelezen zonder dat de gebruiker eerst moet gaan zoeken of er iets veranderd is. Zonder dit is de gebruiker afhankelijk van gokken en handmatig terugscrollen.
- **Duidelijk is wie wat zegt.** In een visuele chat doen uitlijning en achtergrondkleur dat werk. Voor een screenreader moet dat in tekst: een verborgen "Jij:" en "PostNL-assistent:" vóór elk bericht.
- **Wachten is hoorbaar.** Een AI-antwoord kan seconden duren. "Bezig met antwoorden…" moet in een live region staan, anders lijkt de app kapot.
- **De focus beweegt mee.** Zodra een interface-onderdeel verdwijnt of vervangen wordt, moet de focus ergens zinnigs landen. Anders valt hij terug naar het begin van de pagina en moet de gebruiker de hele flow opnieuw doorlopen.

### 1.2 Wat een slechtziende gebruiker nodig heeft

- **Contrast van tekst én van bedieningselementen.** Niet alleen letters: ook de rand van een invoerveld, de focusring en de markering van een geselecteerde optie moeten zichtbaar zijn. WCAG eist 3:1 voor die elementen; PostNL hanteert intern 5:1 voor tekst.
- **Werken bij 200–400% zoom.** Content mag niet worden afgeknepen en er mag geen horizontale scrollbalk ontstaan. Vaste `100vh`-hoogtes en meerkoloms grids zijn hier de gebruikelijke boosdoeners.
- **Geen informatie die alleen via kleur of vorm loopt.** Een vinkje versus een kruisje naast dezelfde tekst is geen bruikbaar onderscheid — niet voor iemand die vergroot, niet voor iemand die luistert.
- **Een zichtbare focusindicator die overleeft.** Ook in de hoog-contrastmodus van Windows, waar de browser kleuren overschrijft.

### 1.3 Adviezen voor de testopzet

- **Laat deelnemers hun eigen hulpmiddel en eigen instellingen gebruiken.** Een ervaren NVDA-gebruiker heeft spraaksnelheid, uitgebreidheid en sneltoetsen jarenlang op zichzelf afgestemd. Een testlaptop met standaardinstellingen levert een andere gebruiker op.
- **Test op de taak, niet op de interface.** Geef een opdracht ("verstuur dit pakket naar je zus in België") en observeer. Vraag niet "wat vind je van deze kaart?".
- **Onderscheid bij de analyse of iemand vastloopt op de flow of op een technische barrière.** Dit is bij dit prototype het grootste analyserisico. Als een deelnemer niet doorheeft dat er een keuzekaart is verschenen, ligt dat aan bevinding B1 — niet aan het idee om een keuze in een kaart aan te bieden. Zonder dat onderscheid schrijf je een bugrapport toe aan het concept en trek je de verkeerde conclusie.
- **Plan ruim tijd.** De deelnemer verwerkt een AI-gesprek en een schermlezer tegelijk. Dat is cognitief zwaarder dan een gewoon formulier.
- **Betrek ervaringsdeskundigen bij het opstellen van de taken**, niet alleen bij het uitvoeren ervan.

### 1.4 Wat je met dit prototype sowieso niet kunt testen

De interface is generatief: welke kaarten verschijnen, hangt af van wat het model besluit te renderen. Twee deelnemers met dezelfde opdracht kunnen een verschillende flow krijgen. Gevolgen voor de opzet:

- **Leg per sessie vast wélke kaarten de deelnemer kreeg**, anders zijn de sessies onderling niet vergelijkbaar.
- **Foutafhandeling is niet testbaar** — er is geen validatie in de app (zie E9). Juist het herstellen van een fout is voor blinde gebruikers het moment waarop het misgaat. Dat blinde vlek blijft na deze test bestaan.
- **De flow is alleen op desktop-breedte ontworpen.** Mobiel testen met VoiceOver/TalkBack loopt tegen de vaste meerkoloms layouts aan (M8).

---

## Deel 2 — Bevindingen

Gerangschikt op ernst. Per bevinding: wat er misgaat, wie het raakt, het WCAG-criterium en een concrete aanbeveling.

Ernstindeling volgt één vraag: **kan een blinde deelnemer hiermee de taak afmaken?** Alleen wat dat blokkeert staat in de eerste categorie.

---

### Blokkerend voor een screenreadertest

#### B1 — Geen live region op de berichtenlijst

**Waar:** `src/app/components/chat/ShipmentApp.tsx:466-523`
**Raakt:** screenreadergebruikers (desktop en mobiel)
**WCAG:** 4.1.3 Statusberichten (AA)

**Wat is het probleem?**
De berichtenlijst is een gewone `<div>`. Als de assistent antwoordt of een keuzekaart rendert, verschijnt die content zonder enige aankondiging. De gebruiker typt een bericht, hoort niets, en heeft geen manier om te weten dat er inmiddels een vraag op het scherm staat. In een chatinterface is dit geen randgeval — het is de kern van de interactie.

**Waarom is dit een overtreding?**
4.1.3 vereist dat statuswijzigingen die niet de focus krijgen, wél aan hulpsoftware worden doorgegeven. Een binnenkomend chatbericht is precies dat.

**Aanbeveling**
Maak de scrollcontainer met de berichten een live region: `role="log"` met `aria-live="polite"` en `aria-relevant="additions"`. Gebruik `polite`, niet `assertive` — dat laatste onderbreekt de gebruiker midden in wat hij aan het lezen is. Let op dat het element bij de eerste render al in de DOM staat; een live region die tegelijk met zijn inhoud verschijnt, wordt door de meeste screenreaders niet opgepikt.

**Prioriteit:** nu — zonder dit is er geen zinvolle test.

---

#### B2 — Laadindicator is onzichtbaar voor hulpsoftware

**Waar:** `src/app/components/chat/ShipmentApp.tsx:528`
**Raakt:** screenreadergebruikers
**WCAG:** 4.1.3 Statusberichten (AA)

**Wat is het probleem?**
De spinner is een kale `<span className="stamp-spinner stamp-spinner--l" />` — geen tekst, geen rol, geen live region. Terwijl het model antwoordt (dat kan meerdere seconden duren) is er voor een screenreadergebruiker geen enkel signaal. De app is stil en lijkt niet te reageren, wat mensen ertoe brengt hun vraag nog eens te versturen.

**Waarom is dit een overtreding?**
"Bezig met laden" is een statusbericht. Het krijgt geen focus, dus het moet via een live region worden doorgegeven.

**Aanbeveling**
Gebruik het `Loader`-component uit `@design-system/react` met `variant="spinner"` in plaats van de losse span — dat is de door het design system bedoelde route en volgt de huisstijl. Zorg dat er een tekstuele status meekomt, bijvoorbeeld een `role="status"`-element met "PostNL-assistent is bezig met antwoorden". Kondig ook het einde aan, zodat duidelijk is wanneer de gebruiker weer aan zet is.

**Prioriteit:** nu.

---

#### B3 — Afzender van een bericht wordt alleen visueel aangeduid

**Waar:** `src/app/components/chat/ShipmentApp.tsx:484-503`
**Raakt:** screenreadergebruikers
**WCAG:** 1.3.1 Info en relaties (A)

**Wat is het probleem?**
Berichten van de gebruiker worden rechts uitgelijnd met een grijze achtergrond; berichten van de assistent links zonder achtergrond. Dat onderscheid zit uitsluitend in `alignSelf` en `background`. Voorgelezen wordt het één ononderbroken lap tekst waarin vraag en antwoord in elkaar overlopen. In een gesprek van tien beurten is dat niet meer te volgen.

**Waarom is dit een overtreding?**
1.3.1 vereist dat informatie die visueel wordt overgebracht — hier: wie spreekt — ook programmatisch beschikbaar is.

**Aanbeveling**
Zet vóór elk bericht een visueel verborgen afzender: "Jij:" respectievelijk "PostNL-assistent:". Gebruik daarvoor de `sr-only`-utility die `@design-system/css` al levert (zie `styles.md:133`) — geen eigen hulpklasse bouwen. Overweeg elk bericht bovendien als `<article>` te markeren, zodat gebruikers per bericht kunnen navigeren in plaats van per regel.

**Prioriteit:** nu.

---

#### B4 — Geselecteerde staat wordt nergens doorgegeven

**Waar:** `src/app/components/shipment/SelectionTile.tsx:22`, `SelectionRow.tsx:20`, `InsuranceCard.tsx:60`, `DestinationCard.tsx:196`
**Raakt:** screenreadergebruikers
**WCAG:** 1.3.1 Info en relaties (A), 4.1.2 Naam, rol, waarde (A)

**Wat is het probleem?**
Alle keuzetegels zijn `<button>`-elementen zonder `aria-pressed` of `role="radio"` met `aria-checked`. De selectie wordt uitsluitend getoond met een absoluut gepositioneerde `<div aria-hidden>` die een ring om de tegel tekent — expliciet verborgen voor hulpsoftware. Een screenreadergebruiker hoort dus drie knoppen die klinken alsof geen ervan gekozen is, en krijgt na het klikken geen bevestiging dat er iets veranderd is.

Dit raakt bijna elke keuze in de flow: bezorgtijd, bezorglocatie, verzekering, exportreden, HS-code, betaalmethode en bestemming. Verzwarend: verschillende kaarten hebben een **vóórgeselecteerde standaardoptie** (`selected` staat bij `DeliveryTimeCard` op `"standard"`, bij `DeliveryLocationCard` op `"pickup-point"`, bij `DestinationCard` op `"NL"`). Een gebruiker die niets kiest en op "Bevestigen" drukt, verstuurt een keuze die hij nooit heeft horen bestaan.

**Waarom is dit een overtreding?**
4.1.2 vereist dat de *waarde* (hier: geselecteerd of niet) van een bedieningselement programmatisch bepaalbaar is. 1.3.1 vereist hetzelfde voor de groepsrelatie tussen de opties.

**Aanbeveling**
Vervang de zelfgebouwde tegels door `RadioButton` + `RadioButtonGroup` uit `@design-system/react`. `components.md` wijst die combinatie expliciet aan voor "radio cards / selectable option tiles" en `RadioButton` heeft er een `message`-prop voor de beschrijvende tekst. Dat lost in één keer de geselecteerde staat, de groepsrelatie, de pijltjestoetsnavigatie en de focusring op — allemaal zaken die nu handmatig zijn nagebouwd en waarvan alleen het visuele deel is meegenomen. Geef de groep een toegankelijke naam die verwijst naar de kaartkop.

Wordt om ontwerpredenen toch aan de eigen tegels vastgehouden, dan is `role="radio"` + `aria-checked` met een `role="radiogroup"`-wrapper het minimum, inclusief pijltjestoetsnavigatie. De radiogroup-route is dan wel een fors stuk handwerk dat het design system al voor je heeft gedaan.

**Prioriteit:** nu.

---

#### B5 — Het chat-invoerveld heeft geen toegankelijke naam

**Waar:** `src/app/components/chat/ChatInputBox.tsx:97-117`
**Raakt:** screenreadergebruikers
**WCAG:** 3.3.2 Labels of instructies (A), 4.1.2 Naam, rol, waarde (A)

**Wat is het probleem?**
Het belangrijkste invoerveld van de hele app is een ruwe `<input>` met alleen een `placeholder`. Geen `<label>`, geen `aria-label`, geen `aria-labelledby`. Een screenreader kondigt het aan als "invoerveld, leeg" — zonder enige aanwijzing waar het voor dient. Bovendien verdwijnt een placeholder zodra je begint te typen, dus ook voor slechtziende en cognitief belaste gebruikers is het geen betrouwbaar label.

De eigen documentatie is hier expliciet over (`components.md:113`): *"Never rely solely on placeholder for instructions — always include a label."*

**Waarom is dit een overtreding?**
4.1.2 vereist een toegankelijke naam voor elk bedieningselement; 3.3.2 vereist een label bij elk invoerveld.

**Aanbeveling**
Gebruik `TextInput` uit `@design-system/react` in een `FormField` met een `FormFieldLabel`, zoals de adres- en afzenderkaarten het al goed doen. Is een zichtbaar label ontwerpmatig niet gewenst, gebruik dan een `sr-only` label — niet alleen een `aria-label`, want dan bestaat het label ook visueel niet voor mensen die het nodig hebben. Voorstel: "Beschrijf wat je wilt versturen".

**Prioriteit:** nu.

---

#### B6 — Eenheidkeuzes in het douaneformulier hebben geen naam

**Waar:** `src/app/components/shipment/CustomsFormCard.tsx:117-138`
**Raakt:** screenreadergebruikers
**WCAG:** 3.3.2 Labels of instructies (A), 4.1.2 Naam, rol, waarde (A)

**Wat is het probleem?**
De keuzes Gram/Kilogram/Ons en Euro/Dollar/Pond zijn kale `<select>`-elementen zonder label of `aria-label`. Het bijbehorende `FormFieldLabel` ("Totale gewicht", "Totale waarde") is met `htmlFor` gekoppeld aan het tekstveld ernaast, niet aan de select. De gebruiker hoort dus een naamloze keuzelijst en moet uit de opties zelf afleiden wat er gevraagd wordt.

Bij douanegegevens is dit meer dan hinderlijk: een verkeerde eenheid betekent een verkeerde aangifte.

**Aanbeveling**
Geef beide selects een eigen toegankelijke naam ("Eenheid voor gewicht", "Valuta"). Overweeg `InputGroup` uit `@design-system/react`, dat voor deze samengestelde velden bedoeld is, in plaats van de handmatige flexconstructie.

**Prioriteit:** nu.

---

#### B7 — De focus gaat verloren bij elke bevestiging

**Waar:** alle tien kaarten; o.a. `AddressCard.tsx:213`, `ProductOfferCard.tsx:231`, `DeliveryTimeCard.tsx:170`
**Raakt:** screenreadergebruikers en toetsenbordgebruikers
**WCAG:** 2.4.3 Focus volgorde (A)

**Wat is het probleem?**
Elke kaart rendert zijn actieknop voorwaardelijk: `{!submitted && !isSending && (<Button …/>)}`. Zodra de gebruiker op "Bevestigen" drukt, wordt precies het element waar de focus op staat uit de DOM verwijderd. De browser laat de focus dan terugvallen naar `<body>`. De gebruiker staat weer aan het begin van de pagina en moet zich door de hele geschiedenis van het gesprek heen tabben om bij het nieuwe antwoord te komen.

Dit gebeurt bij élke stap in de flow. Bij een verzendproces van acht stappen betekent dat acht keer opnieuw beginnen.

**Waarom is dit een overtreding?**
2.4.3 vereist dat de focusvolgorde betekenis en bedienbaarheid behoudt. Focus die naar `body` valt, doet dat niet.

**Aanbeveling**
Verwijder de knop niet, maar zet hem op `disabled` (of beter: `aria-disabled` met een blokkerende handler, zodat hij bereikbaar blijft — zie ook M11). Blijft weghalen de ontwerpkeuze, verplaats de focus dan expliciet naar het nieuwe antwoord of naar de kop van de volgende kaart zodra die gerenderd is. Combineer dat met B1, zodat het nieuwe bericht sowieso wordt aangekondigd.

**Prioriteit:** nu.

---

#### B8 — Focus- en aankondigingsgat bij de overgang landing → chat

**Waar:** `src/app/components/chat/ShipmentApp.tsx:588-605` en `:299-385`
**Raakt:** screenreadergebruikers
**WCAG:** 2.4.3 Focus volgorde (A), 4.1.3 Statusberichten (AA)

**Wat is het probleem?**
Twee plekken waar de interface in zijn geheel verandert zonder dat iemand het te horen krijgt:

1. **Landing → chat.** Zodra `hasMessages` waar wordt, wordt de hele `LandingView` vervangen door `ChatView`. Er verandert alles: de `<h1>` "Goedemorgen, wat wil je versturen?" verdwijnt, de footer verdwijnt, het invoerveld verhuist naar onderaan. Geen aankondiging, geen focusverplaatsing.
2. **Categorie kiezen op de landingspagina.** Klikt de gebruiker op "Kleding & textiel", dan wordt de categorielijst in-place vervangen door een lijst suggesties. De knop waar de focus op stond bestaat niet meer. En klikt de gebruiker vervolgens op een suggestie, dan wordt de tekst alleen in het invoerveld gezet — zonder te versturen en zonder de focus daarheen te verplaatsen. Voor een blinde gebruiker gebeurt er dan schijnbaar helemaal niets.

**Aanbeveling**
Verplaats bij elke viewwissel de focus naar de kop van de nieuwe view (met `tabindex="-1"` op die kop, zodat hij programmatisch focusbaar is zonder in de tabvolgorde te komen). Verplaats bij het kiezen van een suggestie de focus naar het invoerveld, zodat hoorbaar is dat de tekst daar is ingevuld en de gebruiker hem kan aanvullen.

**Prioriteit:** nu.

---

### Ernstig

#### E1 — `lang="en"` terwijl de app volledig Nederlands is

**Waar:** `index.html:3`; Engelse disclaimer in `ChatInputBox.tsx:158-169`
**Raakt:** screenreadergebruikers
**WCAG:** 3.1.1 Taal van de pagina (A)

**Wat is het probleem?**
De pagina declareert Engels. Een screenreader kiest daarop zijn stemsynthese en leest de volledige Nederlandse interface voor met een Engelse uitspraak. "Bezorgtijd", "Huisnummer/postbus", "Verzekerd tot" — dat wordt onverstaanbaar. Dit is de goedkoopste fix in dit rapport met veruit het grootste directe effect.

Omgekeerd staat er één Engelse zin ín de Nederlandse interface: "We use AI, check important info." Die heeft na de fix een eigen `lang="en"` nodig, of beter: een Nederlandse vertaling.

**Aanbeveling**
Zet `<html lang="nl">`. Vertaal de disclaimer naar het Nederlands; is dat niet gewenst, markeer hem dan met `lang="en"` (WCAG 3.1.2, Taal van onderdelen).

**Prioriteit:** nu — één regel.

---

#### E2 — Geen `<main>`-landmark

**Waar:** `src/app/components/chat/ShipmentApp.tsx:577-607`
**Raakt:** screenreadergebruikers
**WCAG:** 1.3.1 Info en relaties (A)

**Wat is het probleem?**
De app heeft een `<header>` en een `<footer>`, maar de inhoud daartussen is een reeks ongemarkeerde `<div>`s. Landmark-navigatie — de manier waarop ervaren screenreadergebruikers als eerste een onbekende pagina verkennen — heeft geen hoofdgebied om naartoe te springen. Dit verergert B7 en B8: als de focus verloren gaat, is er ook geen snelle route terug naar de inhoud.

**Aanbeveling**
Wikkel de inhoud van `LandingView` en `ChatView` in een `<main>`. Eén per pagina, en niet genest in header of footer.

**Prioriteit:** nu.

---

#### E3 — Skip-links worden actief onderdrukt

**Waar:** `src/app/App.tsx:11-44`, gedupliceerd in `src/styles/theme.css:21-24`
**Raakt:** toetsenbordgebruikers en screenreadergebruikers
**WCAG:** 2.4.1 Blokken omzeilen (A)

**Wat is het probleem?**
`App.tsx` bevat een `useEffect` die skip-links op twee manieren onmogelijk maakt: er wordt een stylesheet in de `<head>` geïnjecteerd die alles met "skip" in de klassenaam op `display: none !important` zet, én er wordt over álle `<a>`-elementen in de DOM geïterateerd om elke link te verbergen waarvan de tekst of `href` "skip" bevat, of die naar `#main-content` of `#content` wijst. Dat wordt na 300 ms nog eens herhaald om laat gerenderde links alsnog te pakken.

Dit is dus geen vergeten feature — het is een bewuste, met opzet hardnekkig gemaakte onderdrukking van een toegankelijkheidsvoorziening. De eigen documentatie zegt er het volgende over (`components.md:106`): *"SkipLinks: Required on every page for keyboard accessibility."*

De aanleiding is vermoedelijk cosmetisch: de skip-link stond niet in het Figma-ontwerp. Het effect is dat toetsenbordgebruikers zich bij elke interactie langs zeven header- en footerlinks moeten tabben voordat ze bij de inhoud zijn — wat, gecombineerd met B7 (focus valt terug naar `body` na elke bevestiging), bij elke stap in de flow opnieuw gebeurt.

**In deze opdracht bewust niet gerepareerd**, op verzoek. Wel vastgelegd als bekende afwijking.

**Aanbeveling**
Voor de test: acceptabel, mits je bij de analyse meeweegt dat deelnemers hierdoor meer navigatielast ervaren dan het uiteindelijke product zou geven. **Vóór productie: blokkerend.** Verwijder zowel de `useEffect` in `App.tsx` als het CSS-blok in `theme.css`, en voeg tegelijk het `<main>`-landmark uit E2 toe — zonder landmark heeft een skip-link geen bestemming.

**Prioriteit:** vóór productie, niet vóór de test.

---

#### E4 — "More info" is een `<span>` met `cursor: pointer`

**Waar:** `src/app/components/chat/ChatInputBox.tsx:161-168`
**Raakt:** toetsenbordgebruikers en screenreadergebruikers
**WCAG:** 2.1.1 Toetsenbord (A), 4.1.2 Naam, rol, waarde (A)

**Wat is het probleem?**
De link "More info" onder de chatbalk is een `<span>` met onderstreping en een muisaanwijzer. Hij is niet focusbaar, heeft geen rol, en heeft ook geen klikhandler — hij ziet er alleen uit als een link. Voor muisgebruikers is dat verwarrend, voor toetsenbord- en screenreadergebruikers bestaat hij simpelweg niet.

**Aanbeveling**
Gebruik het `Link`-component uit `@design-system/react`, dat `as="button"` ondersteunt voor niet-navigerende acties. Voeg géén `tabindex` toe aan de bestaande span — een native element geeft rol, focusgedrag en toetsenbordafhandeling gratis; een span met `tabindex` geeft alleen het focusgedrag en laat de rest ontbreken.

**Prioriteit:** vóór de test (het is een eenregelige wijziging en het valt deelnemers op).

---

#### E5 — Twee knoppen in de chatbalk doen niets

**Waar:** `src/app/components/chat/ChatInputBox.tsx:88-127`
**Raakt:** alle deelnemers, met een specifiek risico voor blinde deelnemers
**WCAG:** 4.1.2 Naam, rol, waarde (A) / testhygiëne

**Wat is het probleem?**
"Bijlage toevoegen" en "Spraakbericht" zijn correct gelabelde `IconButton`s zonder `onClick`. Ze zitten in de tabvolgorde en worden keurig aangekondigd, maar er gebeurt niets als je ze activeert.

Voor een test met blinde deelnemers is met name de spraakknop een reëel risico: dat is precies de affordance waarvan je zou verwachten dat deze doelgroep hem opzoekt. De deelnemer probeert hem, er gebeurt niets, en de conclusie die je meeneemt gaat over spraakinvoer terwijl je een niet-aangesloten knop hebt getest.

**Aanbeveling**
Kies één van drie: implementeren, verbergen, of `aria-disabled="true"` met een toelichting dat de functie in dit prototype niet werkt. Neem de keuze op in de testbriefing.

**Prioriteit:** vóór de test.

---

#### E6 — Randcontrast van invoervelden onder de norm

**Waar:** `src/app/components/shipment/CustomsFormCard.tsx:80-82`; kaartranden na bevestigen in alle kaarten
**Raakt:** slechtziende gebruikers
**WCAG:** 1.4.11 Contrast van niet-tekstuele content (AA)

**Wat is het probleem?**
`--stamp-color-border-default` (#bec0cb) op wit haalt **1,8:1**. De eis voor de contouren van bedieningselementen is 3:1. Dit is de rand van de invoervelden in het douaneformulier en de rand die kaarten krijgen zodra ze bevestigd zijn. Een slechtziende gebruiker ziet een invoerveld niet als invoerveld — er is geen zichtbare begrenzing.

**Nuance:** het chat-invoerveld is hier ten onrechte van verdacht. `ChatInputBox.tsx:36-43` berekent wel een `borderColor` die in chat-modus op `border-default` uitkomt, maar die variabele wordt nooit gebruikt: de JSX zet de rand altijd op `--stamp-color-border-strong` (#67687f, **5,4:1** — ruim voldoende). Het chatveld voldoet dus. De dode variabele betekent wel dat de `variant`-prop ("landing" versus "chat") geen enkel visueel effect heeft; zie de losse codebevindingen.

**Aanbeveling**
Gebruik `--stamp-color-border-strong` (5,4:1) voor de contouren van invoervelden, of nog beter: gebruik `TextInput` uit het design system in plaats van de handmatige input-met-suffix-constructie, zodat de bordertokens door het design system worden bepaald. Voor puur decoratieve scheidingslijnen mag `border-default` blijven — 1.4.11 geldt alleen voor elementen die je moet kunnen bedienen of identificeren.

**Prioriteit:** vóór een test met slechtziende deelnemers.

---

#### E7 — Focusindicator ontbreekt of is fragiel

**Waar:** `CustomsFormCard.tsx:97` en `:123`; `SelectionTile.tsx:43`, `SelectionRow.tsx:41`, `ChatInputBox.tsx:110`, `DestinationCard.tsx:240-253`
**Raakt:** slechtziende gebruikers en toetsenbordgebruikers
**WCAG:** 2.4.7 Focus zichtbaar (AA)

**Wat is het probleem?**
Twee gradaties:

1. **Volledig ontbrekend.** De inputs en de select in het douaneformulier hebben `outline: "none"` zonder enige vervanging. Er is bij focus geen enkele visuele verandering. Dit is een harde fout.
2. **Aanwezig maar fragiel.** De keuzetegels en het chatveld zetten ook `outline: "none"`, maar tekenen zelf een ring als absoluut gepositioneerde `<div>` die via React-state (`onFocus`/`onBlur`) wordt in- en uitgeschakeld. Visueel werkt dat, maar het is kwetsbaar: in de hoog-contrastmodus van Windows (`forced-colors`) worden achtergrond- en randkleuren overschreven en kan de ring verdwijnen, terwijl een echte `outline` daar juist behouden blijft. `DestinationCard.tsx` doet hetzelfde nog een slag rommeliger, via directe DOM-manipulatie met `querySelector` en `style.display`.

Aanvullend: de ringen worden getoond bij `:focus`, niet bij `:focus-visible`, dus ze verschijnen ook na een muisklik.

**Aanbeveling**
Verwijder `outline: "none"` waar er geen vervanging is. Gebruik voor de zichtbare focus `outline` met `outline-offset` in CSS op `:focus-visible`, in plaats van een JS-gestuurde ring-div — een outline werkt in forced-colors en heeft geen React-state nodig. Test expliciet in de Windows hoog-contrastmodus.

Bij overname van `RadioButton` uit het design system (B4) vervalt dit probleem voor de tegels vanzelf.

**Prioriteit:** vóór een test met slechtziende deelnemers.

---

#### E8 — Inbegrepen versus niet-inbegrepen loopt alleen via een pictogram

**Waar:** `src/app/components/shipment/InsuranceCard.tsx:104-119`
**Raakt:** screenreadergebruikers en slechtziende gebruikers
**WCAG:** 1.4.1 Gebruik van kleur (A), 1.3.1 Info en relaties (A)

**Wat is het probleem?**
In de verzekeringskaart staat in de ene tegel "Met track & trace" met een vinkje ervoor, en in de tegel "Nee, dankje" staat "Met track & trace" met een kruisje ervoor. Dezelfde tekst, tegengestelde betekenis, en het onderscheid zit volledig in de vorm en kleur van een icoon.

Verzwarend: iconen uit `@design-system/icons` hebben standaard `role="presentation"` (`icon-discovery.md:58`). Ze zijn dus niet alleen visueel subtiel — voor hulpsoftware bestaan ze helemaal niet. Een screenreadergebruiker hoort in beide tegels exact dezelfde regel en krijgt geen enkele aanwijzing dat de ene inbegrepen is en de andere niet. Bij het kiezen van een verzekering is dat een betekenisvol verschil.

**Aanbeveling**
Zet het onderscheid in tekst. Ofwel in de zichtbare tekst ("Zonder track & trace"), ofwel met een `sr-only`-toevoeging: "inbegrepen" / "niet inbegrepen". De eerste route is beter — hij helpt ook slechtziende gebruikers en mensen die het icoon niet als betekenisdragend herkennen.

**Prioriteit:** vóór de test.

---

#### E9 — Geen validatie en geen foutmeldingen

**Waar:** `AddressCard.tsx`, `SenderCard.tsx`, `CustomsFormCard.tsx`, `DestinationCard.tsx`
**Raakt:** iedereen, screenreadergebruikers het hardst
**WCAG:** 3.3.1 Foutidentificatie (A), 3.3.3 Foutsuggestie (AA)

**Wat is het probleem?**
Geen enkel formulierveld wordt gecontroleerd. Postcode, e-mailadres en telefoonnummer worden ongezien doorgestuurd; verplichte velden zijn niet als zodanig gemarkeerd (alleen "(niet verplicht)" als suffix bij twee optionele velden, waaruit de gebruiker het omgekeerde moet afleiden); `FormFieldError` uit het design system wordt nergens gebruikt. Een leeg adresformulier kan bevestigd worden en levert de tekst "Ontvanger: , , e-mail: niet opgegeven".

Voor de test betekent dit vooral: **foutafhandeling is niet testbaar.** En juist dát is voor blinde gebruikers het moment waarop het misgaat — een foutmelding die visueel verschijnt maar niet wordt aangekondigd, is de klassieke manier waarop een formulier onbruikbaar wordt.

**Aanbeveling**
Voor het prototype: markeer minimaal de verplichte velden en voeg validatie toe op postcode en e-mail, met `FormFieldError` en een `aria-describedby`-koppeling naar het veld. Koppel de foutmelding aan een live region zodat hij bij het versturen wordt aangekondigd, en verplaats de focus naar het eerste foutieve veld.

Wordt dit niet vóór de test opgelost: neem expliciet in de rapportage op dat foutherstel niet is getest en een openstaand risico blijft.

**Prioriteit:** vóór productie; wenselijk vóór de test.

---

#### E10 — Dubbele DOM-id's bij herhaald renderen

**Waar:** `AddressCard.tsx:93+` (`naam`, `postcode`, `huisnummer`, `toevoeging`, `email`, `telefoon`), `CustomsFormCard.tsx:231+` (`aantal`, `gewicht`, `waarde`, `land-herkomst`), `DestinationCard.tsx:289` (`ander-land`)
**Raakt:** screenreadergebruikers
**WCAG:** 1.3.1 Info en relaties (A)

**Wat is het probleem?**
De kaarten gebruiken vaste, hardgecodeerde id's. In een generatieve chat is het volstrekt normaal dat dezelfde kaart twee keer in één gesprek verschijnt — bijvoorbeeld als de gebruiker een adres wil corrigeren. Beide kaarten blijven dan in de thread staan, en er zijn twee elementen met `id="naam"`. `htmlFor` koppelt altijd aan het eerste; het label van de tweede kaart wijst dan naar het invoerveld van de eerste. De gebruiker vult een veld in dat volgens de screenreader iets anders heet.

Aanvullend risico: `FormField` krijgt hetzelfde `id` mee als de input die het omhult (bijv. `<FormField id="sender-naam">` rond `<TextInput id="sender-naam">`). Of dat een duplicaat in de DOM oplevert, hangt af van hoe `FormField` intern rendert — te verifiëren zodra het pakket geïnstalleerd is.

**Aanbeveling**
Genereer id's per kaartinstantie, bijvoorbeeld met React's `useId()`-hook, en stel de veldnamen daaraan samen. Controleer daarna met een DOM-scan op duplicaten.

**Prioriteit:** vóór de test — het is een aannemelijk scenario zodra iemand een correctie wil maken.

---

### Matig

| # | Bevinding | Locatie | WCAG | Aanbeveling |
|---|---|---|---|---|
| **M1** | **Vlag-`alt` is de landcode.** `alt={code}` levert "N L, afbeelding, Nederland" — ruis vóór de informatie die er al staat. | `DestinationCard.tsx:142`, `:317` | 1.1.1 (A) | `alt=""` — de landnaam staat ernaast. De vlaggen komen bovendien van een externe CDN (jsDelivr); valt die weg, dan verschijnt de alt-tekst als zichtbare tekst. Overweeg lokale assets voor een testomgeving. |
| **M2** | **Combobox "Zoek een land" heeft geen zichtbaar label.** `FormField id="ander-land"` bevat geen `FormFieldLabel`; er is alleen een placeholder. | `DestinationCard.tsx:289-296` | 3.3.2 (A) | Voeg een `FormFieldLabel` toe, bijv. "Ander land". |
| **M3** | **Koppenstructuur klopt niet in chatmodus.** De enige `<h1>` staat in de landingsview en verdwijnt zodra het gesprek begint; daarna begint het document op `<h2>`. Kaarten zijn onderling inconsistent: de meeste openen op `<h2>`, `ProductOfferCard` op `<h3>`. | `ShipmentApp.tsx:285`, `ProductOfferCard.tsx:134-135` | 1.3.1 (A) | Geef de chatview een eigen `<h1>` (mag `sr-only`) en laat alle kaarten op hetzelfde niveau openen. `components.md:92`: nooit niveaus overslaan. |
| **M4** | **Label/waarde-paren in de samenvatting zijn `<h4>`'s.** Elk veld ("Naam", "Adres", "Bezorgtijd", …) is een kop. Koppen-navigatie — het belangrijkste oriëntatiemiddel — loopt daardoor vol met tientallen items, en de relatie label→waarde bestaat alleen in de layout. | `OrderSummaryCard.tsx:202-221` | 1.3.1 (A) | Gebruik een definitielijst (`<dl>`/`<dt>`/`<dd>`). Dat legt de relatie expliciet vast en houdt de koppenlijst bruikbaar. Juist bij de besteloverzichtkaart telt dit: dit is het moment waarop de gebruiker zijn hele bestelling controleert vóór betaling. |
| **M5** | **Prijzen worden in twee losse elementen gesplitst.** `SplitPrice` zet euro's en centen in aparte spans binnen een flexcontainer, om ze visueel verschillend groot te maken. Screenreaders kunnen dat als losse getallen voorlezen ("€ 10," … "85"). | `SplitPrice.tsx:63-77` | 1.3.1 (A) | Geef het geheel één toegankelijke naam, bijv. `aria-label="10 euro 85"` op de container met `aria-hidden` op de losse spans. |
| **M6** | **Betaallogo's zijn naamloze inline-SVG's.** iDEAL/Wero, Mastercard en Visa, zonder `aria-hidden` en zonder toegankelijke naam. | `OrderSummaryCard.tsx:37-101` | 1.1.1 (A) | `aria-hidden="true"` — de namen "iDEAL" en "Creditcard / Visa, Mastercard of American Express" staan al in de tekst ernaast. |
| **M7** | **`scrollIntoView({behavior:"smooth"})` zonder controle op `prefers-reduced-motion`.** Bij elk nieuw bericht scrollt de pagina geanimeerd. | `ShipmentApp.tsx:426-432` | 2.3.3 (AAA) | Respecteer `prefers-reduced-motion: reduce` en val terug op `behavior: "auto"`. Bij sterke vergroting is een geanimeerd springend viewport extra desoriënterend. |
| **M8** | **Vaste `height: 100vh` met `overflow: hidden`, en meerkoloms grids zonder responsive fallback** (`1fr 1fr 1fr` in het douaneformulier, `1fr 1fr` in de verzekeringskaart en de categorielijst, drie tegels naast elkaar in `Flex` zonder `wrap`). Bij 200–400% zoom of op mobiel kan content worden afgeknepen. | `ShipmentApp.tsx:578-585`, `CustomsFormCard.tsx:226-228`, `InsuranceCard.tsx:203-207` | 1.4.10 Reflow (AA), 1.4.4 Herschalen van tekst (AA) | Gebruik `100dvh` of `min-height` in plaats van een vaste `100vh`, en laat de grids naar één kolom terugvallen onder de mobiele breakpoint. **Te verifiëren zodra de app draait** — dit is de bevinding met de meeste onzekerheid in dit rapport. |
| **M9** | **Een bevestigde kaart wordt onleesbaar.** Na bevestigen krijgt de hele kaart `background-disabled` plus `opacity: 0.6`. De tekst komt daarmee op ongeveer **4,2:1**. Formeel zijn uitgeschakelde elementen vrijgesteld van 1.4.3 — maar dit is de weergave van de eigen keuze van de gebruiker, die de rest van het gesprek zichtbaar in beeld blijft. Wil een slechtziende gebruiker terugkijken wat hij gekozen heeft, dan is dat precies de tekst die is weggedimd. | `SelectionTile.tsx:40`, alle kaarten | 1.4.3 (AA, met uitzondering) | Gebruik voor een bevestigde kaart een "afgerond"-weergave met volledig contrast in plaats van een uitgegrijsde formulierweergave. Het is een andere toestand dan "uitgeschakeld". |
| **M10** | **Contrast net onder de PostNL-norm van 5:1.** `--stamp-color-text-brand` (#D83D00) op wit haalt **4,6:1**; `--stamp-color-text-subtle` (#67687f) op `--stamp-color-background-variant` (#f1f1f2, de header- en footerachtergrond) haalt **4,8:1**. Beide voldoen aan WCAG AA (4,5:1), maar niet aan de intern vastgelegde 5:1. | tokens uit `tokens.md`; kaarttitels, header, footer | 1.4.3 (AA) | Geen WCAG-fout, wel een afwijking van de eigen norm. Ter beslissing aan design: donkerder tekstvariant, of de norm voor deze twee combinaties expliciet vastleggen als uitzondering. Ter vergelijking: `text-subtle` op wit haalt 5,4:1 en voldoet wél. |
| **M11** | **Uitgeschakelde tegels verdwijnen uit de tabvolgorde.** Na bevestigen krijgen alle opties `disabled`, dus ook de niet-gekozen. Een screenreadergebruiker kan niet meer teruglezen waaruit hij koos — terwijl een ziende gebruiker de opties nog gewoon in beeld heeft. | `SelectionTile.tsx:25`, `SelectionRow.tsx:23` | 1.3.1 (A) / usability | Gebruik `aria-disabled="true"` in plaats van `disabled`, met een handler die de actie blokkeert. Het element blijft dan bereikbaar en voorleesbaar, maar niet activeerbaar. Lost tegelijk een deel van B7 op. |
| **M12** | **Geen `autocomplete`-attributen** op naam, postcode, huisnummer, e-mail en telefoon. Gebruikers die op automatisch invullen leunen — waaronder veel mensen met een motorische of cognitieve beperking — moeten alles handmatig typen. | `AddressCard.tsx`, `SenderCard.tsx` | 1.3.5 Identificeer het doel van de invoer (AA) | Voeg `autocomplete="name"`, `"postal-code"`, `"email"`, `"tel"` toe. Voor afzender versus ontvanger: gebruik de `shipping`/`billing`-prefixen om de twee te onderscheiden. |
| **M13** | **Header- en footerlinks gaan nergens heen.** "NL", "Inloggen", "Annuleren" en de vier footerlinks hebben `href="#"`. "NL" is als linknaam bovendien betekenisloos, en de `ChevronDownIcon` suggereert een uitklapmenu dat er niet is. | `ShipmentApp.tsx:158-176`, `:217-226` | 2.4.4 Linkdoel (A) / testhygiëne | Voor een prototype verdedigbaar. Maar deelnemers tabben er wél doorheen vóórdat ze bij de inhoud zijn — extra pijnlijk nu de skip-link verborgen is (E3). Geef "NL" minimaal een volledige naam ("Taal: Nederlands") en neem de niet-werkende links op in de briefing. |
| **M14** | **Mogelijk ongeldige knopgrootte.** `IconButton size="xl"` wordt gebruikt, terwijl `tokens.md:70` alleen `s\|m\|l` documenteert. Is de waarde ongeldig, dan valt de knop terug op een ongestyled formaat en kan het raakvlak onder de 24×24 px komen. | `ChatInputBox.tsx:88-145` | 2.5.8 Grootte van aanwijsdoel (AA, WCAG 2.2) | **Te verifiëren zodra `@design-system/react` geïnstalleerd is.** Relevant voor de mobiele VoiceOver/TalkBack-sessies. |

---

### Losse codebevindingen

Geen WCAG-punten, maar wel zaken die de testomgeving beïnvloeden:

- **`PostNLLogo.tsx:60-61`** — de uit `SIZE_MAP` berekende `px` wordt nooit gebruikt; `width` en `height` staan hardgecodeerd op `56px`. De `size`-prop doet niets, dus het logo in de header (`size="s"`, bedoeld: 32 px) en dat in de footer (`size="m"`, bedoeld: 40 px) zijn allebei 56 px.
- **`ChatInputBox.tsx:113-115`** — `fontSize`, `fontFamily` én `lineHeight` krijgen alle drie de waarde `var(--stamp-color-text-default)`, een kleurtoken. Alle drie ongeldig, dus de invoertekst valt terug op de browserstandaard en volgt de huisstijltypografie niet. Relevant voor slechtziende deelnemers, want het is de tekst die zij in het belangrijkste veld van de app lezen.
- **`ChatInputBox.tsx:36-43`** — de `borderColor`-variabele wordt berekend maar nergens gebruikt; de JSX zet de rand rechtstreeks. Gevolg: de `variant`-prop ("landing" versus "chat") heeft geen enkel visueel effect. Zie ook de nuance bij E6.
- **`ProductOfferCard.tsx:227`, `OrderSummaryCard.tsx:244`** — `color="subtle"` wordt aan `SplitPrice` doorgegeven, dat die prop niet kent. Stille no-op.
- **`InsuranceCard.tsx:47-155`** dupliceert de logica van `SelectionTile.tsx` in plaats van die te hergebruiken. Relevant omdat elke fix aan de geselecteerde staat (B4) nu op twee plekken moet gebeuren.
- **`App.tsx:7-8`** — de Tambo-API-sleutel staat hardgecodeerd in de broncode en gaat mee in elke build. Geen toegankelijkheidspunt, wel iets om te regelen vóór je een testomgeving publiek bereikbaar maakt.

---

## Deel 3 — Advies: is dit testbaar?

### Met blinde deelnemers: nee, nog niet

De blokkerende set (B1–B8) is niet optioneel. Zonder live region, afzenderaanduiding, geselecteerde staat, veldnamen en focusbeheer test je geen concept — je test de afwezigheid van semantiek. De uitkomsten zouden systematisch negatief zijn om redenen die niets zeggen over het ontwerp dat je wilt valideren.

**Minimale set om testbaar te worden:** B1 t/m B8, plus E1 (`lang="nl"`) en E2 (`<main>`).

Dat is minder werk dan de lijst suggereert, omdat het design system het meeste al levert:

| Nodig | Bestaande oplossing |
|---|---|
| Geselecteerde staat + groepssemantiek (B4) | `RadioButton` + `RadioButtonGroup` |
| Laadstatus (B2) | `Loader` met `variant="spinner"` |
| Naam voor het chatveld (B5) | `TextInput` in `FormField` + `FormFieldLabel` |
| Verborgen afzendertekst (B3) | `sr-only`-utility uit `@design-system/css` |
| Validatie en fouten (E9) | `FormFieldError` |
| Skip-link (E3, later) | `SkipLinks` |

Vrijwel elk blokkerend punt komt voort uit een zelfgebouwde variant van iets dat Stamp al toegankelijk heeft opgelost. De kortste route naar een testbare app loopt dus niet via het toevoegen van ARIA-attributen aan de eigen componenten, maar via het vervangen ervan door de design-systemvarianten.

### Met slechtziende deelnemers: ja, met kanttekeningen

Hier is de situatie beduidend beter. Blokkerend zijn E6 (randcontrast), E7 (focusindicator) en M9 (onleesbare bevestigde kaarten); M8 (reflow bij zoom) moet eerst geverifieerd worden zodra de app draait. M10 is een afwijking van de eigen 5:1-norm, geen WCAG-fout, en hoeft de test niet tegen te houden.

Een sessie met vergroting kan waarschijnlijk doorgaan zodra E6, E7 en M9 opgelost zijn — mits je bij de analyse meeweegt dat de deelnemer een prototype ziet dat op één schermbreedte is ontworpen.

### Volgorde van aanpak

1. De ontbrekende `WelcomeCard`-import (Deel 0) — anders is er geen app.
2. E1 (`lang="nl"`) — één regel, direct hoorbaar effect.
3. B1, B2, B3 — de gespreksinterface hoorbaar maken.
4. B4 — de keuzetegels vervangen door `RadioButtonGroup`.
5. B5, B6, E2 — namen en landmark.
6. B7, B8 — focusbeheer.
7. E6, E7, M9 — de visuele set voor slechtziende deelnemers.
8. Overige punten in een vervolgsprint; E3 en E9 zijn blokkerend vóór productie, niet vóór de test.

---

## Deel 4 — Wat deze analyse níet dekt

Dit rapport is opgesteld door de volledige broncode statisch door te lezen. Het draaien van de app was in deze omgeving niet mogelijk, omdat `node_modules/` ontbreekt en `@design-system/*` op een private scope staat die hier niet resolvebaar is. Concreet betekent dat:

- **Geen geautomatiseerde scan.** Er is geen axe-DevTools-run gedaan. Fouten die alleen in de gerenderde DOM zichtbaar worden — dubbele id's, ARIA die door een component wordt overschreven, contrastwaarden op de daadwerkelijk toegepaste kleuren — kunnen hier ontbreken.
- **Geen handmatige screenreadertest.** Alle uitspraken over wat een gebruiker "hoort", zijn afgeleid uit de code, niet waargenomen.
- **De interne semantiek van de Stamp-componenten is niet geverifieerd.** Wat `Button`, `TextInput`, `ComboboxInput`, `Card` en `Link` daadwerkelijk in de DOM zetten — welke rollen, welke ARIA, hoe `ComboboxInput` zijn `aria-expanded`/`aria-activedescendant` regelt, of `FormField` zijn `id` dupliceert — is niet gecontroleerd. Ik ben uitgegaan van wat de documentatie in `components.md`, `tokens.md` en `icon-discovery.md` belooft. Voor de combobox in `DestinationCard` is dat een reële onzekerheid: comboboxen zijn een van de lastigste patronen om goed te krijgen.
- **Twee bevindingen zijn expliciet als "te verifiëren" gemarkeerd:** M8 (reflow bij zoom) en M14 (knopgrootte).
- **De contrastwaarden** zijn berekend volgens de WCAG-formule op de hex-waarden uit `tokens.md`, niet gemeten op het scherm. Waarden voor `--stamp-color-border-selected` en `--stamp-color-border-focus-outline` staan niet in die documentatie en zijn dus niet getoetst — die moeten alsnog gecontroleerd worden, want het zijn precies de kleuren die de geselecteerde en de gefocuste staat zichtbaar maken.

**Aanbevolen vervolgstap:** installeer `@design-system/*`, draai de app, en doe een runtime-controle met axe DevTools plus een handmatige doorloop van de volledige flow met NVDA op Windows en VoiceOver op iOS. Betrek daarbij ervaringsdeskundigen — een handmatige controle door een ziende ontwikkelaar vindt structurele fouten, maar niet de momenten waarop een gebruiker in de praktijk de draad kwijtraakt.
