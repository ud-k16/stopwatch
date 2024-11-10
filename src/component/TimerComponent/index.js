import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Theme} from '../../utils/theme';

const TimerComponent = ({setTime, index, timer = [], visible, hideModal}) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={hideModal}>
      <View style={styles.container}>
        <View style={styles.userInputContainer}>
          <TextInput
            value={timer[index]?.toString()}
            autoFocus={true}
            keyboardType="number-pad"
            style={styles.userInputStyle}
            onChangeText={text => {
              setTime({
                timerIndex: index,
                time: Number(text.replace(/,/g, '')),
              });
            }}
          />
          <Text style={styles.unitStyle}>seconds</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.backdrop,
  },
  userInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.white,
    height: '40%',
    width: '80%',
    borderRadius: 15,
    // borderWidth: 3,
    // borderColor: Theme.accent,
  },
  userInputStyle: {
    fontSize: 40,
    textAlign: 'center',
    color: Theme.accent,
    width: '70%',
  },
  unitStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: Theme.accent,
    width: '30%',
  },
});
export default TimerComponent;
