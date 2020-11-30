import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function Planets() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function loadPlanets() {
      const resPlanets = await swApi.get('planets');

      setPlanets(resPlanets.data.results);
    }

    loadPlanets();
  }, [])

  return (
    <ScrollView style={style.viewBody}>
      {planets.length == 0 ?
      <Loading itemName='Planets'/> :
      planets.map(planet => (
      <Result key={planet.name} itemMap={planet.name}/>
      ))}
    </ScrollView>
  );
}