import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity } from 'react-native';

import imgapi from '../../api/imgapi/avatars.json';
import style from './style';

function Result (props) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
          style={style.btnItem}
          onPress={
            () => navigation.navigate(`${props.itemNav}`, {
              data: props.itemData,
              avatar: imgapi[props.itemMap],
          })}
        >
          <Image style={style.avatarItem} source={{ uri: imgapi[props.itemMap]}}/>
          <Text style={style.nameItem}>{props.itemMap}</Text>
        </TouchableOpacity>
    );
}

export default Result;







