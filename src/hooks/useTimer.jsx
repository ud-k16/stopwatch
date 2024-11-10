import {useEffect, useState} from 'react';

const useTimer = () => {
  // setting default timer to 20 seconds for 5 timers
  const [timer, setTimer] = useState([20, 20, 20, 20, 20]);
  const [timerId, setTimerId] = useState([null, null, null, null, null]);

  const setTime = ({timerIndex, time}) => {
    // intializing timer with user given time
    setTimer(prev => {
      prev[timerIndex] = time;
      return [...prev];
    });
  };

  const countDownTimer = timerIndex => {
    const id = setInterval(() => {
      setTimer(prev => {
        prev[timerIndex] == 0
          ? timerElapsed(timerIndex)
          : (prev[timerIndex] = prev[timerIndex] - 1);
        return [...prev];
      });
    }, 1000);

    // setting timerId to state for processing
    setTimerId(prev => {
      prev[timerIndex] = id;
      return [...prev];
    });
  };

  const pauseTimer = timerIndex => {
    // if timerId exist , that means timer is running hence stop it
    if (timerId[timerIndex]) {
      stopTimer(timerIndex);
    }
    // restart timer with already remaining time
    else {
      setTime({
        timerIndex,
        time: timer[timerIndex],
      });
      countDownTimer(timerIndex);
    }
  };

  const timerElapsed = timerIndex => {
    console.log(`timer ${timerIndex} elapsed`);
    stopTimer(timerIndex);
  };

  const stopTimer = timerIndex => {
    // stopping timer
    clearInterval(timerId[timerIndex]);
    // clearing timerid
    setTimerId(prev => {
      prev[timerIndex] = null;
      return [...prev];
    });
  };

  const resetTimer = timerIndex => {
    stopTimer(timerIndex);
    setTime({
      timerIndex,
      time: 20,
    });
  };

  useEffect(() => {
    console.log(timer, ':Timer\t\t', timerId, ':TimerId');
  }, [timer]);

  return {
    timer,
    timerId,
    setTime,
    pauseTimer,
    resetTimer,
    countDownTimer,
  };
};
export default useTimer;
