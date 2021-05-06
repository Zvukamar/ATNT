import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '../screens';
import { strings } from '../utilities';

const { ContactsScreen, ContactDetailsScreen } = Screens;
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ContactsScreen.name}
                    component={ContactsScreen.screen}
                    options={{ title: strings.contacts_screen_title }}
                />
                <Stack.Screen
                    name={ContactDetailsScreen.name}
                    component={ContactDetailsScreen.screen}
                    options={{ headerBackTitle: strings.back_button_title }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;