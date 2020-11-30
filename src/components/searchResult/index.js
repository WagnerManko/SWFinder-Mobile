import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import style from './style';

function Result (props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={style.btnPeople}>
          <Image style={style.avatarPeople} source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/LukeTatooine.jpg/200px-LukeTatooine.jpg'}}/>
          <Text style={style.namePeople}>{props.peopleName}</Text>
        </TouchableOpacity>
    );
}

export default Result;







