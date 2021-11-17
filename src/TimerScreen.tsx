import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useCountdown} from './hooks/useCountdown';

const TimerScreen = () => {
  const [btnTitle, setBtnTitle] = useState('Start');
  const [running, setRunning] = useState(false);
  const {count} = useCountdown({duration: 10, running, onComplete});

  const onButtonPress = () => {
    setRunning(!running);
    setBtnTitle(running ? 'Resume' : 'Pause');
  }

  function onComplete() {
    setRunning(false);
    setBtnTitle('Start');
  }

  return (
    <View style={{flex: 1, backgroundColor: '#ff4081'}}>
      <Text>Page 1</Text>
      <Button title={btnTitle} onPress={onButtonPress} />
      <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>{count}</Text>
      </View>
    </View>
  );
};

export default TimerScreen;
