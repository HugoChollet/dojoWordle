import React, { useState } from "react";

import { View } from "react-native";
import { Keyboard } from "../Keyboard/Keyboard";
import {
  ResultContainer,
  displayCheckedWord,
  displayTypingWord,
  SpacerVertical,
  wordToFind,
} from "./Game.style";

export function Game() {
  const [wordInput, setWordInput] = useState("");
  const [wordValid, setWordValid] = useState("");

  const keyPress = (key: string) => {
    if (wordInput.length === wordToFind.length) return;
    setWordInput((oldWord) => oldWord + key);
  };

  const deleteKey = () => {
    setWordInput((oldWord) => oldWord.slice(0, -1));
  };

  const enterKey = () => {
    if (wordInput.length !== wordToFind.length) return;
    setWordValid(wordInput);
    setWordInput("");
  };

  return (
    <View>
      <ResultContainer>{displayCheckedWord(wordValid)}</ResultContainer>
      <ResultContainer>{displayTypingWord(wordInput)}</ResultContainer>
      <SpacerVertical />
      <Keyboard
        onKeyPress={keyPress}
        onDelPress={deleteKey}
        onEnterPress={enterKey}
      />
    </View>
  );
}
