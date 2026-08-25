import { useState, useEffect } from "react";
import {
  Card,
  Flex,
  Heading,
  FormField,
  FormFieldLabel,
  FormFieldHelperText,
  TextInput,
  SelectInput,
  Button,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface SenderCardProps {
  headline: string;
  initialNaam?: string;
  initialPostcode?: string;
  initialHuisnummer?: string;
  initialToevoeging?: string;
  initialEmail?: string;
}

export function SenderCard({
  headline,
  initialNaam = "",
  initialPostcode = "",
  initialHuisnummer = "",
  initialToevoeging = "",
  initialEmail = "",
}: SenderCardProps) {
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

  const handleSubmit = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const tv = toevoeging ? ` ${toevoeging}` : "";
    send(
      `Afzender: ${naam}, ${postcode} ${huisnummer}${tv}, e-mail: ${email}`,
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

        <FormField id="sender-naam">
          <FormFieldLabel htmlFor="sender-naam">
            Voor- en achternaam
          </FormFieldLabel>
          <TextInput
            id="sender-naam"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Bijv. Pieter Post"
            size="full"
            disabled={submitted}
          />
        </FormField>

        <Flex gap="l">
          <FormField
            id="sender-postcode"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="sender-postcode">
              Postcode
            </FormFieldLabel>
            <TextInput
              id="sender-postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              placeholder="Bijv. 1111AA"
              size="full"
              disabled={submitted}
            />
          </FormField>

          <FormField
            id="sender-huisnummer"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="sender-huisnummer">
              Huisnummer/postbus
            </FormFieldLabel>
            <TextInput
              id="sender-huisnummer"
              value={huisnummer}
              onChange={(e) => setHuisnummer(e.target.value)}
              placeholder="Bijv. 1"
              size="full"
              disabled={submitted}
            />
          </FormField>

          <FormField
            id="sender-toevoeging"
            style={{ flex: 1, minWidth: 0 }}
          >
            <FormFieldLabel htmlFor="sender-toevoeging">
              Toevoeging
            </FormFieldLabel>
            <SelectInput
              id="sender-toevoeging"
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

        <FormField id="sender-email">
          <FormFieldLabel htmlFor="sender-email">
            Emailadres
          </FormFieldLabel>
          <FormFieldHelperText>
            Voor bevestiging, verzendlabel en track &amp;
            trace-info.
          </FormFieldHelperText>
          <TextInput
            id="sender-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Bijv. naam@voorbeeld.nl"
            size="full"
            disabled={submitted}
          />
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