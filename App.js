import { useState } from "react";
import { Switch } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput placeholder="Email" />
    </Screen>
  );
}
