import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

function HomeScreen() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
  function AboutScreen() {
    return (
      <View>
        <Text>About Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator();

const AppStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
);
}

export default AppStack;