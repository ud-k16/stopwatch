import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useHome from '../hooks/useHome';
import TimerComponent from '../component/TimerComponent';
import TimerCard from '../component/TimerCard';

const Home = () => {
  const {
    modalVisible,
    timer,
    numberOfTimer,
    setTime,
    hideModal,
    startTimer,
    pause,
    showModal,
    resetTimer,
  } = useHome();

  return (
    <View style={styles.container}>
      <Pressable style={styles.addTimerContainer} onPress={showModal}>
        <AntDesign name="pluscircleo" size={44} color={Theme.primary} />
      </Pressable>
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        style={styles.scrollViewContainer}>
        {timer.map((value, index) => (
          <TimerCard
            key={index}
            value={value}
            index={index}
            pauseTimer={pause}
            resetTimer={resetTimer}
          />
        ))}
      </ScrollView>
      <TimerComponent
        visible={modalVisible}
        setTime={setTime}
        timer={timer}
        index={numberOfTimer}
        hideModal={hideModal}
        start={startTimer}
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
