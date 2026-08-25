import { useTambo, useTamboThreadInput } from '@tambo-ai/react';
import * as React from 'react';

/**
 * Lets a generative component post a message into the conversation on the
 * user's behalf (e.g. after they confirm a selection in a card or form).
 *
 * Tambo's `submit()` closes over the current input `value`, so calling
 * `setValue(text)` and `submit()` in the same tick would submit the *previous*
 * value. This hook sets the value, then submits once React has committed the
 * new value — avoiding that race.
 *
 * `isSending` is also true while the AI is streaming, so card submit buttons
 * stay disabled until the full response has arrived.
 */
export function useSendUserMessage() {
  const { isStreaming } = useTambo();
  const { value, setValue, submit } = useTamboThreadInput();
  const pending = React.useRef<string | null>(null);
  const [isSending, setIsSending] = React.useState(false);

  React.useEffect(() => {
    if (pending.current !== null && value === pending.current) {
      pending.current = null;
      submit()
        .catch((err) => console.error('Failed to send message:', err))
        .finally(() => setIsSending(false));
    }
  }, [value, submit]);

  const send = React.useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setIsSending(true);
      pending.current = trimmed;
      setValue(trimmed);
    },
    [setValue],
  );

  return { send, isSending: isSending || isStreaming };
}
