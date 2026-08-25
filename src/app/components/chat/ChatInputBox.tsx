import { useState } from "react";
import { Flex, Text, IconButton } from "@design-system/react";
import {
  PaperclipIcon,
  MicIcon,
  ArrowUpIcon,
  StopIcon,
} from "@design-system/icons/24x24";

export interface ChatInputBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  /** True while the AI is streaming — shows stop button, disables input */
  isPending?: boolean;
  /** 'landing' = strong border, no shadow; 'chat' = default border + drop shadow */
  variant?: "landing" | "chat";
  showDisclaimer?: boolean;
}

export function ChatInputBox({
  value,
  onChange,
  onSubmit,
  placeholder = "Beschrijf wat je wilt versturen in 1 of 2 zinnen...",
  isPending = false,
  variant = "landing",
  showDisclaimer = false,
}: ChatInputBoxProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isEmpty = value.length === 0;

  // Border colour follows Input component states from Figma
  const borderColor = (() => {
    if (isHovered && !isPending)
      return "var(--stamp-color-border-hover)";
    if (variant === "chat" || isPending)
      return "var(--stamp-color-border-default)";
    return "var(--stamp-color-border-strong)";
  })();

  const showSendButton = !isEmpty && !isPending;
  const showStopButton = isPending;

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter" && !e.shiftKey && showSendButton) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <Flex direction="column" gap="xs" style={{ width: "100%" }}>
      {/* Input card */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "relative",
          background: "var(--stamp-color-background-surface)",
          borderRadius: "var(--stamp-radius-s)",
          padding: "var(--stamp-spacing-inner-l)",
          border: `1px solid ${isHovered ? "var(--stamp-color-border-hover)" : "var(--stamp-color-border-strong)"}`,
        }}
      >
        {/* Focus ring — approximates the #001a73 focus ring from Figma using nearest token */}
        {isFocused && !isPending && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "var(--stamp-radius-m)",
              border:
                "2px solid var(--stamp-color-border-focus-outline)",
              pointerEvents: "none",
            }}
          />
        )}

        <Flex alignItems="center" gap="l">
          {/* Attachment */}
          <IconButton
            type="button"
            variant="secondary"
            size="xl"
            icon={<PaperclipIcon />}
            aria-label="Bijlage toevoegen"
          />

          {/* Text field */}
          <input
            type="text"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={isPending}
            style={{
              flex: 1,
              minWidth: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "var(--stamp-color-text-default)",
              fontSize: "var(--stamp-color-text-default)",
              fontFamily: "var(--stamp-color-text-default)",
              lineHeight: "var(--stamp-color-text-default)",
            }}
          />

          {/* Right actions */}
          <Flex alignItems="center" gap="s">
            <IconButton
              type="button"
              variant="tertiary"
              size="xl"
              icon={<MicIcon />}
              aria-label="Spraakbericht"
            />

            {(showSendButton || showStopButton) && (
              <IconButton
                type="button"
                variant="primary"
                size="xl"
                icon={
                  showStopButton ? (
                    <StopIcon />
                  ) : (
                    <ArrowUpIcon />
                  )
                }
                aria-label={
                  showStopButton ? "Stop" : "Verstuur"
                }
                onClick={showSendButton ? onSubmit : undefined}
              />
            )}
          </Flex>
        </Flex>
      </div>

      {/* Disclaimer shown in chat mode */}
      {showDisclaimer && (
        <Text
          size="s"
          style={{
            textAlign: "center",
            color: "var(--stamp-color-text-subtle)",
          }}
        >
          We use AI, check important info.{" "}
          <span
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            More info
          </span>
        </Text>
      )}
    </Flex>
  );
}