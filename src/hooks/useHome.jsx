import {useEffect, useState} from 'react';
import TimerCard from '../component/TimerCard';

const useHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalClock, setTotalClock] = useState(0);
  const [clock, setClock] = useState([]);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const startClock = userDefinedTime => {
    console.log('startClock called--------------------------------');
    const count = clock.length;
    console.log('--------------------------------');
    const totalValidClock = clock.reduce((total, arrayValue) => {
      return arrayValue && total + 1;
    }, 0);

    console.log(count, 'array count in setClock');
    console.log(totalValidClock, 'total valid clock in setClock');
    console.log('--------------------------------');
    if (count < 5) {
      const newClock = (
        <TimerCard key={count - 1} userDefinedTime={userDefinedTime} />
      );
      setClock([...clock, newClock]);
    } else {
      const index = clock.findIndex(value => value == undefined);
      console.log('else part', index);
      if (index != -1) {
        const newClock = (
          <TimerCard key={index} userDefinedTime={userDefinedTime} />
        );
        clock.splice(index, 1, newClock);
        setClock([...clock]);
      }
    }
  };

  const deleteClock = clockIndex => {
    console.log('deleting index', clockIndex);
    setClock(prev => {
      delete prev[clockIndex];
      return prev.map(value => value);
    });
  };

  useEffect(() => {
    console.log(clock);

    const count = clock.reduce((total, arrayValue) => {
      return arrayValue && total + 1;
    }, 0);
    setTotalClock(count);
  }, [clock]);

  return {
    clock,
    totalClock: totalClock,
    modalVisible,
    startClock,
    showModal,
    deleteClock,
    hideModal,
  };
};
export default useHome;
