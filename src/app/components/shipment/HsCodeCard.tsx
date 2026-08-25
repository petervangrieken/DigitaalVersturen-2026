import { useState } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { SelectionTile } from "./SelectionTile";
import { useSendUserMessage } from "../../lib/use-send-user-message";

interface HsCodeSuggestion {
  code: string;
  description: string;
}

interface HsCodeCardProps {
  headline: string;
  suggestions: HsCodeSuggestion[];
  preSelectedCode?: string;
}

export function HsCodeCard({
  headline,
  suggestions = [],
  preSelectedCode,
}: HsCodeCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(
    preSelectedCode ?? suggestions[0]?.code,
  );

  const handleSubmit = () => {
    if (submitted || isSending) return;
    const opt =
      suggestions.find((s) => s.code === selected) ??
      suggestions[0];
    if (!opt) return;
    setSubmitted(true);
    send(`HS-code: ${opt.code} — ${opt.description}`);
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

        <Flex gap="m">
          {suggestions.map((suggestion) => (
            <SelectionTile
              key={suggestion.code}
              selected={selected === suggestion.code}
              onClick={() =>
                !submitted && setSelected(suggestion.code)
              }
              disabled={submitted}
            >
              <Heading level={3} size="m" color="subtle">
                {suggestion.code}
              </Heading>
              <Text size="m" variant="default">
                {suggestion.description}
              </Text>
            </SelectionTile>
          ))}
        </Flex>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleSubmit}
            >
              Volgende
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}