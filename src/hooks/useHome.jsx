import {useEffect, useState} from 'react';
import TimerCard from '../component/TimerCard';

const useHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalClock, setTotalClock] = useState(0);
  const [clock, setClock] = useState([]);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const startClock = () => {
    setClock(prev => {
      const clockNumer = prev.length;
      const newClock = <TimerCard key={clockNumer} />;
      return [...prev, newClock];
    });
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
    setTotalClock(
      clock.reduce((total, arrayValue) => {
        return arrayValue && total + 1;
      }, 0),
    );
  }, [clock]);

  return {
    clock,
    totalClock,
    modalVisible,
    startClock,
    showModal,
    deleteClock,
    hideModal,
  };
};
export default useHome;
