import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import style from './style';

export default function PeopleX(data){

    const avatar = data.route.params.avatar;
    const people = data.route.params.data;

    return (
        <ScrollView style={style.viewBody}>
            <View style={style.viewPeople}>
                <Image style={style.peopleImg} source={{uri: avatar}}/>
                <Text style={style.itemTitle}>{people.name}</Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Information</Text>
                <Text style={style.itemText}>Height: <Text style={style.itemData}>{people.height / 100} m</Text></Text>
                <Text style={style.itemText}>Mass: <Text style={style.itemData}>{people.mass} kg</Text></Text>
                <Text style={style.itemText}>Hair Color: <Text style={style.itemData}>{people.hair_color}</Text></Text>
                <Text style={style.itemText}>Skin Color: <Text style={style.itemData}>{people.skin_color}</Text></Text>
                <Text style={style.itemText}>Eye Color: <Text style={style.itemData}>{people.eye_color}</Text></Text>
                <Text style={style.itemText}>Birth Year: <Text style={style.itemData}>{people.birth_year}</Text></Text>
                <Text style={style.itemText}>Gender: <Text style={style.itemData}>{people.gender}</Text></Text>
            </View>        
        </ScrollView>
    )
}