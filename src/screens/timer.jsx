import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Theme} from '../utils/theme';

const Timer = ({setTime, index = 0, start, timer}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInputContainer}>
        <TextInput
          value={timer[index].toString()}
          autoFocus={true}
          keyboardType="number-pad"
          style={styles.userInputStyle}
          onChangeText={text => {
            setTime({timerIndex: index, time: Number(text.replace(/,/g, ''))});
          }}
        />
        <Text style={styles.unitStyle}>seconds</Text>
      </View>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          start(index);
        }}>
        <Text style={styles.unitStyle}>START</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.secondary,
    height: '100%',
    padding: 20,
  },
  userInputContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.white,
    borderRadius: '50%',
    height: '40%',
    width: '100%',
    borderWidth: 3,
    borderColor: Theme.accent,
  },
  buttonStyle: {
    backgroundColor: Theme.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: '70%',
    height: '10%',
    alignSelf: 'center',
    marginTop: 50,
    borderWidth: 3,
    borderColor: Theme.accent,
  },
});

export default Timer;
