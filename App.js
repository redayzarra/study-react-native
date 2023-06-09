import { StyleSheet, Text, Image, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        My React Native Project
      </Text>

      <Image 
      blurRadius={0}
      fadeDuration={1000}
      source={{ 
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300" 
      }}/>
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
