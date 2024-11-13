import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useClock from '../../hooks/useClock';
import moderateScale from '../../utils/scale';

const TimerCard = ({userDefinedTime, label}) => {
  const {
    toggleTimer,
    resetTimer,
    timer: value,
    timerRunningId,
  } = useClock({userDefinedTime, label});
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
      {!!timerRunningId ? (
        <AntDesign
          name="pausecircleo"
          size={44}
          color={Theme.accent}
          onPress={() => {
            toggleTimer();
          }}
        />
      ) : (
        <AntDesign
          name="playcircleo"
          size={44}
          color={value == 0 ? Theme.grey : Theme.accent}
          disabled={value == 0}
          onPress={() => {
            toggleTimer();
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 6,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    backgroundColor: Theme.white,
    borderColor: Theme.primary,
    height: moderateScale(70),
    width: '85%',
  },
  textStyle: {
    color: Theme.accent,
    fontSize: moderateScale(40),
  },
  resetTextStyle: {
    color: Theme.white,
    fontSize: moderateScale(20),
    backgroundColor: Theme.accent,
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    width: moderateScale(100),
    paddingVertical: moderateScale(5),
    textAlign: 'center',
  },
});
export default TimerCard;
