import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, KeyButton, Letter, Row } from "./Keyboard.style";

const lines = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["enter", "w", "x", "c", "v", "b", "n", "del"],
];

interface Props {
  onKeyPress?: (key: string) => void;
  onEnterPress?: () => void;
  onDelPress?: () => void;
}

export const Keyboard = ({ onKeyPress, onEnterPress, onDelPress }: Props) => {
  const pressKey = (key: string) => {
    switch (key) {
      case "enter":
        onEnterPress?.();
        return;
      case "del":
        onDelPress?.();
        return;
      default:
        onKeyPress?.(key);
    }
  };

  return (
    <SafeAreaView edges={["bottom"]}>
      <Container>
        {lines.map((line) => (
          <Row key={line.join("")}>
            {line.map((key) => (
              <KeyButton key={key}>
                <TouchableOpacity
                  onPress={() => pressKey(key)}
                  activeOpacity={0.7}
                >
                  <Letter>
                    <Text>{key.toLocaleUpperCase()}</Text>
                  </Letter>
                </TouchableOpacity>
              </KeyButton>
            ))}
          </Row>
        ))}
      </Container>
    </SafeAreaView>
  );
};
