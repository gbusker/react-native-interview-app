import React from 'react';
import {View, Text} from 'react-native';

const WeatherScreen = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
    <Text>Page 2</Text>
    <Text>Temperature this week will be ...</Text>
    <Text>19c, 21c, 23c ...</Text>
  </View>
);

export default WeatherScreen;