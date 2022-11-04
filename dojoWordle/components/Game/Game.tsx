import React from "react";
import { View } from "react-native";
import { Keyboard } from "../Keyboard/Keyboard";
import { LetterBox } from "../LetterBox.tsx/LetterBox";
import { ResultContainer, SpacerVertical } from "./Game.style";

export function Game() {
  return (
    <View>
      <ResultContainer>
        <LetterBox status="success" />
        <LetterBox status="failure" />
        <LetterBox status="missed" />
      </ResultContainer>
      <SpacerVertical />
      <Keyboard />
    </View>
  );
}
