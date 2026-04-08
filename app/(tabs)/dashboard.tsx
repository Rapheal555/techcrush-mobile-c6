import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Dashboard() {
  const navigator = useRouter();
  return (
    <ScrollView>
      <View>
        <Text>Welcome to the tabs main page</Text>
        <Button
          onPressIn={() => {
            navigator.push("/");
          }}
        >
          Go to Home page
        </Button>
      </View>
    </ScrollView>
  );
}
