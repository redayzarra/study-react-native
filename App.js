import { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(False);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
