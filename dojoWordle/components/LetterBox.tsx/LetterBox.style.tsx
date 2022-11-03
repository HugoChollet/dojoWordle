import styled from "@emotion/native";
import { LetterBoxProps } from "./LetterBox";

const KEY_HEIGHT = 55;

export const Box = styled.View<{ status: LetterBoxProps["status"] }>(
  ({ status }) => ({
    height: KEY_HEIGHT,
    width: KEY_HEIGHT,
    backgroundColor: getStatusColor(status),
    alignItems: "center",
  })
);

const getStatusColor = (status: LetterBoxProps["status"]) => {
  switch (status) {
    case "success":
      return "green";
    case "failure":
      return "red";
    case "missed":
      return "yellow";
  }
};
