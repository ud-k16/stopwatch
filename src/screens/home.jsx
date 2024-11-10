import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addTimerContainer}>
        <AntDesign name="pluscircleo" size={44} color={Theme.primary} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: Theme.white,
  },
  addTimerContainer: {
    alignSelf: 'flex-end',
  },
});
export default Home;
