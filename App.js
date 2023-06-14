import { useDeviceOrientation } from '@react-native-community/hooks';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100, 
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100, 
        height: 100,
        top: 20,
        left: 20,
        position: "relative",
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100, 
        height: 100,
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
