import React from "react";
import { Text } from "react-native";
import { Box } from "./LetterBox.style";

export type letterStatus = "success" | "failure" | "missed";

export type LetterBoxProps = {
  status: letterStatus;
  letter?: string;
};

export function LetterBox({ status, letter = "." }: LetterBoxProps) {
  return (
    <Box status={status}>
      <Text> {letter} </Text>
    </Box>
  );
}
