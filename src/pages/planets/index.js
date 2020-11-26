import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api/swapi';

export default function Planets() {

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function loadPlanets() {
      const response = await api.get('planets')

      setPlanets(response.data.results);
    }

    loadPlanets();
  }, [])

  return (
    <View>
      {planets.length == 0 ?
      <Text>Procurando Planetas...</Text> :
      planets.map(planet => (
        <TouchableOpacity key={planet.name}>
          <Text>{planet.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}