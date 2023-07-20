import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to grant camera roll permissions!");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image!");
    }
  };

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={uri = setImageUri(uri)}/>
    </Screen>
  );
}
