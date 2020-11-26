import React from 'react';

import Routes from './src/routes';

import globalStyle from './globalStyle';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={globalStyle.bodyView}>
      <Routes />
    </View>
  );
}