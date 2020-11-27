import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import {
  useFonts,
  Sarpanch_400Regular,
  Sarpanch_500Medium,
  Sarpanch_600SemiBold,
} from '@expo-google-fonts/sarpanch';
import Starjedi from './src/assets/fonts/starjedi/Starjedi.ttf';
import Starjhol from './src/assets/fonts/starjedi/Starjhol.ttf';

import globalStyle from './globalStyle';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Sarpanch_400Regular,
    Sarpanch_500Medium,
    Sarpanch_600SemiBold,
    Starjedi,
    Starjhol,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={globalStyle.bodyView}>
      <StatusBar barStyle='light-content' backgroundColor='#1c1e22' translucent />
      <Routes />
    </View>
  );
}