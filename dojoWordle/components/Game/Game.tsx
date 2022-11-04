import React, { useState } from "react";

import { View } from "react-native";
import { Keyboard } from "../Keyboard/Keyboard";
import {
  ResultContainer,
  displayCheckedWord,
  displayTypingWord,
  SpacerVertical,
  CheckedWord,
} from "./Game.style";

export const wordToFind = ["b", "o", "n", "j", "o", "u", "r"];

export function Game() {
  const [suggestedWord, setSuggestedWord] = useState("");
  const [wordsChecked, setWordsChecked] = useState<string[]>();

  const onKeyPress = (key: string) => {
    suggestedWord.length === wordToFind.length
      ? null
      : setSuggestedWord((oldWord) => oldWord + key);
  };

  const onDeleteKey = () => {
    setSuggestedWord((oldWord) => oldWord.slice(0, -1));
  };

  const onEnterKey = () => {
    if (suggestedWord.length !== wordToFind.length) return;
    if (!wordsChecked) {
      setWordsChecked([suggestedWord]);
      setSuggestedWord("");
      return;
    }
    setWordsChecked((words) => words.concat(suggestedWord));
    console.log(wordsChecked);

    setSuggestedWord("");
  };

  return (
    <View>
      {Boolean(wordsChecked) && <CheckedWord wordsChecked={wordsChecked} />}
      <ResultContainer>{displayTypingWord(suggestedWord)}</ResultContainer>
      <Keyboard
        onKeyPress={onKeyPress}
        onDelPress={onDeleteKey}
        onEnterPress={onEnterKey}
      />
    </View>
  );
}
