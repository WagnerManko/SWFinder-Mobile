import React from 'react';
import { Image, Text, View } from 'react-native';
import Categories from '../../components/btnCategories'

import style from './style';

import peopleIcon from '../../img/people.png';
import planetIcon from '../../img/planet.png';
import starshipIcon from '../../img/starship.png';

export default function Home() {
  return (
    <>
        <View style={style.viewLogo}>
            <Text style={style.swfLogo}>SWFinder</Text>
        </View>
        
        <Categories categoryName='Peoples' />

        <Categories categoryName='Planets' />

        <Categories categoryName='Starships' />

        <View style={style.viewGitHub}>
            <Text style={style.github}>SWFinder</Text>
        </View>
    </>
  );
}