import {NavigationContainer} from '@react-navigation/native';
import NavigationRoutes from './src/navigation/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationRoutes />
    </NavigationContainer>
  );
};

export default App;
