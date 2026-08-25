import { useState, useEffect } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
  FormField,
  FormFieldLabel,
  TextInput,
  SelectInput,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface CustomsFormCardProps {
  headline: string;
  /** e.g. "Beschrijf je smartwatch" — product name fills the title */
  productName?: string;
  initialQuantity?: string;
  initialWeight?: string;
  initialWeightUnit?: "Gram" | "Kilogram" | "Ons";
  initialValue?: string;
  initialCurrency?: "Euro" | "Dollar" | "Pond";
  initialCountryOfOrigin?: string;
}

const WEIGHT_UNITS = ["Gram", "Kilogram", "Ons"];
const CURRENCY_UNITS = ["Euro", "Dollar", "Pond"];

const COUNTRIES_OF_ORIGIN = [
  "China",
  "Duitsland",
  "Frankrijk",
  "Honkong",
  "India",
  "Italië",
  "Japan",
  "Nederland",
  "Polen",
  "Spanje",
  "Turkije",
  "Verenigd Koninkrijk",
  "Verenigde Staten",
  "Vietnam",
  "Zuid-Korea",
];

function SuffixInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  suffix,
  suffixOptions,
  suffixValue,
  onSuffixChange,
  disabled,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  suffix: string;
  suffixOptions?: string[];
  suffixValue?: string;
  onSuffixChange?: (v: string) => void;
  disabled?: boolean;
}) {
  return (
    <FormField id={id} style={{ flex: "1 1 0", minWidth: 0 }}>
      <FormFieldLabel htmlFor={id}>{label}</FormFieldLabel>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          background: "var(--stamp-color-background-surface)",
          border:
            "var(--stamp-border-width-s) solid var(--stamp-color-border-default)",
          borderRadius: "var(--stamp-radius-s)",
          overflow: "hidden",
        }}
      >
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            padding:
              "var(--stamp-spacing-inner-s) var(--stamp-spacing-inner-m)",
            fontSize:
              "var(--stamp-text-body-m-default-font-size)",
            fontFamily: "inherit",
            background: "transparent",
            color: "var(--stamp-color-text-default)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderLeft:
              "var(--stamp-border-width-s) solid var(--stamp-color-border-default)",
            padding: "0 var(--stamp-spacing-inner-s)",
          }}
        >
          {suffixOptions && onSuffixChange ? (
            <select
              value={suffixValue}
              onChange={(e) => onSuffixChange(e.target.value)}
              disabled={disabled}
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize:
                  "var(--stamp-text-body-m-default-font-size)",
                fontFamily: "inherit",
                color: "var(--stamp-color-text-default)",
                cursor: "pointer",
                paddingRight: "var(--stamp-spacing-inner-xs)",
              }}
            >
              {suffixOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <Text size="m" variant="subtle">
              {suffix}
            </Text>
          )}
        </div>
      </div>
    </FormField>
  );
}

export function CustomsFormCard({
  headline,
  productName,
  initialQuantity = "",
  initialWeight = "",
  initialWeightUnit = "Gram",
  initialValue = "",
  initialCurrency = "Euro",
  initialCountryOfOrigin = "",
}: CustomsFormCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);

  const [aantal, setAantal] = useState(initialQuantity);
  const [gewicht, setGewicht] = useState(initialWeight);
  const [gewichtUnit, setGewichtUnit] = useState(
    initialWeightUnit,
  );
  const [waarde, setWaarde] = useState(initialValue);
  const [valuta, setValuta] = useState(initialCurrency);
  const [land, setLand] = useState(initialCountryOfOrigin);

  // Sync state when props arrive after streaming mount
  useEffect(() => {
    if (initialQuantity) setAantal(initialQuantity);
  }, [initialQuantity]);
  useEffect(() => {
    if (initialWeight) setGewicht(initialWeight);
  }, [initialWeight]);
  useEffect(() => {
    if (initialWeightUnit) setGewichtUnit(initialWeightUnit);
  }, [initialWeightUnit]);
  useEffect(() => {
    if (initialValue) setWaarde(initialValue);
  }, [initialValue]);
  useEffect(() => {
    if (initialCurrency) setValuta(initialCurrency);
  }, [initialCurrency]);
  useEffect(() => {
    if (initialCountryOfOrigin) setLand(initialCountryOfOrigin);
  }, [initialCountryOfOrigin]);

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const parts = [
      aantal && `Aantal: ${aantal} stuks`,
      gewicht && `Gewicht: ${gewicht} ${gewichtUnit}`,
      waarde && `Waarde: ${waarde} ${valuta}`,
      land && `Land van herkomst: ${land}`,
    ].filter(Boolean);
    send(parts.join(", ") || "Douanegegevens ingevuld");
  };

  const title = productName
    ? `Beschrijf je ${productName}`
    : headline;

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
          {title}
        </Heading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "var(--stamp-spacing-inner-l)",
          }}
        >
          <SuffixInput
            id="aantal"
            label="Aantal"
            placeholder="Bijv: 1"
            value={aantal}
            onChange={setAantal}
            suffix="Stuks"
            disabled={submitted}
          />
          <SuffixInput
            id="gewicht"
            label="Totale gewicht"
            placeholder="Bijv: 30"
            value={gewicht}
            onChange={setGewicht}
            suffix="Gram"
            suffixOptions={WEIGHT_UNITS}
            suffixValue={gewichtUnit}
            onSuffixChange={setGewichtUnit}
            disabled={submitted}
          />
          <SuffixInput
            id="waarde"
            label="Totale waarde"
            placeholder="Bijv: 50"
            value={waarde}
            onChange={setWaarde}
            suffix="Euro"
            suffixOptions={CURRENCY_UNITS}
            suffixValue={valuta}
            onSuffixChange={setValuta}
            disabled={submitted}
          />
        </div>

        <FormField id="land-herkomst">
          <FormFieldLabel htmlFor="land-herkomst">
            Land van herkomst
          </FormFieldLabel>
          <SelectInput
            id="land-herkomst"
            value={land}
            onChange={(e) =>
              setLand((e.target as HTMLSelectElement).value)
            }
            placeholder="Selecteer land van herkomst"
            size="full"
            disabled={submitted}
          >
            {COUNTRIES_OF_ORIGIN.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </SelectInput>
        </FormField>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Gegevens bevestigen
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}