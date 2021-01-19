import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import swApi from '../../api/swapi';

import ShowLoading from '../../components/loading';
import ShowResults from '../../components/searchResult';
import style from './style';

export default function mountPeoplePage() {

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);

  async function loadPeople() {
    const resPeople = await swApi.get(`people/?page=${page}`);
    
    setPeople([...people, ...resPeople.data.results]);

    if(resPeople.data.next){
      setPage(page + 1)
    }
  }

  useEffect(() => {
    loadPeople();
  },[]);

  useEffect(() => {
    loadPeople()
  },[page]);

  return (
    <ScrollView style={style.viewBody}>
      {people.length == 0 ?
        <ShowLoading itemName='People'/> :
        people.map(people => (
        <ShowResults key={people.name} itemData={people} itemNav='Person' itemMap={people.name}/>
        ))}
    </ScrollView>
  );
}