import type { TextareaProps } from "@chakra-ui/react";
import { Stack, IconButton, Box, Textarea, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

interface ChatInputProps extends Omit<TextareaProps, "onSubmit"> {
  isLoading: boolean;
  onSubmit: (value: string) => void;
  onClear: () => void;
}

const ChatInput = ({
  onSubmit,
  onClear,
  isLoading,
  ...props
}: ChatInputProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (
    e?: React.KeyboardEvent<HTMLTextAreaElement>,
    skipCheck: boolean = false
  ) => {
    if ((e?.key === "Enter" && e?.shiftKey === false) || skipCheck) {
      e?.preventDefault();

      if (!inputRef.current) {
        return;
      }

      const { value } = inputRef.current;

      if (value === "") {
        inputRef.current.reportValidity();
        return;
      }

      onSubmit(value);

      // Clear input
      inputRef.current.value = "";
    }
  };

  return (
    <Box
      id="chat-input"
      padding={2}
      w="100%"
      style={{
        bottom: 8,
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        w="100%"
        bgColor="purple.400"
        maxWidth={1000}
        p={2}
        borderRadius={8}
        flexDirection="row"
      >
        <Textarea
          ref={inputRef}
          onKeyDown={handleSubmit}
          placeholder="Provide prompt"
          textColor="white"
          focusBorderColor="white"
          resize="none"
          _placeholder={{
            color: "whiteAlpha.700",
          }}
          {...props}
        />
        <Flex flexDir="column" gap={1}>
          <IconButton
            isLoading={isLoading}
            aria-label="Search"
            icon={<AiOutlineSend color="purple" />}
            onClick={() => handleSubmit(undefined, true)}
          />
          <IconButton
            aria-label="Search"
            icon={<BsFillTrashFill color="purple" />}
            onClick={onClear}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default ChatInput;
