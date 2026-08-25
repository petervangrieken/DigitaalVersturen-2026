import { useState, useEffect } from "react";
import {
  Card,
  Flex,
  Heading,
  FormField,
  FormFieldLabel,
  TextInput,
  SelectInput,
  Button,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface AddressCardProps {
  headline: string;
  initialNaam?: string;
  initialPostcode?: string;
  initialHuisnummer?: string;
  initialToevoeging?: string;
  initialEmail?: string;
  initialTelefoon?: string;
}

export function AddressCard({
  headline,
  initialNaam = "",
  initialPostcode = "",
  initialHuisnummer = "",
  initialToevoeging = "",
  initialEmail = "",
  initialTelefoon = "",
}: AddressCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [naam, setNaam] = useState(initialNaam);
  const [postcode, setPostcode] = useState(initialPostcode);
  const [huisnummer, setHuisnummer] = useState(
    initialHuisnummer,
  );
  const [toevoeging, setToevoeging] = useState(
    initialToevoeging,
  );
  const [email, setEmail] = useState(initialEmail);
  const [telefoon, setTelefoon] = useState(initialTelefoon);

  // Sync state when props arrive after streaming mount
  useEffect(() => {
    if (initialNaam) setNaam(initialNaam);
  }, [initialNaam]);
  useEffect(() => {
    if (initialPostcode) setPostcode(initialPostcode);
  }, [initialPostcode]);
  useEffect(() => {
    if (initialHuisnummer) setHuisnummer(initialHuisnummer);
  }, [initialHuisnummer]);
  useEffect(() => {
    if (initialToevoeging) setToevoeging(initialToevoeging);
  }, [initialToevoeging]);
  useEffect(() => {
    if (initialEmail) setEmail(initialEmail);
  }, [initialEmail]);
  useEffect(() => {
    if (initialTelefoon) setTelefoon(initialTelefoon);
  }, [initialTelefoon]);

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const tv = toevoeging ? ` ${toevoeging}` : "";
    const emailPart = email || "niet opgegeven";
    const telPart = telefoon || "niet opgegeven";
    send(
      `Ontvanger: ${naam}, ${postcode} ${huisnummer}${tv}, e-mail: ${emailPart}, tel: ${telPart}`,
    );
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

        <FormField id="naam">
          <FormFieldLabel htmlFor="naam">
            Voor- en achternaam
          </FormFieldLabel>
          <TextInput
            id="naam"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Bijv. Pieter Post"
            size="full"
            disabled={submitted}
          />
        </FormField>

        <Flex gap="l">
          <FormField
            id="postcode"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="postcode">
              Postcode
            </FormFieldLabel>
            <TextInput
              id="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Bijv. 1111AA"
              size="full"
              disabled={submitted}
            />
          </FormField>

          <FormField
            id="huisnummer"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="huisnummer">
              Huisnummer/postbus
            </FormFieldLabel>
            <TextInput
              id="huisnummer"
              value={huisnummer}
              onChange={(e) => setHuisnummer(e.target.value)}
              placeholder="Bijv. 1"
              size="full"
              disabled={submitted}
            />
          </FormField>

          <FormField
            id="toevoeging"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="toevoeging">
              Toevoeging
            </FormFieldLabel>
            <SelectInput
              id="toevoeging"
              value={toevoeging}
              onChange={(e) =>
                setToevoeging(
                  (e.target as HTMLSelectElement).value,
                )
              }
              placeholder="Kies"
              size="full"
              disabled={submitted}
            >
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </SelectInput>
          </FormField>
        </Flex>

        <Flex gap="l">
          <FormField
            id="email"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel
              htmlFor="email"
              suffix="(niet verplicht)"
            >
              Emailadres
            </FormFieldLabel>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Bijv. naam@voorbeeld.nl"
              size="full"
              disabled={submitted}
            />
          </FormField>

          <FormField
            id="telefoon"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel
              htmlFor="telefoon"
              suffix="(niet verplicht)"
            >
              Telefoonnummer
            </FormFieldLabel>
            <TextInput
              id="telefoon"
              type="tel"
              value={telefoon}
              onChange={(e) => setTelefoon(e.target.value)}
              placeholder="Bijv. 06 12 34 56 78"
              size="full"
              disabled={submitted}
            />
          </FormField>
        </Flex>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Adres bevestigen
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}