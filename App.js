import { TextInput } from "react-native";
import Screen from "./app/components/Screen";
import { useState } from "react";
import { Text } from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        maxLength={5}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  );
}
