import { Button } from "@react-navigation/elements";

import { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/styles/main";

export default function HomeScreen() {
  const [greeting, setGreeting] = useState("Welcome");
  const [inputValue, setInputValue] = useState("");

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
        <View style={styles.box}>
          <Text style={styles.text}>{inputValue}</Text>
        </View>

        <View>
          <Text>Email</Text>
          <TextInput
            value={inputValue}
            onChangeText={(val) => {
              setInputValue(val);
            }}
            autoCapitalize="characters"
            placeholder="Type here..."
            style={styles.input}
          />
        </View>
      
      <View>
          <Text>Password</Text>
          <TextInput
            value={inputValue}
            onChangeText={(val) => {
              setInputValue(val);
            }}
            autoCapitalize="characters"
            placeholder="Type here..."
            style={styles.input}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


