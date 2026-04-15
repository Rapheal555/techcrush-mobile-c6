import { MyContext } from "@/context/AuthContext";
import useStore from "@/store/useStore";
import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Profile() {
    // const { user } = useContext(MyContext);
  const user = useStore((state: any) => state.user);


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