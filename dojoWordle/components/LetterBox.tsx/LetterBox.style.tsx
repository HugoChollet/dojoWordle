import styled from "@emotion/native";
import { LetterBoxProps } from "./LetterBox";

const KEY_SIZE = 55;

export const Box = styled.View<{ status: LetterBoxProps["status"] }>(
  ({ status }) => ({
    height: KEY_SIZE,
    width: KEY_SIZE,
    backgroundColor: getStatusColor(status),
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 3,
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
