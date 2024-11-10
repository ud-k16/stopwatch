import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';

const Home = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.addTimerContainer}>
        <Text style={styles.addText}>Add</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: Theme.primary,
  },
  addTimerContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Theme.white,
    borderRadius: 40,
    width: 50,
  },
  addText: {
    textAlign: 'center',
    color: Theme.accent,
  },
});
export default Home;
