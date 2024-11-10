import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../utils/theme';

const TimerCard = ({value, index}) => {
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 6,
    backgroundColor: Theme.accent,
    height: 40,
  },
});
export default TimerCard;
