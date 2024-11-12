import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useClock from '../../hooks/useClock';

const TimerCard = ({clockNumber, deleteClock}) => {
  const {pauseTimer, resetTimer, timer: value, timerRunningId} = useClock();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
      {!!timerRunningId ? (
        <AntDesign
          name="pausecircleo"
          size={44}
          color={Theme.accent}
          onPress={() => {
            pauseTimer();
          }}
        />
      ) : (
        <AntDesign
          name="playcircleo"
          size={44}
          color={Theme.accent}
          onPress={() => {
            pauseTimer();
          }}
        />
      )}
      <Text
        style={styles.resetTextStyle}
        onPress={() => {
          resetTimer();
        }}>
        Reset
      </Text>
      <AntDesign
        name="delete"
        size={44}
        color={Theme.accent}
        onPress={() => {
          deleteClock(clockNumber);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Theme.white,
    borderColor: Theme.primary,
    height: 70,
  },
  textStyle: {
    color: Theme.accent,
    fontSize: 40,
  },
  resetTextStyle: {
    color: Theme.white,
    fontSize: 20,
    backgroundColor: Theme.accent,
    borderRadius: 10,
    height: 40,
    width: 100,
    paddingVertical: 5,
    textAlign: 'center',
  },
});
export default TimerCard;
