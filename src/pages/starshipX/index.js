import React from 'react';
import { Text } from 'react-native';

export default function StarshipX(data){

    const starship = data.route.params.data;

    return <Text>{starship.name}</Text>
}