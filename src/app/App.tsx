import { useEffect } from "react";
import { StampProvider } from "@design-system/react";
import { TamboProvider } from "@tambo-ai/react";
import { tamboComponents } from "./lib/tambo";
import { ShipmentApp } from "./components/chat/ShipmentApp";

const TAMBO_API_KEY =
  "tambo_Ct15N+6WyQPYVU7TiRkqkDvwHY4ia26/zNlq82IYsBHpuSI87tphIess0Cefip8BHc4bq5rFf5MK5b5IQILfDGX/hWDtqSGfsuLKacTRHq8=";

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .stamp-skip-links,
      .stamp-skip-link,
      a.stamp-skip-link,
      [class*="skip-link"],
      [class*="skip_link"],
      [class*="skipLink"] { display: none !important; }
    `;
    document.head.appendChild(style);

    const hideSkipLinks = () => {
      document.querySelectorAll("a").forEach((a) => {
        const href = a.getAttribute("href") ?? "";
        const text = a.textContent ?? "";
        if (
          /skip/i.test(text) ||
          /skip/i.test(href) ||
          href === "#main-content" ||
          href === "#content"
        ) {
          a.style.setProperty("display", "none", "important");
        }
      });
    };
    hideSkipLinks();
    const t = setTimeout(hideSkipLinks, 300);

    return () => {
      clearTimeout(t);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <StampProvider colorScheme="light">
      <TamboProvider
        apiKey={TAMBO_API_KEY}
        userKey="poc-user"
        components={tamboComponents}
      >
        <ShipmentApp />
      </TamboProvider>
    </StampProvider>
  );
}