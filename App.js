import { useDeviceOrientation } from '@react-native-community/hooks';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

export default function App() {
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style = {{
        backgroundColor: "dodgerblue",
        width: "100%",
        height: orientation == "landscape" ? "100%" : "30%",
      }}></View>
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
