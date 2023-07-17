import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ImageInput(props) {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
  image: {
    width: "10"
  }
});
export default ImageInput;
