import { Text } from "react-native";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
);

export default function App() {
  return Null;
}
