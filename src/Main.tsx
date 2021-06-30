import React from 'react';
import {useWindowDimensions, View, Text} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TimerScreen from './TimerScreen';
import WeatherScreen from './WeatherScreen';


const renderScene = SceneMap({
  first: TimerScreen,
  second: WeatherScreen,
});

const Main = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Timer Demo' },
    { key: 'second', title: 'The Weather' },
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
} 

export default Main;