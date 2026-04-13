import { MyContext } from "@/context/AuthContext";
import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Profile() {
    const { user } = useContext(MyContext);

    return(
        <ScrollView>
            <View>
                <Text>Welcome to the tabs profile page</Text>
                <Text>
                    {user.email}
                </Text>
            </View>
        </ScrollView>
    )
}