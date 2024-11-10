import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../utils/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Timer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.primary,
  },
  textStyle: {
    color: Theme.white,
    fontSize: 40,
    textAlign: 'center',
  },
});

export default Header;
