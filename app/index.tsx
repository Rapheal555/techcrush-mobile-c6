// import { Link } from "@react-navigation/native";
import { MyContext } from "@/context/AuthContext";
import useStore from "@/store/useStore";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useContext } from "react";

// import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  const navigator = useRouter();

  // const { user, setUser } = useContext(MyContext);
  const user = useStore((state:any) => state.user)
  const setUser = useStore((state:any) => state.setUser)

  const handleLogin = () => {
    if (user.name === "game") {
      alert("Welcome, game!");
    } else {
      navigator.push("/profile");
    }
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff", flex: 1, padding: 16 }}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            value={user.name}
            onChangeText={(value) => setUser({ ...user, name: value })}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            value={user.email}
            onChangeText={(value) => setUser({ ...user, email: value })}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Age:</Text>
          <TextInput
            value={user.age.toLocaleString()}
            onChangeText={(value) => setUser({ ...user, age: Number(value) })}
            style={styles.input}
          />
        </View>

        <Button onPressIn={handleLogin}>Go to profile</Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 4 },
  inputContainer: { marginBottom: 16 },
});
