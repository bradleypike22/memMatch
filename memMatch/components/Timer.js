// Timer.js (Assuming Timer component)
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text>Time: {seconds} seconds</Text>
  );
};

export default Timer;