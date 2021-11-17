import {useRef, useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

export const useCountdown = ({duration, running, onComplete}) => {
  const durationMs = useRef(duration * 1000).current;
  const time = useRef(0);
  const timeAnimation = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(duration);

  useEffect(() => {
    timeAnimation.addListener(({value}) => {
      time.current = value;
      setCount(Math.ceil((durationMs - value) / 1000));
    });

    const startCountdown = () => {
      Animated.timing(timeAnimation, {
        toValue: durationMs,
        easing: Easing.linear,
        duration: durationMs - time.current,
        useNativeDriver: false
      }).start(({finished}) => {
        if (finished && time.current === durationMs) {
          time.current = 0;
          timeAnimation.resetAnimation();
          setCount(duration);
          onComplete();
        }
      });
    }

    if (running) {
      startCountdown();
    } else {
      timeAnimation.stopAnimation();
    }

    return () => {
      timeAnimation.stopAnimation();
      timeAnimation.removeAllListeners();
    };
  }, [duration, running]);

  return {
    count
  };
};
