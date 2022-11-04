import styled from "@emotion/native";
import { LetterBox, letterStatus } from "../LetterBox.tsx/LetterBox";

export const wordToFind = ["b", "o", "n", "j", "o", "u", "r"];

export const SpacerVertical = styled.View({
  height: 50,
});

export const SpacerHonrizontal = styled.View({
  width: 50,
});

export const ResultContainer = styled.View({
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
});

export const displayCheckedWord = (wordGuessed: string) => {
  var wordWithStatus = [];
  var i: number;

  {
    for (i = 0; i < wordToFind.length; i++) {
      var status: letterStatus;
      status = "failure";

      if (wordToFind[i] === wordGuessed[i]) {
        status = "success";
      } else if (wordToFind.find((character) => character === wordGuessed[i])) {
        status = "missed";
      }
      wordWithStatus[i] = <LetterBox status={status} letter={wordGuessed[i]} />;
    }
  }
  return wordWithStatus;
};

export const displayTypingWord = (wordTyped: string) => {
  var wordBox = [];
  var i: number;

  for (i = 0; i < wordToFind.length; i++) {
    wordBox[i] = <LetterBox status={"pending"} letter={wordTyped[i]} />;
  }
  return wordBox;
};
