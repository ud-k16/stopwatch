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
      setTimer(prev => prev - 1);
    }, 1000);

    // setting timerRunningId to state for processing
    setTimerRunningId(id);
  };

  const toggleTimer = () => {
    // if timerRunningId exist , that means timer is running hence stop it
    if (timerRunningId) {
      stopTimer();
    }
    // restart timer with already remaining time
    else {
      timer != 0 && countDownTimer();
    }
  };

  const timerElapsed = () => {
    console.log(`timer  elapsed`);
    alert(`Timer Set for ${userDefinedTime} has elapsed`);
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
    // when new timer added , user defined time is set and timer is started
    setTime(userDefinedTime);
    toggleTimer();
    return () => {
      // on unmount setInterval is cleared
      timerRunningId && clearInterval(timerRunningId);
    };
  }, []);

  useEffect(() => {
    if (timer == 0) timerElapsed();
  }, [timer]);

  return {
    defaultTime,
    timer,
    timerRunningId,
    setTime,
    setTimer,
    toggleTimer,
    resetTimer,
    countDownTimer,
  };
};
export default useClock;
