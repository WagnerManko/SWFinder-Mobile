import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import style from './style';

export default function StarshipX(data){

    const avatar = data.route.params.avatar;
    const starship = data.route.params.data;

    return (
        <ScrollView style={style.viewBody}>
            <View style={style.viewStarship}>
                <Image style={style.starshipImg} source={{uri: avatar}}/>
                <Text style={style.itemTitle}>{starship.name}</Text>
                <Text style={style.itemSubTitle}>Modelo: {starship.model}</Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Marketplace</Text>
                <Text style={style.itemText}>Manufacturer: <Text style={style.itemData}>{starship.manufacturer}</Text></Text>
                <Text style={style.itemText}>Credits Cost: <Text style={style.itemData}>{starship.cost_in_credits} un</Text></Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Navigation</Text>
                <Text style={style.itemText}>Max Speed: <Text style={style.itemData}>{starship.max_atmosphering_speed} kph</Text></Text>
                <Text style={style.itemText}>Hyperdrive Rating: <Text style={style.itemData}>{starship.hyperdrive_rating}</Text></Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Capacities</Text>
                <Text style={style.itemText}>Length: <Text style={style.itemData}>{starship.length} m</Text></Text>
                <Text style={style.itemText}>Crew: <Text style={style.itemData}>{starship.crew}</Text></Text>
                <Text style={style.itemText}>Passengers: <Text style={style.itemData}>{starship.passengers}</Text></Text>
                <Text style={style.itemText}>Cargo Capacity: <Text style={style.itemData}>{starship.cargo_capacity} tonnes</Text></Text>
            </View>        
        </ScrollView>
    )
}