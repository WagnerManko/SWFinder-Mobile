import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import peopleIcon from '../../assets/img/people.png';
import planetIcon from '../../assets/img/planet.png';
import starshipIcon from '../../assets/img/starship.png';

import style from './style';

function ShowCategories (props) {

    const navigation = useNavigation();

    let icon = '';

    if (props.categoryName == 'People') {
        icon = peopleIcon;
    }

    if (props.categoryName == 'Planets') {
        icon = planetIcon;
    }

    if (props.categoryName == 'Starships') {
        icon = starshipIcon;
    }

    return (
        <View style={style.viewBtn}>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate(`${props.categoryName}`)}>
                <Image style={style.icon} source={icon} />
                <Text style={style.text}>{props.categoryName}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ShowCategories;