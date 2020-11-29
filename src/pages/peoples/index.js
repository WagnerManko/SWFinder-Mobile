import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api/swapi';

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
    <View style={style.viewBody}>
      {peoples.length == 0 ?
      <Text style={style.loading}>Encontrando Pessoas...</Text> :
      peoples.map(people => (
        <TouchableOpacity style={style.btnPeople} key={people.name}>
          <Image style={style.avatarPeople} source={R2D2}/>
          <Text style={style.namePeople}>{people.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}