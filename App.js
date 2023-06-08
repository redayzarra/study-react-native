import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;
  console.log("Changes Saved!"); // Logging statements

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
