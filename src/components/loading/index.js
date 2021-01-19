import React from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';

import bb8Head from '../../assets/img/bb8Head.png'
import bb8Body from '../../assets/img/bb8Body.png'

import style from './style';

function ShowLoading (props) {

    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
        toValue: 1,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    startImageRotateFunction();

    return (
        <View style={style.viewLoading}>
            <Image style={style.bb8Head} source={bb8Head}/>
            <Animated.Image style={[style.bb8Body, {transform: [{rotate: rotateData}]}]} source={bb8Body}/>
            <Text style={style.textLoading}>Looking for {props.itemName}...</Text>
        </View>
    );
}

export default ShowLoading;