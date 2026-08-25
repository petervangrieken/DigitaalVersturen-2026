import { z } from "zod";
import { WelcomeCard } from "../components/shipment/WelcomeCard";
import { AddressCard } from "../components/shipment/AddressCard";
import { SenderCard } from "../components/shipment/SenderCard";
import { DeliveryTimeCard } from "../components/shipment/DeliveryTimeCard";
import { DeliveryLocationCard } from "../components/shipment/DeliveryLocationCard";
import { ProductOfferCard } from "../components/shipment/ProductOfferCard";
import { DestinationCard } from "../components/shipment/DestinationCard";
import { ExportReasonCard } from "../components/shipment/ExportReasonCard";
import { HsCodeCard } from "../components/shipment/HsCodeCard";
import { CustomsFormCard } from "../components/shipment/CustomsFormCard";
import { InsuranceCard } from "../components/shipment/InsuranceCard";
import { OrderSummaryCard } from "../components/shipment/OrderSummaryCard";

export const tamboComponents = [
  {
    name: "AddressCard",
    description:
      "Form card for collecting recipient address details. BEFORE rendering: scan the FULL conversation history for any name, postcode, or house number the user mentioned (e.g. 'naar Nancy', 'mijn broer Pieter Pakket', '1234 AB huisnummer 5'). Pass ALL found values as initial* props so the form is pre-filled.",
    component: AddressCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe(
          'Question heading displayed above the form, e.g. "Wie is de ontvanger?"',
        ),
      initialNaam: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Recipient full name — scan the ENTIRE conversation for any person's name mentioned as recipient. Patterns: 'naar [Name]', 'voor [Name]', 'mijn [relatie] [Name]', 'stuur naar [Name]', 'ontvanger is [Name]'. Examples: 'naar mijn zus Nancy van As' → 'Nancy van As'; 'mijn broer Pieter Pakket' → 'Pieter Pakket'; 'de ontvanger is Jan Smit' → 'Jan Smit'. ALWAYS pass when any name is found. Only omit if NO name appears anywhere in the conversation. Do NOT pass null.",
        ),
      initialPostcode: z
        .string()
        .optional()
        .catch("")
        .describe(
          "NL postcode — scan conversation for any 4-digit + 2-letter pattern (e.g. '1234 AB', '2500XY'). Normalise to '1234 AB' format. Only omit if no postcode was mentioned. Do NOT pass null.",
        ),
      initialHuisnummer: z
        .string()
        .optional()
        .catch("")
        .describe(
          "House number (digits only, no suffix) — scan conversation for any number mentioned alongside a postcode or address. Only omit if not mentioned. Do NOT pass null.",
        ),
      initialToevoeging: z
        .string()
        .optional()
        .catch("")
        .describe(
          "House number suffix (e.g. 'a', 'b', 'hoog') — only pass if explicitly mentioned alongside a house number. Do NOT pass null.",
        ),
      initialEmail: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Email address — pass if mentioned anywhere in the conversation. Do NOT pass null.",
        ),
      initialTelefoon: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Phone number — pass if mentioned anywhere in the conversation. Do NOT pass null.",
        ),
    }),
  },
  {
    name: "SenderCard",
    description:
      "Form card for collecting sender address details. BEFORE rendering: scan the FULL conversation for the sender's own name, postcode, or house number (e.g. 'ik ben [Name]', 'mijn postcode is', 'ik woon op'). Pass ALL found values as initial* props.",
    component: SenderCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe(
          'Question heading displayed above the form, e.g. "Wie is de afzender?"',
        ),
      initialNaam: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Sender's own name — scan conversation for: 'ik ben [Name]', 'mijn naam is [Name]', 'van [Name]', or any name the user used to introduce themselves. ALWAYS pass when found. Do NOT pass null.",
        ),
      initialPostcode: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Sender's NL postcode — scan conversation for any postcode the user mentioned as their own address. Normalise to '1234 AB' format. Do NOT pass null.",
        ),
      initialHuisnummer: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Sender's house number — digits only, no suffix. Scan conversation for numbers mentioned as the sender's own address. Do NOT pass null.",
        ),
      initialToevoeging: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Sender's house number suffix — only pass if explicitly mentioned. Do NOT pass null.",
        ),
      initialEmail: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Sender's email — pass if mentioned anywhere in the conversation. Do NOT pass null.",
        ),
    }),
  },
  {
    name: "DeliveryTimeCard",
    description:
      "Selection card for choosing delivery speed: fast, standard, or eco/flexible. Works for both domestic NL and international shipments. For domestic NL: fast = 24h (+€5), standard = 2 days (free), eco = 5 days (-€2) — omit the optional override props. For international: pass fastDescription/fastPrice/standardDescription/standardPrice/ecoDescription/ecoPrice from the International Speed Tiers table in the shipping advisor skill. Render after DestinationCard and BEFORE InsuranceCard and ProductOfferCard.\n\nSKIP this card entirely for letterbox products (brievenbuspakje+, buspakje, domestic klein pakket) — they have no delivery speed choice. Only render for standard parcel products.\n\nAlso skip if the user already stated a delivery preference (e.g. 'no rush', 'ASAP', 'maakt niet uit', 'geen haast', 'zo snel mogelijk') — state the assumption in one sentence instead.\n\nNever ask the delivery speed question as plain text instead of this component.",
    component: DeliveryTimeCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Bezorgtijd"'),
      preSelectedOption: z
        .enum(["fast", "standard", "eco"])
        .optional()
        .catch(undefined)
        .describe(
          "Pre-select a delivery option based on conversation context. Use 'fast' if urgency was implied, 'eco' if user expressed flexibility or indifference, 'standard' otherwise. The user can still change the selection before confirming.",
        ),
      fastDescription: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Fast option delivery time label for international, e.g. 'Levertijd 1–2 werkdagen'. Omit for domestic NL.",
        ),
      fastPrice: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Fast option price for international, e.g. '+ € 8,00'. Omit for domestic NL.",
        ),
      standardDescription: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Standard option delivery time label for international, e.g. 'Levertijd 3–5 werkdagen'. Omit for domestic NL.",
        ),
      standardPrice: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Standard option price for international. Use 'Gratis' when there is no surcharge; otherwise a value like '+ € 8,00' or '- € 2,00'. Omit for domestic NL.",
        ),
      ecoDescription: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Eco option delivery time label for international, e.g. 'Levertijd 6–9 werkdagen'. Omit for domestic NL.",
        ),
      ecoPrice: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "Eco option price for international, e.g. '- € 2,00'. Omit for domestic NL.",
        ),
    }),
  },
  {
    name: "DeliveryLocationCard",
    description:
      "Selection card for choosing delivery location: PostNL pickup point, home address, or parcel locker. Render when the user needs to pick where the package should be delivered.",
    component: DeliveryLocationCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Bezorglocatie"'),
    }),
  },
  {
    name: "ProductOfferCard",
    description:
      "Product offer summary card showing package type, specs, feature list with prices, and a total. Render when the AI presents a shipping product offer for the user to confirm or modify.",
    component: ProductOfferCard,
    propsSchema: z.object({
      headline: z
        .string()
        .default("")
        .describe('Product name, e.g. "Klein pakket"'),
      illustration: z
        .enum([
          "PackagePostbox",
          "PackageSmall",
          "PackageMedium",
          "PackageLarge",
        ])
        .catch("PackageSmall")
        .describe(
          'Package illustration variant. Use "PackagePostbox" for brievenbuspakje, "PackageSmall" for klein pakket, "PackageMedium" for medium pakket, "PackageLarge" for groot pakket. Default: "PackageSmall".',
        ),
      headerPrice: z
        .string()
        .default("")
        .describe('Base product price, e.g. "€ 5,85"'),
      weight: z
        .string()
        .default("")
        .describe('Weight spec, e.g. "Max. 3 kilo"'),
      dimensions: z
        .string()
        .default("")
        .describe(
          'Dimensions spec, e.g. "max. 34 x 28 x 15 cm"',
        ),
      items: z
        .array(
          z.object({
            label: z
              .string()
              .default("")
              .describe(
                'PostNL service feature label. For delivery time rows, include the time in the label itself, e.g. "Levertijd 2–3 werkdagen". For other services: "Met track & trace", "Aangetekend", "Snelle bezorging". Never use the physical contents of the package (e.g. "schoenen", "laptop") as a label.',
              ),
            price: z
              .string()
              .default("")
              .describe(
                'Price or status for this feature: a surcharge (e.g. "+ € 5,00"), or "Gratis" if there is no surcharge. Never use a time string like "2–4 werkdagen" here — put time in the label instead. If a feature has no surcharge, use "Gratis". Never use "standaard" — insurance and home delivery are never included by default.',
              ),
          }),
        )
        .default([])
        .describe(
          "PostNL service features only (track & trace, delivery time for international, explicitly chosen add-ons). Never list: the physical contents of the package, insurance as 'standaard' (insurance is always a paid add-on), or delivery method ('Bezorging aan de deur' — that is chosen later via DeliveryLocationCard).",
        ),
      totalPrice: z
        .string()
        .default("")
        .describe(
          'Total price including all items, e.g. "€ 10,85"',
        ),
    }),
  },
  {
    name: "DestinationCard",
    description:
      "Country selection card for choosing the shipment destination. Shows quick-select tiles for Nederland, België and Duitsland plus a dropdown for any other country. Only render this when the destination is genuinely unknown — if the user already mentioned a country, city, or place, skip this card entirely and use that destination directly.",
    component: DestinationCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Wat is de bestemming?"'),
    }),
  },
  {
    name: "ExportReasonCard",
    description:
      "The export-reason step of the customs phase — the FIRST customs card, rendered BEFORE any HsCodeCard, whenever the conversation says WHAT is being shipped but never WHY (no gift/sale/sample/return signal anywhere). Wait for the user's choice before any HS-code work. Skip this card in exactly two cases: (1) a clear purpose signal exists (cadeau/verjaardag → gift; klant/verkocht → sale; monster/tester → sample; retour/terugsturen → return) — then state the assumed reason in one short sentence instead of rendering it; (2) the item is documents (contract, akte, paspoort) — then the reason is 'Documenten' automatically and the shipment needs no customs cards at all.",
    component: ExportReasonCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe(
          'Card heading, e.g. "Wat voor type zending heb je?"',
        ),
      preSelectedReason: z
        .enum([
          "geschenk",
          "handelsgoederen",
          "monsters",
          "retour",
        ])
        .optional()
        .catch(undefined)
        .describe(
          "Pre-select a reason when you have a weak hunch the user should confirm (e.g. 'mijn oude laptop naar mijn broer' hints at 'geschenk' but could be a sale). Use 'geschenk' for gifts, 'retour' for returns, 'handelsgoederen' for sales, 'monsters' for samples. Omit when there is no hint at all. The user can still change the selection.",
        ),
      excludeDocuments: z
        .boolean()
        .default(true)
        .catch(true)
        .describe(
          "Hide the 'Documenten' option. Always pass true — this card only renders for physical goods (electronics, clothing, etc.); document shipments never render it because their reason is set automatically.",
        ),
    }),
  },
  {
    name: "HsCodeCard",
    description:
      "Shows 3 HS-code suggestions for an item. Render it per item, but ONLY after the export reason is established — either inferred from a clear purpose signal (gift/sale/sample/return) or chosen by the user via ExportReasonCard. If the reason is still unknown when the customs phase begins, render ExportReasonCard first and wait; never open the customs phase with this card. Never render it for document shipments (documents need no HS code). After this card, render CustomsFormCard for the item details. Pick the 3 closest codes from the HS reference table in the customs skill, ranked by relevance. Pre-select the best match.",
    component: HsCodeCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe(
          'Card heading, e.g. "Wat is de HS-code van je smartwatch?"',
        ),
      suggestions: z
        .array(
          z.object({
            code: z
              .string()
              .describe("HS tariff code, e.g. '9102.12'"),
            description: z
              .string()
              .describe(
                "Short description for this code, e.g. 'Smartwatch, fitness tracker'",
              ),
          }),
        )
        .min(3)
        .max(3)
        .catch([])
        .describe(
          "Exactly 3 HS-code suggestions, ranked closest to farthest match",
        ),
      preSelectedCode: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          "The best-matching HS code to pre-select. Must exactly match one of the codes in suggestions.",
        ),
    }),
  },
  {
    name: "CustomsFormCard",
    description:
      "Customs item-details form card. Collects quantity (aantal), total weight, total value and country of origin for one item. Render it per item AFTER that item's HsCodeCard — by then the export reason is already settled (inferred or chosen via ExportReasonCard); the reason is NOT a field on this form. Never render it for document shipments. BEFORE rendering: scan the FULL conversation for the item name, quantity, weight, value and origin. Pass ALL found values as initial* props.",
    component: CustomsFormCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Beschrijf je zending"'),
      productName: z
        .string()
        .optional()
        .catch("")
        .describe(
          "ALWAYS pass the item name from the conversation — this fills the heading 'Beschrijf je [productName]'. Examples: 'macbook' → 'MacBook'; 'sneakers' → 'sneakers'; 'spijkerbroek' → 'spijkerbroek'; 'horloge' → 'horloge'. Never omit this.",
        ),
      initialQuantity: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Item quantity as a digit string — scan conversation for any number or quantity word. Examples: 'één macbook' → '1'; '2 sneakers' → '2'; 'een paar sokken' → '2'; '3 boeken' → '3'. ALWAYS pass when any quantity is mentioned. Do NOT pass null.",
        ),
      initialWeight: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Item weight as a numeric string (no unit) — pass if mentioned or if you estimated it in Phase 1. Example: '2.5' for 2.5 kg. Do NOT pass null.",
        ),
      initialWeightUnit: z
        .enum(["Gram", "Kilogram", "Ons"])
        .optional()
        .catch(undefined)
        .describe(
          "Unit matching initialWeight. Use 'Kilogram' for items above 100g, 'Gram' for small/light items. Do NOT pass null.",
        ),
      initialValue: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Item value as numeric string only (no currency symbol) — pass if the user mentioned a price. Example: user says '€ 1200' → '1200'. Do NOT pass null.",
        ),
      initialCurrency: z
        .enum(["Euro", "Dollar", "Pond"])
        .optional()
        .catch(undefined)
        .describe(
          "Currency matching initialValue. Default to 'Euro' for NL users. Do NOT pass null.",
        ),
      initialCountryOfOrigin: z
        .string()
        .optional()
        .catch("")
        .describe(
          "Country of origin if known or inferable. Must exactly match one of: China, Duitsland, Frankrijk, Honkong, India, Italië, Japan, Nederland, Polen, Spanje, Turkije, Verenigd Koninkrijk, Verenigde Staten, Vietnam, Zuid-Korea. Do NOT pass null.",
        ),
    }),
  },
  {
    name: "InsuranceCard",
    description:
      "Insurance selection card. Shows selectable coverage tiers plus a 'Nee, dankje' (uninsured) option. Render after DeliveryTimeCard and BEFORE ProductOfferCard, but ONLY when insurance is relevant — see rules below.\n\nDo NOT render for: brievenbuspakje+, domestic klein pakket, or international buspakje (insurance not available for letterbox products).\nDo NOT render for low-value items like books, greeting cards, clothing under ~€50, or everyday household objects — insurance adds no value there.\nDO render for: laptops, phones, tablets, cameras, jewellery, expensive clothing, gift sets >€50, wine, musical instruments, or any item that is clearly valuable or fragile.\n\nSurcharges are flat — identical for domestic and international, every zone, every weight:\nStandard parcel (domestic + EUR1/EUR2/ROW) → 3 tiers: {limit: '€ 100,-', price: '+ € 2,50'}, {limit: '€ 500,-', price: '+ € 5,00'}, {limit: '€ 5.500,-', price: '+ € 15,00'}\nInternational klein pakket (met T&T) → 1 tier: {limit: '€ 50,-', price: '+ € 1,00'}\n\nThe user's choice is reflected in the ProductOfferCard total.",
    component: InsuranceCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Verzekerd versturen?"'),
      tiers: z
        .array(
          z.object({
            limit: z
              .string()
              .describe(
                'Coverage limit, e.g. "€ 50,-", "€ 100,-", "€ 500,-", "€ 5.500,-"',
              ),
            price: z
              .string()
              .describe(
                'Insurance surcharge, e.g. "+ € 2,50"',
              ),
          }),
        )
        .min(1)
        .max(3)
        .catch([])
        .describe(
          "Coverage tiers. Pass all 3 tiers for standard parcels (domestic and international, cheapest to most expensive). Pass only the single € 50,- tier for international klein pakket. See component description for exact prices.",
        ),
    }),
  },
  {
    name: "OrderSummaryCard",
    description:
      "FINAL step of the whole flow (Step 7 — Summary + Payment). Render this ONLY after the product offer has been confirmed AND both recipient and sender details have been collected. It shows the complete order grouped into labelled sections plus a total, and captures the payment method (iDEAL / creditcard) itself — so do NOT ask the payment question as plain text after rendering it.\n\nBEFORE rendering, scan the FULL conversation and build the `sections` array from everything already established. Use these groups, in this order:\n1. 'Je bestelling' — product (with key trait, e.g. 'Pakket — met Track & Trace') + its price, 'Bestemming' (country), 'Levering' (delivery speed).\n2. 'Ontvanger' — Naam, Adres (full address / PostNL Punt / Pakketautomaat), and E-mail, Tel, Berichtje ONLY if provided.\n3. 'Afzender' — Naam, Adres (postcode + huisnummer, NL), E-mail.\n4. 'Douane-informatie' — INCLUDE THIS SECTION ONLY for non-EU shipments (a customs form was completed). Per item add rows for HS-code, Reden van export, Aantal, Gewicht, Waarde, Land van herkomst. OMIT this entire section for EU/domestic shipments.\n\nOmit any row whose value is unknown — never write 'niet opgegeven' or leave a blank value (empty rows are dropped automatically). Match the conversation language for all titles, labels and the headline (translate the Dutch examples to EN/DE/FR when the conversation is in that language).",
    component: OrderSummaryCard,
    propsSchema: z.object({
      headline: z
        .string()
        .describe('Card heading, e.g. "Verzendoverzicht"'),
      sections: z
        .array(
          z.object({
            title: z
              .string()
              .describe(
                "Section heading, e.g. 'Je bestelling', 'Ontvanger', 'Afzender', 'Douane-informatie'.",
              ),
            rows: z
              .array(
                z.object({
                  label: z
                    .string()
                    .describe(
                      "Field label, e.g. 'Naam', 'Adres', 'Bestemming', 'HS-code'.",
                    ),
                  value: z
                    .string()
                    .describe(
                      "Field value. Leave empty to drop the row entirely.",
                    ),
                }),
              )
              .default([])
              .describe(
                "Label/value rows for this section. Empty-value rows are dropped.",
              ),
          }),
        )
        .default([])
        .describe(
          "Ordered sections: 'Je bestelling', 'Ontvanger', 'Afzender', and — only for non-EU shipments — 'Douane-informatie'.",
        ),
      totalPrice: z
        .string()
        .default("")
        .describe(
          'Total price including all items and VAT, e.g. "€ 10,85".',
        ),
      paymentHeadline: z
        .string()
        .optional()
        .catch(undefined)
        .describe(
          'Payment question heading, e.g. "Hoe wil je betalen?". Optional — defaults to a Dutch label.',
        ),
    }),
  },
];