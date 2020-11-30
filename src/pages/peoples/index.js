import React, { useEffect, useState } from 'react';
import { Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function Peoples() {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    async function loadPeoples() {
      const resPeoples = await swApi.get('people');

      setPeoples(resPeoples.data.results);
    }

    loadPeoples();
  }, [])

  return (
    <ScrollView style={style.viewBody}>
      {peoples.length == 0 ?
      <Loading /> :
      peoples.map(people => (
      <Result key={people.name} peopleName={people.name}/>
      ))}
    </ScrollView>
  );
}