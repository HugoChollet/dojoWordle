import styled from "@emotion/native";
import { LetterBox, letterStatus } from "../LetterBox.tsx/LetterBox";
import { wordToFind } from "./Game";

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
  let wordWithStatus = [];
  let i = 0;

  wordWithStatus = wordToFind.map((letter) => {
    var status: letterStatus;
    status = "failure";

    if (letter === wordGuessed[i]) {
      status = "success";
    } else if (wordToFind.find((character) => character === wordGuessed[i])) {
      status = "missed";
    }
    return (
      <LetterBox
        status={status}
        letter={wordGuessed[i++]}
        key={"checking" + i}
      />
    );
  });

  return wordWithStatus;
};

export const displayTypingWord = (wordTyped: string) => {
  let wordBox = [];
  let i = 0;

  wordBox = wordToFind.map(() => {
    i++;
    return (
      <LetterBox
        status={"pending"}
        letter={wordTyped[i - 1]}
        key={"typing" + i}
      />
    );
  });
  return wordBox;
};

export const CheckedWord = ({ wordsChecked }: string[]) => {
  return (
    <ResultContainer>{displayCheckedWord(wordsChecked[0])}</ResultContainer>
  );
};
