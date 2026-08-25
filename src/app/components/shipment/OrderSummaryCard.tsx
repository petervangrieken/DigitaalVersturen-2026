import { useState } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
} from "@design-system/react";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import { SplitPrice } from "./SplitPrice";
import { SelectionRow } from "./SelectionRow";
import { useSendUserMessage } from "../../lib/use-send-user-message";
import svgPaths from "../../../imports/Container/svg-ula89h6jj4";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SummaryRow {
  label: string;
  value: string;
}

export interface SummarySection {
  title: string;
  rows: SummaryRow[];
}

export interface OrderSummaryCardProps {
  headline: string;
  sections: SummarySection[];
  /** Total price including all items, e.g. "€ 10,85" */
  totalPrice: string;
  paymentHeadline?: string;
}

// ─── Payment logos ────────────────────────────────────────────────────────────

function IdealIcon() {
  return (
    <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
      <div style={{ position: "absolute", inset: 0, background: "#fff48d", borderRadius: 2 }} />
      {/* iDEAL logo */}
      <div style={{ position: "absolute", top: "7.18%", left: "20.83%", right: "20.85%", bottom: "41.67%" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 27.9902 24.5527">
          <path d={svgPaths.p3c7ad880} fill="white" />
          <path d={svgPaths.p2fcf1340} fill="#CC0066" />
          <path clipRule="evenodd" d={svgPaths.peae2680} fill="#232323" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p20e54400} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p3efe4580} fill="white" />
          <path clipRule="evenodd" d={svgPaths.pe650300} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p3978aa00} fill="white" />
          <path d={svgPaths.p336c2400} fill="#232323" />
          <path d={svgPaths.p6880800} fill="#232323" />
        </svg>
      </div>
      {/* Divider */}
      <div style={{ position: "absolute", top: "64.58%", left: "7.87%", right: "7.87%", bottom: "34.06%" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 40.4475 0.650847">
          <path d={svgPaths.p1ebf6800} fill="#1D1C1C" />
        </svg>
      </div>
      {/* Wero logo */}
      <div style={{ position: "absolute", top: "72.92%", left: "8.16%", right: "8.5%", bottom: "7.65%" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 40.0001 9.33014">
          <path d={svgPaths.p14c58300} fill="#1D1C1C" />
          <path d={svgPaths.p197c5b70} fill="#1D1C1C" />
          <path d={svgPaths.p34aedf00} fill="#1D1C1C" />
          <path d={svgPaths.p685afc0} fill="#1D1C1C" />
          <path d={svgPaths.p2d1ef780} fill="#1D1C1C" />
          <path d={svgPaths.p2f43d680} fill="#1D1C1C" />
        </svg>
      </div>
    </div>
  );
}

function MastercardIcon() {
  return (
    <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 22, height: 16, overflow: "hidden" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
          <path d={svgPaths.p34bdea80} fill="#FF5F00" />
          <path d={svgPaths.p1a386080} fill="#EB001B" />
          <path d={svgPaths.p2012fd80} fill="#F79E1B" />
        </svg>
      </div>
    </div>
  );
}

function VisaIcon() {
  return (
    <div style={{ position: "relative", width: 48, height: 48, flexShrink: 0 }}>
      <div style={{ position: "absolute", top: "37.5%", left: "4.17%", right: "5.96%", bottom: "37.55%" }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" preserveAspectRatio="none" viewBox="0 0 43.1382 11.9746">
          <path d={svgPaths.p15398180} fill="#1434CB" />
          <path clipRule="evenodd" d={svgPaths.p1805fd00} fill="#1434CB" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

// ─── Payment options ──────────────────────────────────────────────────────────

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icons: React.ReactNode;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    id: "ideal",
    name: "iDEAL",
    description: "Betaal direct via je eigen bank",
    icons: <IdealIcon />,
  },
  {
    id: "creditcard",
    name: "Creditcard",
    description: "Visa, Mastercard of American Express",
    icons: (
      <Flex gap="xs">
        <MastercardIcon />
        <VisaIcon />
      </Flex>
    ),
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      style={{
        height: "var(--stamp-border-width-s)",
        background: "var(--stamp-color-border-default)",
        width: "100%",
        flexShrink: 0,
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function OrderSummaryCard({
  headline,
  sections = [],
  totalPrice,
  paymentHeadline = "Hoe wil je betalen?",
}: OrderSummaryCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState("ideal");

  const handlePay = () => {
    if (submitted || isSending) return;
    setSubmitted(true);
    const opt =
      PAYMENT_OPTIONS.find((o) => o.id === selected) ??
      PAYMENT_OPTIONS[0];
    send(`Ik betaal met ${opt.name}.`);
  };

  // Drop rows the model left empty so the summary never shows blank lines.
  const visibleSections = sections
    .map((s) => ({
      ...s,
      rows: (s.rows ?? []).filter(
        (r) => r.value && r.value.trim() !== "",
      ),
    }))
    .filter((s) => s.rows.length > 0);

  return (
    <Card
      theme="default"
      style={{
        padding: "var(--stamp-spacing-inner-xl)",
        ...(submitted && {
          backgroundColor:
            "var(--stamp-color-background-surface)",
          borderColor: "var(--stamp-color-border-default)",
        }),
      }}
    >
      <Flex direction="column" gap="xl">
        <Heading level={2} size="l" color="brand">
          {headline}
        </Heading>

        {visibleSections.map((section, si) => (
          <Flex key={si} direction="column" gap="s">
            <Heading level={3} size="m" color="subtle">
              {section.title}
            </Heading>
            {section.rows.map((row, ri) => (
              <Flex
                key={ri}
                alignItems="baseline"
                justifyContent="between"
                gap="l"
              >
                <Heading
                  level={4}
                  size="xs"
                  color="subtle"
                  style={{ width: "160px" }}
                >
                  {row.label}
                </Heading>
                <Text
                  size="m"
                  style={{ textAlign: "right", minWidth: 0 }}
                >
                  {row.value}
                </Text>
              </Flex>
            ))}
          </Flex>
        ))}

        <Divider />

        <Flex alignItems="center" justifyContent="between">
          <Flex
            gap="m"
            alignItems="baseline"
            style={{ width: "100%" }}
          >
            <Heading level={3} size="xs" color="subtle">
              Totaal
            </Heading>
            <Text size="s" variant="subtle">
              (inclusief BTW)
            </Text>
          </Flex>
          <SplitPrice
            value={totalPrice}
            scale="m"
            color="subtle"
          />
        </Flex>

        <Divider />

        <Flex direction="column" gap="l">
          <Heading level={3} size="l" color="brand">
            {paymentHeadline}
          </Heading>
          {PAYMENT_OPTIONS.map((opt) => (
            <SelectionRow
              key={opt.id}
              selected={selected === opt.id}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
            >
              <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                <Heading level={3} size="s" color="subtle">
                  {opt.name}
                </Heading>
                <Text size="m">{opt.description}</Text>
              </Flex>
              {opt.icons}
            </SelectionRow>
          ))}
        </Flex>

        {!submitted && !isSending && (
          <Flex justifyContent="end">
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handlePay}
            >
              Betalen
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}