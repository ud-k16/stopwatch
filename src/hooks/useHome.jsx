import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import useTimer from './useTimer';

const useHome = () => {
  const [numberOfTimer, setNumberOfTimer] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const {setTime, timer, countDownTimer, defaultTime, pauseTimer} = useTimer();
  const navigation = useNavigation();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const startTimer = () => {
    hideModal();
    countDownTimer(numberOfTimer);
    setNumberOfTimer(prev => prev + 1);
  };

  const pause = index => {
    pauseTimer(index);
  };

  return {
    modalVisible,
    setTime,
    startTimer,
    pause,
    showModal,
    timer,
    numberOfTimer,
    hideModal,
  };
};
export default useHome;
