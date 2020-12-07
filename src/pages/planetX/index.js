import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import style from './style';

export default function PlanetX(data){

    const avatar = data.route.params.avatar;
    const planet = data.route.params.data;

    return (
        <ScrollView style={style.viewBody}>
            <View style={style.viewPlanet}>
                <Image style={style.planetImg} source={{uri: avatar}}/>
                <Text style={style.itemTitle}>{planet.name}</Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Dimensions</Text>
                <Text style={style.itemText}>Diameter: <Text style={style.itemData}>{planet.diameter} km</Text></Text>
                <Text style={style.itemText}>Rotation Period: <Text style={style.itemData}>{planet.rotation_period} hours</Text></Text>
                <Text style={style.itemText}>Orbital Period: <Text style={style.itemData}>{planet.orbital_period} days</Text></Text>
            </View>
            <View style={style.viewDetails}>
                <Text style={style.itemSubTitleDetails}>Orbit</Text>
                <Text style={style.itemText}>Gavity: <Text style={style.itemData}>{planet.gravity}</Text></Text>
                <Text style={style.itemText}>Climate: <Text style={style.itemData}>{planet.climate}</Text></Text>
                <Text style={style.itemText}>Terrain: <Text style={style.itemData}>{planet.terrain}</Text></Text>
                <Text style={style.itemText}>Surface Water: <Text style={style.itemData}>{planet.surface_water}%</Text></Text>
                <Text style={style.itemText}>Population: <Text style={style.itemData}>{planet.population}</Text></Text>
            </View>        
        </ScrollView>
    )
}