import { Button } from "@react-navigation/elements";

import { useState } from "react";
import { Image, ScrollView, Text, View,  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {styles} from "@/styles/main";

export default function HomeScreen() {
  const [greeting, setGreeting] = useState("Welcome");

  const updateGreeting = () => {
    if (greeting === "Welcome") {
      setGreeting("Goodbye");
    } else {
      setGreeting("Welcome");
    }
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          height={300}
          width={230}
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YMXWzod5ZemmePlmmTyNnSgGkjgg-It3Rw&s"
          }
        />
        <Image
          source={require("@/assets/images/icon.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <View style={styles.box}>
          <Text style={styles.text}>{greeting} Techcrush 1</Text>
        </View>

        <Button onPressIn={updateGreeting}>Click me</Button>
      </ScrollView>
    </SafeAreaView>
  );
}



