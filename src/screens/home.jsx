import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useHome from '../hooks/useHome';
import TimerComponent from '../component/TimerComponent';

const Home = () => {
  const {
    modalVisible,
    clock,
    totalClock,
    startClock,
    deleteClock,
    hideModal,
    showModal,
  } = useHome();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.addTimerContainer}
        onPress={showModal}
        disabled={totalClock == 5}>
        <AntDesign
          name="pluscircleo"
          size={44}
          color={totalClock == 5 ? Theme.grey : Theme.primary}
        />
      </Pressable>
      {clock.length > 0 && (
        <ScrollView
          contentContainerStyle={styles.scrollViewContentContainer}
          style={styles.scrollViewContainer}>
          {clock.map((clock, index) => {
            if (!!clock)
              return (
                <View key={index} style={styles.cardContainer}>
                  {clock}
                  <AntDesign
                    name="delete"
                    size={44}
                    color={Theme.accent}
                    onPress={() => {
                      deleteClock(index);
                    }}
                  />
                </View>
              );
          })}
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
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default Home;
