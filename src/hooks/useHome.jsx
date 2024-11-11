import {useEffect, useState} from 'react';
import useTimer from './useTimer';

const useHome = () => {
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

  const startTimer = index => {
    hideModal();
    countDownTimer(index);
  };

  const pause = index => {
    pauseTimer(index);
  };

  const deleteClock = index => {
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

    timer,

    hideModal,
    resetTimer,
    timerRunningId,
  };
};
export default useHome;
