import React from 'react';
import { Text } from 'react-native';

export default function PlanetX(){
    const planet = data.route.params.data;

    return <Text>{planet.name}</Text>
}