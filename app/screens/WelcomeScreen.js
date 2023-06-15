import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native-web";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/chair.jpg")}
      styles={styles.background}
    >
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
});

export default WelcomeScreen;
