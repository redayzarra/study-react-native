import { Button, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  let x = 1;
  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title='Click me' 
        onPress={() => console.log("Button clicked!")} />
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
