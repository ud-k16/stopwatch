import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TimerCard = ({value, index, pauseTimer}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
      <AntDesign
        name="pausecircleo"
        size={44}
        color={Theme.accent}
        onPress={() => {
          pauseTimer(index);
        }}
      />
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
});
export default TimerCard;
