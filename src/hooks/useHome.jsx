import {useState} from 'react';
import TimerCard from '../component/TimerCard';

const useHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clock, setClock] = useState([]);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const startClock = () => {
    setClock(prev => {
      const clockNumer = prev.length;
      const newClock = (
        <TimerCard
          clockNumber={clockNumer}
          deleteClock={deleteClock}
          key={clockNumer}
        />
      );
      return [...prev, newClock];
    });
  };

  const deleteClock = clockIndex => {
    console.log('deleting index', clockIndex);

    setClock(prev => {
      delete prev[clockIndex];

      return [...prev];
    });
  };

  return {
    clock,
    modalVisible,
    startClock,
    showModal,
    deleteClock,
    hideModal,
  };
};
export default useHome;
