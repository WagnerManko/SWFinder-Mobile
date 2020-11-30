import React, { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api/swapi';

import Loading from '../../components/loading';
import R2D2 from '../../assets/img/r2d2.png';
import style from './style';

export default function Peoples() {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    async function loadPeoples() {
      const response = await api.get('people')

      setPeoples(response.data.results);
    }

    loadPeoples();
  }, [])

  return (
    <ScrollView style={style.viewBody}>
      {peoples.length == 0 ?
      <Loading /> :
      peoples.map(people => (
        <TouchableOpacity style={style.btnPeople} key={people.name}>
          <Image style={style.avatarPeople} source={R2D2}/>
          <Text style={style.namePeople}>{people.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}