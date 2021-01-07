import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';
import People from './pages/people';
import Planets from './pages/planets';
import Starships from './pages/starships';
import Person from './pages/person';
import Planet from './pages/planet';
import Starship from './pages/starship';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="People" component={People} />
                <AppStack.Screen name="Planets" component={Planets} />
                <AppStack.Screen name="Starships" component={Starships} />
                <AppStack.Screen name="Person" component={Person} />
                <AppStack.Screen name="Planet" component={Planet} />
                <AppStack.Screen name="Starship" component={Starship} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}