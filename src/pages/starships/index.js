import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function mountStarshipsPage() {

  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);

  async function loadStarships() {
    const resStarships = await swApi.get(`starships/?page=${page}`);
    
    setStarships([...starships, ...resStarships.data.results]);

    if(resStarships.data.next){
      setPage(page + 1)
    }
  }

  useEffect(() => {
    loadStarships();
  },[]);

  useEffect(() => {
    loadStarships()
  },[page]);

  return (
    <ScrollView style={style.viewBody}>
      {starships.length == 0 ?
      <Loading itemName='Starships'/> :
      starships.map(starship => (
      <Result key={starship.name} itemData={starship} itemNav='Starship' itemMap={starship.name}/>
      ))}
    </ScrollView>
  );
}