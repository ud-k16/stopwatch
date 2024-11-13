import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Theme} from '../../utils/theme';
import {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TimerComponent = ({visible, hideModal, start, defaultValue = 20}) => {
  const [value, setValue] = useState(defaultValue?.toString());

  return (
    <Modal visible={visible} transparent={true} onRequestClose={hideModal}>
      <View style={styles.container}>
        <AntDesign
          name="closecircleo"
          size={35}
          color={Theme.white}
          style={{left: '40%'}}
          onPress={hideModal}
        />
        <View style={styles.userInputContainer}>
          <TextInput
            value={value}
            autoFocus={true}
            keyboardType="number-pad"
            style={styles.userInputStyle}
            onChangeText={text => {
              setValue(text);
            }}
          />
          <Text style={styles.unitStyle}>seconds</Text>
        </View>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            hideModal();
            start(Number(value));
            // resetting value for next timer
            setValue(defaultValue?.toString());
          }}>
          <Text style={styles.buttonTextStyle}>START</Text>
        </Pressable>
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
    rowGap: 30,
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
  buttonStyle: {
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '50%',
    height: '7%',
    alignSelf: 'center',
    marginTop: 50,
    borderColor: Theme.white,
  },
  buttonTextStyle: {
    color: Theme.white,
  },
});
export default TimerComponent;
