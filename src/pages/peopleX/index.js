import React from 'react';
import { Text } from 'react-native';

export default function PeopleX(props){
    const people = data.route.params.data;

    return <Text>{people.name}</Text>
}