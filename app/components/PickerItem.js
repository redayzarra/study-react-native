import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { StyleSheet } from "react-native";
import { useState } from "react";

function PickerItem({ item, onPress }) {
  const [category, setCategory] = useState();

  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
