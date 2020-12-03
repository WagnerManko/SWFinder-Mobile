import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import Loading from '../../components/loading';
import Result from '../../components/searchResult';
import style from './style';

export default function Peoples() {

  const [peoples, setPeoples] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPeoples() {
    const resPeoples = await swApi.get(`people/?page=${page}`);
    
    setPeoples([...peoples, ...resPeoples.data.results]);

    if(resPeoples.data.next){
      setPage(page + 1)
    }
  }

  useEffect(() => {
    loadPeoples();
  },[]);

  useEffect(() => {
    loadPeoples()
  },[page]);

  return (
    <ScrollView style={style.viewBody}>
      {peoples.length == 0 ?
        <Loading itemName='Peoples'/> :
        peoples.map(people => (
        <Result key={people.name} itemMap={people.name}/>
        ))}
    </ScrollView>
  );
}