import styled from "@emotion/native";

const KEY_HEIGHT = 55;

export const Container = styled.View({
  padding: 8,
});

export const Row = styled.View({
  flexDirection: "row",
});

export const Letter = styled.View({
  borderRadius: 4,
  backgroundColor: "#C0C0C0",
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const letterStyle = (key: string) => {
  return {
    width: `${getKeyWidthFactor(key) * 10}%`,
    height: KEY_HEIGHT,
    padding: 4,
  };
};

export const KeyButton = styled.View<{ key: string }>(({ key }) =>
  letterStyle(key)
);

const getKeyWidthFactor = (key: string): number => {
  switch (key) {
    case "enter":
      return 2;
    case "del":
      return 2;
    default:
      return 1;
  }
};
