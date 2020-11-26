import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api/swapi';

export default function Starships() {

  const [starships, setstarships] = useState([]);

  useEffect(() => {
    async function loadstarships() {
      const response = await api.get('starships')

      setstarships(response.data.results);
    }

    loadstarships();
  }, [])

  return (
    <View>
      {starships.length == 0 ?
      <Text>Buscando Aeronaves...</Text> :
      starships.map(starship => (
        <TouchableOpacity key={starship.name}>
          <Text>{starship.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}