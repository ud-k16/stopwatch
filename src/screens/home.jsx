import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useHome from '../hooks/useHome';
import TimerComponent from '../component/TimerComponent';
import TimerCard from '../component/TimerCard';

const Home = () => {
  const {modalVisible, clock, startClock, hideModal, deleteClock, showModal} =
    useHome();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.addTimerContainer}
        onPress={showModal}
        disabled={clock.length == 5}>
        <AntDesign
          name="pluscircleo"
          size={44}
          color={clock.length == 5 ? Theme.grey : Theme.primary}
        />
      </Pressable>
      {clock.length > 0 && (
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainer}
          style={styles.scrollViewContainer}>
          {clock.map(clock => clock)}
        </ScrollView>
      )}
      <TimerComponent
        visible={modalVisible}
        hideModal={hideModal}
        start={startClock}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: Theme.white,
    rowGap: 25,
  },
  addTimerContainer: {
    alignSelf: 'flex-end',
  },
  scrollViewContentContainer: {
    rowGap: 30,
  },
  scrollViewContainer: {
    marginBottom: 40,
  },
});
export default Home;
