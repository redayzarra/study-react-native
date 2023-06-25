import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import styles from "./styles";

function AppText({ children }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
