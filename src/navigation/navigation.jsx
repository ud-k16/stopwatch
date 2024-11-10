import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Timer from '../screens/timer';
import Header from './header';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default NavigationRoutes;
