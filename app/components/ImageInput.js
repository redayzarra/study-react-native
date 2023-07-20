import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri }) {
  const handlePress = () => {
    if (!imageUri) selectImage();
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImageInput;
