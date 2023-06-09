import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo justo, sodales at sem sit amet, euismod vestibulum justo. Pellentesque interdum at ipsum et placerat.
      </Text>

      <Image source={require("./assets/splash.png")}/>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
