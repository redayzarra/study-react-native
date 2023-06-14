import { useDeviceOrientation } from '@react-native-community/hooks';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 2,
      }} />
      <View style={{
        backgroundColor: "gold",
        flex: 1,
      }} />
      <View style={{
        backgroundColor: "tomato",
        flex: 1,
      }} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
