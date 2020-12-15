import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';
import People from './pages/people';
import Planets from './pages/planets';
import Starships from './pages/starships';
import PersonX from './pages/personX';
import PlanetX from './pages/planetX';
import StarshipX from './pages/starshipX';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="People" component={People} />
                <AppStack.Screen name="Planets" component={Planets} />
                <AppStack.Screen name="Starships" component={Starships} />
                <AppStack.Screen name="PersonX" component={PersonX} />
                <AppStack.Screen name="PlanetX" component={PlanetX} />
                <AppStack.Screen name="StarshipX" component={StarshipX} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}