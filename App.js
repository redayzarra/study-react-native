import { Button, SafeAreaView, StyleSheet, Alert } from 'react-native';

export default function App() {
  let x = 1;
  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title='Click me' 
        onPress={() => 
          Alert.prompt("My alert", "My message", text => console.log(text))
        }
      />
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
