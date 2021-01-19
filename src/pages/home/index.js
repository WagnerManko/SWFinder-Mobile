import React from 'react';
import { Linking, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather as Icon } from '@expo/vector-icons';
import ShowCategories from '../../components/btnCategories';

import style from './style';

export default function Home() {

  const url = 'https://github.com/WagnerManko/SWFinder-Mobile';

  async function navigateToGithub() {
    await Linking.canOpenURL(url).then(Linking.openURL(url));
  };

  return (
    <>
        <View style={style.viewLogo}>
            <Text style={style.swfLogo}>SWFinder</Text>
        </View>
        
        <View style={style.viewCategories}>
            <ShowCategories categoryName='People' />
            <ShowCategories categoryName='Planets' />
            <ShowCategories categoryName='Starships' />
        </View>

        <View style={style.viewGitHub}>
            <TouchableOpacity style={style.githubBtn} onPress={navigateToGithub}>
              <Icon style={style.github} name='github' />
            </TouchableOpacity>
        </View>
    </>
  );
}