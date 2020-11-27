import React from 'react';
import { Text, View } from 'react-native';
import Categories from '../../components/btnCategories'

import { Feather as Icon } from '@expo/vector-icons';
import style from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <>
        <View style={style.viewLogo}>
            <Text style={style.swfLogo}>SW Finder</Text>
        </View>
        
        <View style={style.viewCategories}>
            <Categories categoryName='Peoples' />
            <Categories categoryName='Planets' />
            <Categories categoryName='Starships' />
        </View>

        <View style={style.viewGitHub}>
            <TouchableOpacity style={style.githubBtn}>
              <Icon style={style.github} name='github' />
            </TouchableOpacity>
        </View>
    </>
  );
}