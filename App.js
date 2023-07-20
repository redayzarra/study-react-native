import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUris, setimageUris] = useState([]);

  const handleAdd = (uri) => {
    setimageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setimageUris(imageUris.filter((imageUri) => imageUri != uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}
