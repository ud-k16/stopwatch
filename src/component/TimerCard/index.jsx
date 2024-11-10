import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TimerCard = ({
  value,
  index,
  pauseTimer,
  resetTimer,
  timerRunning = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
      {timerRunning ? (
        <AntDesign
          name="pausecircleo"
          size={44}
          color={Theme.accent}
          onPress={() => {
            pauseTimer(index);
          }}
        />
      ) : (
        <AntDesign
          name="playcircleo"
          size={44}
          color={Theme.accent}
          onPress={() => {
            pauseTimer(index);
          }}
        />
      )}
      <Text
        style={styles.resetTextStyle}
        onPress={() => {
          resetTimer(index);
        }}>
        Reset
      </Text>
      <AntDesign name="delete" size={44} color={Theme.accent} />
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
