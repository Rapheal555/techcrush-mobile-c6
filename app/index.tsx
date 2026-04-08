// import { Link } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";

// import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  const navigator = useNavigation();
  return (
    <ScrollView>
      <View>
        <Text>Hello, World!</Text>
        <Link href={"/profile"}>Go to Profile</Link>
      </View>
    </ScrollView>
  );
}
