import {useEffect, useState} from 'react';
import TimerCard from '../component/TimerCard';

const useHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalClock, setTotalClock] = useState(0);
  const [clock, setClock] = useState([]);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const startClock = ({userDefinedTime, label}) => {
    const count = clock.length;

    if (count < 5) {
      const newClock = (
        <TimerCard
          key={count - 1}
          userDefinedTime={userDefinedTime}
          label={label}
        />
      );
      setClock([...clock, newClock]);
    } else {
      const index = clock.findIndex(value => value == undefined);

      if (index != -1) {
        const newClock = (
          <TimerCard
            key={index}
            userDefinedTime={userDefinedTime}
            label={label}
          />
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
    const count = clock.reduce((total, arrayValue) => {
      return arrayValue && total + 1;
    }, 0);
    // total clock count is set to decide if to enable add button or not
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
