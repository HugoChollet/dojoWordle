import React from "react";
import { Text } from "react-native";
import { Box } from "./LetterBox.style";

export type LetterStatus = "success" | "failure" | "missed";

export type LetterBoxProps = {
  status: LetterStatus;
  letter?: string;
};

export function LetterBox({ status, letter = "." }: LetterBoxProps) {
  return (
    <Box status={status}>
      <Text>{letter}</Text>
    </Box>
  );
}
