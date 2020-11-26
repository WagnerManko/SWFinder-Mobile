import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/home';
import Peoples from './pages/peoples';
import Planets from './pages/planets';
import Starships from './pages/starships';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Peoples" component={Peoples} />
                <AppStack.Screen name="Planets" component={Planets} />
                <AppStack.Screen name="Starships" component={Starships} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}