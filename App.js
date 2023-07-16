import { useEffect } from "react";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

export default function App() {
  const requestPermission = async () => {
    const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY, Permissions.LOCATION_BACKGROUND)
    result.granted

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to grant camera roll permissions!");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return <Screen></Screen>;
}
