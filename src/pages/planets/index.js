import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function Planets() {

  const [planets, setPlanets] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPlanets() {
    const resPlanets = await swApi.get(`planets/?page=${page}`);
    
    setPlanets([...planets, ...resPlanets.data.results]);

    if(resPlanets.data.next){
      setPage(page + 1)
    }
  }

  useEffect(() => {
    loadPlanets();
  },[]);

  useEffect(() => {
    loadPlanets()
  },[page]);

  return (
    <ScrollView style={style.viewBody}>
      {planets.length == 0 ?
      <Loading itemName='Planets'/> :
      planets.map(planet => (
      <Result key={planet.name} itemData={planet} itemNav='Planet' itemMap={planet.name}/>
      ))}
    </ScrollView>
  );
}