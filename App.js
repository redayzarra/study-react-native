import { useEffect } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to grant camera roll permissions!");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
