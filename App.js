import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Courier",
          fontStyle: "italic",
          fontWeight: "bold",
          color: "tomato",
          textTransform: "capitalize",
          // textDecorationLine: "line-through",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love Ashley! This is my first React Native App
      </Text>
    </View>
  );
}
