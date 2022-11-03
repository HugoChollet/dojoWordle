import React from "react";
import { Text } from "react-native";
import { Box } from "./LetterBox.style";

type letterStatus = "success" | "failure" | "missed";

export type LetterBoxProps = {
  status: letterStatus;
};

export function LetterBox({ status }: LetterBoxProps) {
  return (
    <Box status={status}>
      <Text> A </Text>
    </Box>
  );
}
