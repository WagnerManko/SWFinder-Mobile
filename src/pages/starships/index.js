import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function Planets() {

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function loadStarships() {
      const resStarships = await swApi.get('starships');

      setStarships(resStarships.data.results);
    }

    loadStarships();
  }, [])

  return (
    <ScrollView style={style.viewBody}>
      {starships.length == 0 ?
      <Loading itemName='Starships'/> :
      starships.map(starship => (
      <Result key={starship.name} itemMap={starship.name}/>
      ))}
    </ScrollView>
  );
}