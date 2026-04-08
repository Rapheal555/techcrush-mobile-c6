// import { Link } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { Link, useRouter } from "expo-router";

// import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Home() {
  const navigator = useRouter();

  return (
    <ScrollView>
      <View>
        <Text>Hello, World!</Text>
        <Link href={"/profile"}>Go to Profile</Link>
        <Button onPressIn={() => {navigator.push("/profile");} }>
          Go to profile
        </Button>
      </View>
    </ScrollView>
  );
}
