import {useEffect, useRef, useState} from 'react';

const useClock = ({userDefinedTime}) => {
  // setting default timer to 20 seconds for 5 timers
  const defaultTime = useRef(20).current;
  const [timer, setTimer] = useState(20);
  const [timerRunningId, setTimerRunningId] = useState(null);

  const setTime = time => {
    // intializing timer with user given time
    setTimer(time);
  };

  const countDownTimer = () => {
    const id = setInterval(() => {
      setTimer(prev => {
        prev == 0 ? timerElapsed() : (prev = prev - 1);
        return prev;
      });
    }, 1000);

    // setting timerRunningId to state for processing
    setTimerRunningId(id);
  };

  const pauseTimer = () => {
    // if timerRunningId exist , that means timer is running hence stop it
    if (timerRunningId) {
      stopTimer();
    }
    // restart timer with already remaining time
    else {
      countDownTimer();
    }
  };

  const timerElapsed = () => {
    console.log(`timer  elapsed`);
    stopTimer();
  };

  const stopTimer = () => {
    // stopping timer
    clearInterval(timerRunningId);
    // clearing timerRunningId
    setTimerRunningId(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(defaultTime);
  };

  useEffect(() => {
    setTime(userDefinedTime);
    return () => {
      timerRunningId && clearInterval(timerRunningId);
    };
  }, []);

  return {
    defaultTime,
    timer,
    timerRunningId,
    setTime,
    setTimer,
    pauseTimer,
    resetTimer,
    countDownTimer,
  };
};
export default useClock;
