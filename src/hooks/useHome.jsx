import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import useTimer from './useTimer';

const useHome = () => {
  const [numberOfTimer, setNumberOfTimer] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const {setTime, timer, countDownTimer} = useTimer();
  const navigation = useNavigation();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const handlePress = () => {
    setNumberOfTimer(prev => prev + 1);
    showModal();
  };
  const startTimer = index => {
    hideModal();
    countDownTimer(index);
  };
  return {
    modalVisible,
    handlePress,
    setTime,
    startTimer,
    timer,
    numberOfTimer,
    hideModal,
  };
};
export default useHome;
