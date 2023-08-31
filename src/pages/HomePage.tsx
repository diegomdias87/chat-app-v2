import { Flex } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useMemo, useRef, useState } from "react";

import { getChatResponse } from "~/api";

import ChatInput from "./components/ChatInput";
import Message from "./components/Message";

interface ChatMessage {
  message: Message;
  type: Role;
}

const handleResponse = (
  dispatch: Dispatch<SetStateAction<ChatMessage[]>>,
  success: boolean,
  response: string
) => {
  dispatch((prev) => {
    // [prompt, loading, ...rest]
    // Remove second element (loading)
    const [, prompt, ...rest] = prev;

    return [
      {
        message: {
          id: (Date.now() + 1).toString(),
          state: success ? "success" : "error",
          content: response,
        },
        type: "bot",
      },
      prompt,
      ...rest,
    ];
  });
};

const HomePage = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const isPromptLoading = useMemo(
    () => messages.some(({ message }) => message.state === "loading"),
    [messages]
  );

  const handleSubmit = useCallback((prompt: string) => {
    setMessages((prev) => [
      {
        message: {
          id: (Date.now() + 1).toString(),
          state: "loading",
          content: "Loading...",
        },
        type: "bot",
      },
      {
        message: {
          id: Date.now().toString(),
          state: "success",
          content: prompt,
        },
        type: "user",
      },
      ...prev,
    ]);

    getChatResponse(prompt)
      .then((response) => {
        handleResponse(setMessages, true, response);
      })
      .catch((error) => {
        handleResponse(setMessages, false, error.message);
      })
      .then(() => {
        if (listRef.current) {
          setTimeout(() => {
            listRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
            });
          }, 100);
        }
      });
  }, []);

  const handleClear = useCallback(() => {
    setMessages([]);
  }, []);

  const bottomPadding =
    (document.getElementById("chat-input")?.clientHeight || 200) + 8;

  return (
    <Flex minH="100vh" width="98vw" justifyContent="center" mx="auto">
      <Flex
        ref={listRef}
        flexDirection="column-reverse"
        justifyContent="flex-end"
        width="100%"
        maxW={1000}
        mt={4}
        marginBottom={bottomPadding}
        scrollMarginBottom={bottomPadding}
      >
        {[...messages].map(({ message, type }) => (
          <Message key={message.id} message={message} type={type} />
        ))}
      </Flex>
      <ChatInput
        onSubmit={handleSubmit}
        onClear={handleClear}
        isReadOnly={isPromptLoading}
        isRequired
        isLoading={isPromptLoading}
      />
    </Flex>
  );
};

export default HomePage;
