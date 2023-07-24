import { Text } from "react-native";
import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)

export default function App() {
  return <ListingEditScreen />;
}
