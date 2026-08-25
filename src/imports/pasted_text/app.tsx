Add @tambo-ai/react and zod to the project dependencies in package.json.
Then make the following code changes:
---
1. Replace src/app/App.tsx with:
import { StampProvider } from '@design-system/react';
import '@design-system/css';
import { TamboProvider } from '@tambo-ai/react';
import { tamboComponents } from './lib/tambo';
import { ShipmentApp } from './components/chat/ShipmentApp';
const TAMBO_API_KEY = 'tambo_Engi7tCwGqyb2LJCk5DbPK43GSyyDuhqhG/GsbjmApT1EnspOJ6Jgs8VzOwtECSNcdLFCj0rr1i6JHYHJCD+MbMMRtdh4i54kaj9J4te7DQ=';
export default function App() {
  return (
    <StampProvider colorScheme="light">
      <TamboProvider apiKey={TAMBO_API_KEY} components={tamboComponents}>
        <ShipmentApp />
      </TamboProvider>
    </StampProvider>
  );
}
---
2. Create src/app/lib/tambo.ts:
import { z } from 'zod';
import { WelcomeCard } from '../components/shipment/WelcomeCard';
export const tamboComponents = [
  {
    name: 'WelcomeCard',
    description: 'Greeting card shown at the start of a PostNL shipment conversation. Render this when the user greets the assistant or asks how to send a package.',
    component: WelcomeCard,
    propsSchema: z.object({
      headline: z.string().describe('Short welcome headline, e.g. "Welkom bij PostNL"'),
      subtext: z.string().describe('Brief description of what the user can do'),
    }),
  },
];
---
3. Create src/app/components/shipment/WelcomeCard.tsx:
import { Card, Flex, Heading, Text, Button } from '@design-system/react';
interface WelcomeCardProps {
  headline: string;
  subtext: string;
}
export function WelcomeCard({ headline, subtext }: WelcomeCardProps) {
  return (
    <Card style={{ padding: 'var(--stamp-spacing-inner-xl)' }}>
      <Flex direction="column" gap="m">
        <Heading level={2} size="m">{headline}</Heading>
        <Text size="m" variant="subtle">{subtext}</Text>
        <Button variant="primary" size="auto">Aan de slag</Button>
      </Flex>
    </Card>
  );
}
---
4. Create src/app/components/chat/ShipmentApp.tsx:
import { Container, Flex, Text, TextareaInput, Button, Loader } from '@design-system/react';
import { useTambo, useTamboThreadInput } from '@tambo-ai/react';
import { PostNLLogo } from '../PostNLLogo';
function MessageThread() {
  const { messages, isStreaming } = useTambo();
  return (
    <Flex direction="column" gap="l" style={{ padding: 'var(--stamp-spacing-outer-s) 0' }}>
      {messages.map((message) => (
        <Flex key={message.id} direction="column" gap="s">
          {Array.isArray(message.content) &&
            message.content
              .filter((p: { type: string }) => p.type === 'text')
              .map((p: { text: string }, i: number) => (
                <div
                  key={i}
                  style={{
                    background: message.role === 'user'
                      ? 'var(--stamp-color-background-default)'
                      : 'transparent',
                    padding: 'var(--stamp-spacing-inner-m)',
                    borderRadius: '8px',
                    alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                  }}
                >
                  <Text size="m">{p.text}</Text>
                </div>
              ))
          }
          {message.renderedComponent && (
            <div style={{ maxWidth: '540px' }}>{message.renderedComponent}</div>
          )}
        </Flex>
      ))}
      {isStreaming && <Loader variant="spinner" />}
    </Flex>
  );
}
function ChatInput() {
  const { value, setValue, submit, isPending } = useTamboThreadInput();
  return (
    <Flex direction="row" gap="s" alignItems="end" style={{ padding: 'var(--stamp-spacing-inner-m) 0' }}>
      <div style={{ flex: 1 }}>
        <TextareaInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="Stel een vraag..."
          size="full"
          rows={2}
        />
      </div>
      <Button variant="primary" onClick={submit} loading={isPending} loadingLabel="Bezig...">
        Sturen
      </Button>
    </Flex>
  );
}
export function ShipmentApp() {
  return (
    <Flex direction="column" style={{ height: '100vh', background: 'var(--stamp-color-background-surface)' }}>
      <header style={{ background: 'var(--stamp-color-background-brand)', padding: 'var(--stamp-spacing-inner-m) var(--stamp-spacing-outer-s)' }}>
        <Container>
          <PostNLLogo variant="on-brand" size="s" />
        </Container>
      </header>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Container><MessageThread /></Container>
      </div>
      <div style={{ borderTop: '1px solid var(--stamp-color-border-default)', background: 'var(--stamp-color-background-surface)' }}>
        <Container><ChatInput /></Container>
      </div>
    </Flex>
  );
}
---
Important rules to follow (do not violate these):
- Never import from /src/app/components/ui/ — those are legacy shadcn components
- Never hardcode hex colors or pixel values — always use --stamp-* CSS custom properties
- Never add inline SVG — icons only from @design-system/icons
- TamboProvider must nest INSIDE StampProvider, not outside