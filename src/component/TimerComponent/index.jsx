import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Theme} from '../../utils/theme';
import {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moderateScale from '../../utils/scale';

const TimerComponent = ({
  visible,
  hideModal,
  start,
  defaultValue = 20,
  placeHolderTextDefaultValue = 'Timer Label',
}) => {
  const [value, setValue] = useState(defaultValue?.toString());
  const [placeHolderText, setPlaceHolderText] = useState(
    placeHolderTextDefaultValue,
  );
  const [clockLabel, setClockLabel] = useState('');

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
            value={clockLabel}
            placeholder={placeHolderText}
            placeholderTextColor={Theme.grey}
            onFocus={() => {
              setPlaceHolderText('');
            }}
            onBlur={() => {
              !clockLabel && setPlaceHolderText(placeHolderTextDefaultValue);
            }}
            style={styles.labelTextStyle}
            onChangeText={text => {
              setClockLabel(text);
            }}
          />
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
            start({
              userDefinedTime: Number(value.replace(/[\s\.]/g, '')),
              label: clockLabel,
            });
            // resetting value for next timer
            setValue(defaultValue?.toString());
            setPlaceHolderText(placeHolderTextDefaultValue);
            setClockLabel('');
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
    rowGap: moderateScale(30),
  },
  userInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.white,
    height: '40%',
    width: '80%',
    borderRadius: moderateScale(15),
    // borderWidth: 3,
    // borderColor: Theme.accent,
  },
  userInputStyle: {
    fontSize: moderateScale(40),
    textAlign: 'center',
    color: Theme.accent,
    width: '70%',
  },
  unitStyle: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: Theme.accent,
    width: '30%',
  },
  labelTextStyle: {
    color: Theme.accent,
    fontSize: moderateScale(15),
    textAlign: 'center',
    width: '70%',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    borderColor: Theme.grey,
    backgroundColor: Theme.white,
    elevation: 6,
    shadowColor: Theme.grey,
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(10),
  },
  buttonStyle: {
    backgroundColor: Theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(50),
    width: '50%',
    height: '7%',
    alignSelf: 'center',
    marginTop: moderateScale(50),
    borderColor: Theme.white,
  },
  buttonTextStyle: {
    color: Theme.white,
  },
});
export default TimerComponent;
