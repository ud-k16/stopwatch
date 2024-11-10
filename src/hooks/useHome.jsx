import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import useTimer from './useTimer';

const useHome = () => {
  const [numberOfTimer, setNumberOfTimer] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const {setTime, timer} = useTimer();
  const navigation = useNavigation();

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const handlePress = () => {
    setNumberOfTimer(prev => prev + 1);
    showModal();
  };

  return {modalVisible, handlePress, setTime, timer, numberOfTimer, hideModal};
};
export default useHome;
