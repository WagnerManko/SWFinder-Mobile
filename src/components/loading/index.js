import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import bb8Head from '../../assets/img/bb8_head.png'
import bb8Body from '../../assets/img/bb8_body.png'

import style from './style';

function Loading () {

    const navigation = useNavigation();

    return (
        <View style={style.viewLoading}>
            <Image style={style.bb8Head} source={bb8Head}/>
            <Image style={style.bb8Body} source={bb8Body}/>
            <Text style={style.textLoading}>Procurando pessoas...</Text>
        </View>
    );
}

export default Loading;