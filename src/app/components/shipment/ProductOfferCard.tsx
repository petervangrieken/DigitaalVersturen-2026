import { ReactNode, useState } from "react";
import {
  Card,
  Flex,
  Heading,
  Text,
  Button,
  Illustration,
} from "@design-system/react";
import { SplitPrice } from "./SplitPrice";
import { useSendUserMessage } from "../../lib/use-send-user-message";
import {
  WeightIcon,
  MeasureIcon,
  ListCheckIcon,
} from "@design-system/icons/24x24";
import { ChevronRightIcon } from "@design-system/icons/16x16";
import {
  PackagePostboxNormal,
  PackageSmall,
  PackageMedium,
  PackageLarge,
} from "@design-system/illustrations/react/basic";

// ─── Types ────────────────────────────────────────────────────────────────────

type IllustrationVariant =
  | "PackagePostbox"
  | "PackageSmall"
  | "PackageMedium"
  | "PackageLarge";

export interface OfferItem {
  label: string;
  /** Price or text label, e.g. "+ € 5,00", "standaard", "Gratis" */
  price: string;
}

export interface ProductOfferCardProps {
  headline: string;
  illustration: IllustrationVariant;
  /** Base product price, e.g. "€ 5,85" */
  headerPrice: string;
  /** Weight spec, e.g. "Max. 3 kilo" */
  weight: string;
  /** Dimensions spec, e.g. "max. 34 x 28 x 15 cm" */
  dimensions: string;
  /** Variable list of feature items */
  items: OfferItem[];
  /** Total price including all items, e.g. "€ 10,85" */
  totalPrice: string;
}

// ─── Illustration map ────────────────────────────────────────────────────────

const ILLUSTRATIONS: Record<IllustrationVariant, ReactNode> = {
  PackagePostbox: <PackagePostboxNormal />,
  PackageSmall: <PackageSmall />,
  PackageMedium: <PackageMedium />,
  PackageLarge: <PackageLarge />,
};

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

export function ProductOfferCard({
  headline = "",
  illustration,
  headerPrice,
  weight = "",
  dimensions = "",
  items = [],
  totalPrice,
}: ProductOfferCardProps) {
  const { send, isSending } = useSendUserMessage();
  const [decision, setDecision] = useState<
    "approve" | "modify" | null
  >(null);

  const handleApprove = () => {
    if (decision || isSending) return;
    setDecision("approve");
    send(`Ja, ik ga akkoord met ${headline}.`);
  };

  const handleModify = () => {
    if (decision || isSending) return;
    setDecision("modify");
    send("Nee, ik wil iets wijzigen aan het voorstel.");
  };

  // Fallback to PackageSmall for any unrecognised illustration value
  const illustrationNode =
    ILLUSTRATIONS[illustration] ?? ILLUSTRATIONS.PackageSmall;

  return (
    <Card
      theme="default"
      style={{
        padding: "var(--stamp-spacing-inner-xl)",
        ...(decision && {
          backgroundColor:
            "var(--stamp-color-background-surface)",
          borderColor: "var(--stamp-color-border-default)",
        }),
      }}
    >
      <Flex direction="column" gap="l">
        {/* Product header: illustration + name/specs + price */}
        <Flex gap="s" alignItems="center">
          <Illustration size="m">
            {illustrationNode}
          </Illustration>
          <Flex
            direction="column"
            gap="xs"
            style={{ flex: 1, minWidth: 0 }}
          >
            <Flex alignItems="center" gap="xs">
              <Heading
                level={3}
                size="s"
                color="subtle"
                style={{ flex: 1 }}
              >
                {headline}
              </Heading>
              <SplitPrice value={headerPrice} scale="s" />
            </Flex>
            <Flex gap="xl" alignItems="center">
              <Flex gap="s" alignItems="center">
                <WeightIcon
                  style={{
                    color: "var(--stamp-color-icon-brand)",
                    flexShrink: 0,
                  }}
                />
                <Text size="m">{weight}</Text>
              </Flex>
              <Flex gap="s" alignItems="center">
                <MeasureIcon
                  style={{
                    color: "var(--stamp-color-icon-brand)",
                    flexShrink: 0,
                  }}
                />
                <Text size="m">{dimensions}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Divider />

        <Flex direction="column" gap="s">
          {items.map((item, i) => {
            // Values with digits but no € are descriptions (e.g. "3-5 werkdagen"),
            // not prices — fold them into the left label instead of the right column.
            const isRightAligned =
              !item.price ||
              item.price.includes("€") ||
              !/[0-9]/.test(item.price);
            return (
              <Flex
                key={i}
                alignItems="center"
                justifyContent="between"
              >
                <Flex
                  gap="s"
                  alignItems="center"
                  style={{ flex: 1, minWidth: 0 }}
                >
                  <ListCheckIcon
                    style={{
                      color: "var(--stamp-color-icon-brand)",
                      flexShrink: 0,
                    }}
                  />
                  <Text size="m">
                    {item.label}
                    {!isRightAligned && item.price
                      ? ` ${item.price}`
                      : ""}
                  </Text>
                </Flex>
                {isRightAligned && (
                  <SplitPrice value={item.price} scale="s" />
                )}
              </Flex>
            );
          })}
        </Flex>

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

        {!decision && !isSending && (
          <Flex gap="l" justifyContent="end">
            <Button
              variant="secondary"
              size="auto"
              onClick={handleModify}
            >
              Nee, iets wijzigen
            </Button>
            <Button
              variant="primary"
              size="auto"
              endIcon={<ChevronRightIcon />}
              onClick={handleApprove}
            >
              Ja, ik ga akkoord
            </Button>
          </Flex>
        )}
      </Flex>
    </Card>
  );
}