import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api/swapi';

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
    <View>
      {peoples.length == 0 ?
      <Text>Encontrando Pessoas...</Text> :
      peoples.map(people => (
        <TouchableOpacity key={people.name}>
          <Text>{people.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}