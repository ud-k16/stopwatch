import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Timer from '../screens/timer';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
};
export default NavigationRoutes;
