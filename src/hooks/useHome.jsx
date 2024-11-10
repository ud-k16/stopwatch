import {useState} from 'react';
import useTimer from './useTimer';

const useHome = () => {
  const [numberOfTimer, setNumberOfTimer] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const {
    setTime,
    deleteTimer,
    timer,
    countDownTimer,
    defaultTime,
    pauseTimer,
    resetTimer,
    timerRunningId,
  } = useTimer();

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

  const deleteClock = index => {
    setNumberOfTimer(prev => prev - 1);
    deleteTimer(index);
  };

  return {
    defaultTime,
    modalVisible,
    setTime,
    startTimer,
    pause,
    showModal,
    deleteClock,
    setNumberOfTimer,
    timer,
    numberOfTimer,
    hideModal,
    resetTimer,
    timerRunningId,
  };
};
export default useHome;
