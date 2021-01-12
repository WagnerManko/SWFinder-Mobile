import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';

import mountPeoplePage from './pages/people';
import mountPersonPageDetail from './pages/person';

import mountPlanetsPage from './pages/planets';
import mountPlanetPageDetail from './pages/planet';

import mountStarshipsPage from './pages/starships';
import mountStarshipPageDetail from './pages/starship';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />

                <AppStack.Screen name="People" component={mountPeoplePage} />
                <AppStack.Screen name="Person" component={mountPersonPageDetail} />

                <AppStack.Screen name="Planets" component={mountPlanetsPage} />
                <AppStack.Screen name="Planet" component={mountPlanetPageDetail} />
                
                <AppStack.Screen name="Starships" component={mountStarshipsPage} />
                <AppStack.Screen name="Starship" component={mountStarshipPageDetail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}