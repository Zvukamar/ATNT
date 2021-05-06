import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '../screens';
import { strings } from '../utilities';

const { ContactsScreen } = Screens;
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ContactsScreen.name}
                    component={ContactsScreen.screen}
                    options={{ title: strings.contacts_screen_title }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;