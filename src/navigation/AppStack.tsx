import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';

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
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
