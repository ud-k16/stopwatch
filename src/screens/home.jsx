import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useHome from '../hooks/useHome';
import TimerComponent from '../component/TimerComponent';

const Home = () => {
  const {modalVisible, timer, handlePress, setTime, hideModal, numberOfTimer} =
    useHome();

  return (
    <View style={styles.container}>
      <Pressable style={styles.addTimerContainer} onPress={handlePress}>
        <AntDesign name="pluscircleo" size={44} color={Theme.primary} />
      </Pressable>
      <TimerComponent
        visible={modalVisible}
        setTime={setTime}
        timer={timer}
        index={numberOfTimer}
        hideModal={hideModal}
      />
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
