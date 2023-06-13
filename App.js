import { Button, SafeAreaView, StyleSheet, Alert, Platform, StatusBar } from 'react-native';

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
    backgroundColor: 'orange',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
