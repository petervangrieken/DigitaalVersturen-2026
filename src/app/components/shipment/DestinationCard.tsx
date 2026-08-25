import { useState } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
  FormField,
  ComboboxInput,
  ComboboxOption,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface DestinationCardProps {
  headline: string;
}

type QuickCountry = { code: string; name: string };

const QUICK_COUNTRIES: QuickCountry[] = [
  { code: "NL", name: "Nederland" },
  { code: "BE", name: "België" },
  { code: "DE", name: "Duitsland" },
];

const OTHER_COUNTRIES: { code: string; name: string }[] = [
  { code: "AF", name: "Afghanistan" },
  { code: "AL", name: "Albanië" },
  { code: "DZ", name: "Algerije" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AR", name: "Argentinië" },
  { code: "AM", name: "Armenië" },
  { code: "AU", name: "Australië" },
  { code: "AT", name: "Oostenrijk" },
  { code: "AZ", name: "Azerbeidzjan" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnië en Herzegovina" },
  { code: "BR", name: "Brazilië" },
  { code: "BG", name: "Bulgarije" },
  { code: "KH", name: "Cambodja" },
  { code: "CA", name: "Canada" },
  { code: "CL", name: "Chili" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "HR", name: "Kroatië" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Tsjechië" },
  { code: "DK", name: "Denemarken" },
  { code: "EG", name: "Egypte" },
  { code: "EE", name: "Estland" },
  { code: "ET", name: "Ethiopië" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "Frankrijk" },
  { code: "GE", name: "Georgië" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Griekenland" },
  { code: "HU", name: "Hongarije" },
  { code: "IS", name: "IJsland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesië" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Irak" },
  { code: "IE", name: "Ierland" },
  { code: "IL", name: "Israël" },
  { code: "IT", name: "Italië" },
  { code: "JP", name: "Japan" },
  { code: "JO", name: "Jordanië" },
  { code: "KZ", name: "Kazachstan" },
  { code: "KE", name: "Kenia" },
  { code: "KR", name: "Zuid-Korea" },
  { code: "KW", name: "Koeweit" },
  { code: "LV", name: "Letland" },
  { code: "LB", name: "Libanon" },
  { code: "LY", name: "Libië" },
  { code: "LT", name: "Litouwen" },
  { code: "LU", name: "Luxemburg" },
  { code: "MY", name: "Maleisië" },
  { code: "MT", name: "Malta" },
  { code: "MX", name: "Mexico" },
  { code: "MA", name: "Marokko" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NP", name: "Nepal" },
  { code: "NZ", name: "Nieuw-Zeeland" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Noorwegen" },
  { code: "PK", name: "Pakistan" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Filipijnen" },
  { code: "PL", name: "Polen" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "RO", name: "Roemenië" },
  { code: "RU", name: "Rusland" },
  { code: "SA", name: "Saoedi-Arabië" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Servië" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slowakije" },
  { code: "SI", name: "Slovenië" },
  { code: "ZA", name: "Zuid-Afrika" },
  { code: "ES", name: "Spanje" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Soedan" },
  { code: "SE", name: "Zweden" },
  { code: "CH", name: "Zwitserland" },
  { code: "SY", name: "Syrië" },
  { code: "TW", name: "Taiwan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TN", name: "Tunesië" },
  { code: "TR", name: "Turkije" },
  { code: "UA", name: "Oekraïne" },
  { code: "AE", name: "Verenigde Arabische Emiraten" },
  { code: "GB", name: "Verenigd Koninkrijk" },
  { code: "UZ", name: "Oezbekistan" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Vietnam" },
  { code: "YE", name: "Jemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];

function Flag({ code }: { code: string }) {
  return (
    <div
      style={{
        width: 24,
        height: 17,
        flexShrink: 0,
        borderRadius: 2,
        overflow: "hidden",
        border: "0.5px solid rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4/Assets/SVG/${code.toUpperCase()}.svg`}
        alt={code}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export function DestinationCard({
  headline,
}: DestinationCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string>("NL");
  const [otherCountry, setOtherCountry] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSelectQuick = (code: string) => {
    setSelected(code);
    setOtherCountry("");
    setInputValue("");
  };

  const handleSelectedItemChange = (changes: {
    selectedItem?: { value: string; title: string } | null;
  }) => {
    const name = changes.selectedItem?.value ?? "";
    setOtherCountry(name);
    if (name) setSelected("other");
  };

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const dest =
      selected === "other"
        ? otherCountry
        : (QUICK_COUNTRIES.find((c) => c.code === selected)
            ?.name ?? selected);
    send(`Bestemming: ${dest}`);
  };

  return (
    <Card
      theme="default"
      style={{
        padding: "var(--stamp-spacing-inner-xl)",
        ...(submitted && {
          backgroundColor: "var(--stamp-color-background-surface)",
          borderColor: "var(--stamp-color-border-default)",
        }),
      }}
    >
      <Flex direction="column" gap="l">
        <Heading level={2} size="l" color="brand">
          {headline}
        </Heading>

        <Flex gap="l">
          {QUICK_COUNTRIES.map((country) => {
            const isSelected = selected === country.code;
            return (
              <button
                key={country.code}
                type="button"
                onClick={() => handleSelectQuick(country.code)}
                disabled={submitted}
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                  position: "relative",
                  background: submitted
                    ? "var(--stamp-color-background-disabled)"
                    : "var(--stamp-color-background-surface)",
                  borderRadius: "var(--stamp-radius-m)",
                  padding: "var(--stamp-spacing-inner-xl)",
                  cursor: submitted ? "not-allowed" : "pointer",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "row",
                  gap: "var(--stamp-spacing-inner-m)",
                  alignItems: "center",
                  border: "1px solid transparent",
                  outline: "none",
                  opacity: submitted && !isSelected ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!submitted)
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "var(--stamp-color-border-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "transparent";
                }}
                onFocus={(e) => {
                  const ring = e.currentTarget.querySelector(
                    "[data-focus-ring]",
                  ) as HTMLElement | null;
                  if (ring) ring.style.display = "block";
                }}
                onBlur={(e) => {
                  const ring = e.currentTarget.querySelector(
                    "[data-focus-ring]",
                  ) as HTMLElement | null;
                  if (ring) ring.style.display = "none";
                }}
              >
                <Flag code={country.code} />
                <Text size="m">{country.name}</Text>

                {isSelected && (
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: -4,
                      borderRadius: "calc(var(--stamp-radius-m) + 4px)",
                      border:
                        "2px solid var(--stamp-color-border-selected)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                <div
                  aria-hidden
                  data-focus-ring=""
                  style={{
                    display: "none",
                    position: "absolute",
                    inset: -7,
                    borderRadius: "calc(var(--stamp-radius-m) + 7px)",
                    border:
                      "2px solid var(--stamp-color-border-focus-outline)",
                    pointerEvents: "none",
                  }}
                />
              </button>
            );
          })}
        </Flex>

        <FormField id="ander-land" style={{ width: "100%" }}>
          <ComboboxInput
            value={inputValue}
            initialValue=""
            placeholder="Zoek een land..."
            onSelectedItemChange={handleSelectedItemChange}
            onInputValueChange={(changes: {
              inputValue: string;
            }) => setInputValue(changes.inputValue)}
            onHighlightedIndexChange={() => {}}
            clearButtonLabel="Wis selectie"
            toggleButtonLabel="Open lijst"
            size="full"
            disabled={submitted}
          >
            {OTHER_COUNTRIES.filter((c) =>
              !inputValue ||
              c.name
                .toLowerCase()
                .includes(inputValue.toLowerCase()),
            ).map((c) => (
              <ComboboxOption
                key={c.code}
                value={c.name}
                title={c.name}
                icon={
                  <img
                    src={`https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.4/Assets/SVG/${c.code}.svg`}
                    alt={c.code}
                    style={{
                      width: 20,
                      height: 15,
                      display: "block",
                      borderRadius: 2,
                      border: "0.5px solid rgba(0,0,0,0.15)",
                      objectFit: "contain",
                      alignSelf: "center",
                      flexShrink: 0,
                    }}
                  />
                }
              />
            ))}
          </ComboboxInput>
        </FormField>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Bevestigen
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}