import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import type { Transition } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { BiSolidUserCircle, BiSolidBot } from "react-icons/bi";

interface MessageProps {
  message: Message;
  type: Role;
}

const motionTransition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
} satisfies Transition;

const Message = ({ message, type }: MessageProps) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        layout
        transition={motionTransition}
        style={{
          marginTop: 8,
          maxWidth: "80%",
          alignSelf: type === "user" ? "flex-end" : "flex-start",
          display: "flex",
          flexDirection: type === "user" ? "row" : "row-reverse",
        }}
      >
        <Box
          bgColor={type === "user" ? "gray.200" : "purple.400"}
          borderRadius={8}
          p={3}
          pb={4}
        >
          {message.state === "loading" ? (
            <Spinner size="sm" />
          ) : (
            <>
              {message.state === "error" && (
                <Text textColor="red.700" fontWeight="bold">
                  There was an error:
                </Text>
              )}
              <Text textColor={type === "user" ? "black" : "white"}>
                {message.content}
              </Text>
            </>
          )}
        </Box>
        <Flex mx={2}>
          {type === "bot" && <BiSolidBot size="1.9rem" />}
          {type === "user" && <BiSolidUserCircle size="2rem" />}
        </Flex>
      </motion.div>
    </AnimatePresence>
  );
};

export default Message;
