import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Header from './header';

const Stack = createNativeStackNavigator();

const NavigationRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
export default NavigationRoutes;
