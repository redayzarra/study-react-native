import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import routes from "../navigation/routes";
import Button from "../components/Button";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={20}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Don't let your stuff go to waste.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => navigation.navigate(routes.LOGIN)}
          title="Login"
          color="primary"
        />
        <Button
          onPress={() => navigation.navigate(routes.REGISTER)}
          title="Register"
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
