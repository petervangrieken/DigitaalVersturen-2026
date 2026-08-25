import { useState, useRef, useEffect } from "react";
import {
  Container,
  Flex,
  Heading,
  Text,
  Link,
  LinkListEmphasis,
  LinkListEmphasisItem,
} from "@design-system/react";
import {
  ChevronDownIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@design-system/icons/16x16";
import {
  useTambo,
  useTamboThreadInput,
  ComponentRenderer,
} from "@tambo-ai/react";
import type { Content } from "@tambo-ai/react";
import { PostNLLogo } from "../PostNLLogo";
import { ChatInputBox } from "./ChatInputBox";

// ─── Static data ────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "kleding", label: "Kleding & textiel" },
  { id: "boeken", label: "Boeken, papier & media" },
  { id: "elektronica", label: "Elektronica & tech" },
  { id: "wonen", label: "Wonen & interieur" },
  { id: "cadeaus", label: "Cadeaus & feestartikelen" },
  { id: "onderdelen", label: "Onderdelen & gereedschap" },
  {
    id: "gezondheid",
    label: "Gezondheid & persoonlijke verzorging",
  },
  { id: "voedsel", label: "Voedsel & dranken" },
];

const CATEGORY_PROMPTS: Record<string, string[]> = {
  kleding: [
    "Een spijkerbroek die ik verkoop op Vinted",
    "Twee t-shirts voor mijn neef in Amsterdam",
    "Een jas die ik terugstuur naar de webshop",
    "Sportkleding, zo'n 5 stuks",
    "Kinderpyjama's voor mijn zus",
    "Een trui, zit al in de originele verpakking",
    "Tweedehands schoenen, maat 42",
    "Een badpak en een handdoek",
  ],
  boeken: [
    "Een tweedehands studieboek",
    "Een roman voor mijn moeder",
    "Tijdschriften, 3 stuks",
    "Een agenda en notitieboek",
  ],
  elektronica: [
    "Een laptop voor reparatie",
    "Oordopjes in originele verpakking",
    "Een telefoon die ik verkoop",
    "Opladers en kabels",
  ],
  wonen: [
    "Een kleine vaas",
    "Kussens en deken",
    "Een fotolijst",
    "Kaarsenset als cadeau",
  ],
  cadeaus: [
    "Een verjaardagscadeau",
    "Sinterklaas surprise",
    "Kerstpakket",
    "Een cadeaupakket met spelletjes",
  ],
  onderdelen: [
    "Fietsonderdelen",
    "Gereedschap uit mijn garage",
    "Auto-accessoires",
    "Kleine elektronische onderdelen",
  ],
  gezondheid: [
    "Supplementen in dozen",
    "Cosmetica als cadeau",
    "Medicijnen in originele verpakking",
    "Sportvoeding",
  ],
  voedsel: [
    "Gedroogde pasta en sauzen",
    "Koffiebonen als cadeau",
    "Thee en koekjes",
    "Noten en gedroogd fruit",
  ],
};

// ─── Shared header ───────────────────────────────────────────────────────────

// Strips Tambo protocol machinery that the model sometimes leaks into its
// visible text channel. Only known tags are removed — never generic XML-ish
// text — so prose containing "<" or dimensions stays intact.
function sanitizeMessageText(text: string): string {
  return (
    text
      .replace(
        /<parameter name="_tambo_[^"]*">[\s\S]*?<\/parameter>/g,
        "",
      )
      .replace(
        /<component_state[^>]*>[\s\S]*?<\/component_state>/gi,
        "",
      )
      // Unclosed opening tag: during streaming the closing tag may not
      // have arrived yet, so strip to end of text to avoid a flash.
      .replace(/<component_state[^>]*>[\s\S]*$/gi, "")
      .replace(/<\/component_state>/gi, "")
      .trim()
  );
}

function AppHeader() {
  return (
    <header
      style={{
        background: "var(--stamp-color-background-variant)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 var(--stamp-spacing-outer-s)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1104px",
            padding: "var(--stamp-spacing-inner-m) 0",
          }}
        >
          <PostNLLogo variant="on-light" size="s" />

          {/* Nav items */}
          <Flex alignItems="center" gap="xxl">
            {/* NL + divider */}
            <div
              style={{
                paddingRight: "var(--stamp-spacing-inner-l)",
                borderRight:
                  "1px solid var(--stamp-color-border-default)",
              }}
            >
              <Link
                size="m"
                endIcon={<ChevronDownIcon />}
                href="#"
              >
                NL
              </Link>
            </div>

            <Link
              size="m"
              endIcon={<ChevronDownIcon />}
              href="#"
            >
              Inloggen
            </Link>
            <Link size="m" endIcon={<CloseIcon />} href="#">
              Annuleren
            </Link>
          </Flex>
        </div>
      </div>
    </header>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function AppFooter() {
  return (
    <footer
      style={{
        background: "var(--stamp-color-background-variant)",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding:
            "var(--stamp-spacing-inner-xl) var(--stamp-spacing-outer-s)",
        }}
      >
        <Flex
          alignItems="center"
          gap="xl"
          justifyContent="end"
          style={{ width: "100%", maxWidth: "1104px" }}
        >
          <Flex alignItems="center" gap="l">
            <PostNLLogo variant="on-light" size="m" />
            <Text size="s">© Koninklijke PostNL</Text>
          </Flex>
          <Flex
            gap="xl"
            justifyContent="end"
            style={{ flex: 1 }}
          >
            {[
              "Privacy",
              "Cookies",
              "Gebruiksvoorwaarden",
              "Algemene voorwaarden",
            ].map((label) => (
              <Link key={label} size="s" href="#">
                {label}
              </Link>
            ))}
          </Flex>
        </Flex>
      </div>
    </footer>
  );
}

// ─── Landing view ─────────────────────────────────────────────────────────────

interface LandingViewProps {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  isPending: boolean;
}

function LandingView({
  value,
  onChange,
  onSubmit,
  isPending,
}: LandingViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);

  const selectedLabel = CATEGORIES.find(
    (c) => c.id === selectedCategory,
  )?.label;
  const subPrompts = selectedCategory
    ? (CATEGORY_PROMPTS[selectedCategory] ?? [])
    : [];

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "var(--stamp-color-background-surface)",
        overflowY: "auto",
      }}
    >
      {/* Centred content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          padding:
            "calc(var(--stamp-spacing-outer-l) + var(--stamp-spacing-inner-l)) var(--stamp-spacing-outer-s)",
        }}
      >
        <Flex
          direction="column"
          gap="3-xl"
          style={{ width: "100%", maxWidth: "722px" }}
        >
          <Heading level={1} size="3-xl" color="default">
            Goedemorgen, wat wil je versturen?
          </Heading>

          <ChatInputBox
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            placeholder="Beschrijf wat je wilt versturen in 1 of 2 zinnen..."
            isPending={isPending}
            variant="landing"
          />

          {/* Category section */}
          {selectedCategory === null ? (
            <Flex direction="column" gap="xl">
              <Heading level={2} size="m" color="subtle">
                Of kies direct een categorie
              </Heading>

              {/* 2-column grid via CSS grid override on LinkListEmphasis */}
              <LinkListEmphasis
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "var(--stamp-spacing-inner-l)",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {CATEGORIES.map((cat) => (
                  <LinkListEmphasisItem key={cat.id}>
                    <Link
                      as="button"
                      size="l"
                      endIcon={<ChevronRightIcon />}
                      onClick={() =>
                        setSelectedCategory(cat.id)
                      }
                      style={{
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {cat.label}
                    </Link>
                  </LinkListEmphasisItem>
                ))}
              </LinkListEmphasis>
            </Flex>
          ) : (
            <Flex direction="column" gap="xl">
              {/* Back + category title */}
              <Flex alignItems="center" gap="l">
                <Link
                  as="button"
                  size="m"
                  startIcon={<ChevronLeftIcon />}
                  onClick={() => setSelectedCategory(null)}
                >
                  Terug
                </Link>
                <Heading level={2} size="m" color="subtle">
                  {selectedLabel}
                </Heading>
              </Flex>

              {/* Sub-prompt list */}
              <LinkListEmphasis
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "var(--stamp-spacing-inner-l)",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {subPrompts.map((prompt) => (
                  <LinkListEmphasisItem key={prompt}>
                    <Link
                      as="button"
                      size="l"
                      endIcon={<ChevronRightIcon />}
                      onClick={() => {
                        onChange(prompt);
                        setSelectedCategory(null);
                      }}
                      style={{
                        width: "100%",
                        textAlign: "left",
                      }}
                    >
                      {prompt}
                    </Link>
                  </LinkListEmphasisItem>
                ))}
              </LinkListEmphasis>
            </Flex>
          )}
        </Flex>
      </div>

      <AppFooter />
    </div>
  );
}

// ─── Chat view ────────────────────────────────────────────────────────────────

interface ChatViewProps {
  messages: ReturnType<typeof useTambo>["messages"];
  isStreaming: boolean;
  currentThreadId: string;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  isPending: boolean;
}

function ChatView({
  messages,
  isStreaming,
  currentThreadId,
  value,
  onChange,
  onSubmit,
  isPending,
}: ChatViewProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollEndRef = useRef<HTMLDivElement>(null);
  const isNearBottomRef = useRef(true);

  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isNearBottomRef.current =
      el.scrollHeight - el.scrollTop - el.clientHeight < 120;
  };

  useEffect(() => {
    if (isNearBottomRef.current) {
      scrollEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isStreaming]);

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--stamp-color-background-surface)",
      }}
    >
      {/* Scrollable thread */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        style={{ flex: 1, overflowY: "auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 var(--stamp-spacing-outer-s)",
          }}
        >
          <Flex
            direction="column"
            gap="xl"
            style={{
              width: "100%",
              maxWidth: "722px",
              padding: "var(--stamp-spacing-inner-xl) 0",
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--stamp-spacing-inner-m)",
                }}
              >
                {Array.isArray(message.content) &&
                  message.content.map(
                    (block: Content, i: number) => {
                      if (block.type === "text") {
                        const visibleText = sanitizeMessageText(
                          block.text,
                        );
                        if (!visibleText) return null;
                        return (
                          <div
                            key={i}
                            style={{
                              alignSelf:
                                message.role === "user"
                                  ? "flex-end"
                                  : "flex-start",
                              maxWidth: "640px",
                              ...(message.role === "user" && {
                                background:
                                  "var(--stamp-color-background-variant)",
                                borderRadius: "8px",
                                padding:
                                  "var(--stamp-spacing-inner-m)",
                              }),
                            }}
                          >
                            <Text size="m">{visibleText}</Text>
                          </div>
                        );
                      }
                      if (block.type === "component") {
                        return (
                          <div
                            key={block.id ?? i}
                            style={{ width: "100%" }}
                          >
                            <ComponentRenderer
                              content={block}
                              threadId={currentThreadId}
                              messageId={message.id}
                            />
                          </div>
                        );
                      }
                      return null;
                    },
                  )}
              </div>
            ))}

            {/* Loading indicator */}
            {isStreaming && (
              <Flex alignItems="center" gap="m">
                <span className="stamp-spinner stamp-spinner--l" />
              </Flex>
            )}

            <div ref={scrollEndRef} />
          </Flex>
        </div>
      </div>

      {/* Sticky input */}
      <div
        style={{
          background: "var(--stamp-color-background-surface)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding:
              "var(--stamp-spacing-inner-m) var(--stamp-spacing-outer-s) var(--stamp-spacing-inner-s)",
          }}
        >
          <div style={{ width: "100%", maxWidth: "722px" }}>
            <ChatInputBox
              value={value}
              onChange={onChange}
              onSubmit={onSubmit}
              placeholder="Type je bericht..."
              isPending={isPending}
              variant="chat"
              showDisclaimer
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export function ShipmentApp() {
  const { messages, isStreaming, currentThreadId } = useTambo();
  const { value, setValue, submit, isPending } =
    useTamboThreadInput();

  const hasMessages = messages.length > 0;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--stamp-color-background-surface)",
      }}
    >
      <AppHeader />

      {hasMessages ? (
        <ChatView
          messages={messages}
          isStreaming={isStreaming}
          currentThreadId={currentThreadId}
          value={value ?? ""}
          onChange={setValue}
          onSubmit={submit}
          isPending={isPending}
        />
      ) : (
        <LandingView
          value={value ?? ""}
          onChange={setValue}
          onSubmit={submit}
          isPending={isPending}
        />
      )}
    </div>
  );
}