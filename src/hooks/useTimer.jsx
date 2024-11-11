import {useEffect, useRef, useState} from 'react';

const useTimer = () => {
  // setting default timer to 20 seconds for 5 timers
  const defaultTime = useRef(20).current;
  const [timer, setTimer] = useState([]);
  const [timerRunningId, setTimerRunningId] = useState([]);

  const setTime = ({timerIndex, time}) => {
    console.log('Time setter called with ', timerIndex, time);

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

    // setting timerRunningId to state for processing
    setTimerRunningId(prev => {
      prev[timerIndex] = id;
      return [...prev];
    });
  };

  const pauseTimer = timerIndex => {
    // if timerRunningId exist , that means timer is running hence stop it
    if (timerRunningId[timerIndex]) {
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
    clearInterval(timerRunningId[timerIndex]);
    // clearing timerRunningId
    setTimerRunningId(prev => {
      prev[timerIndex] = null;
      return [...prev];
    });
  };

  const resetTimer = timerIndex => {
    stopTimer(timerIndex);
    setTime({
      timerIndex,
      time: defaultTime,
    });
  };

  const deleteTimer = timerIndex => {
    console.log(timerIndex);

    // stopping timer
    clearInterval(timerRunningId[timerIndex]);
    setTimer(prev => {
      return prev.filter((_, index) => index != timerIndex);
    });
    setTimerRunningId(prev => {
      return prev.filter((_, index) => index != timerIndex);
    });
  };
  useEffect(() => {
    console.log(timer, ':Timer\t\t', timerRunningId, ':timerRunningId');
  }, [timer]);

  return {
    defaultTime,

    timer,
    timerRunningId,
    setTime,
    setTimer,
    pauseTimer,
    resetTimer,
    deleteTimer,
    countDownTimer,
  };
};
export default useTimer;
