import { CommonActions } from '@react-navigation/native';

import Screens from '../screens';

const { ContactDetailsScreen } = Screens;

export const navigateToContactDetails = (params) => {
    return CommonActions.navigate({
        name: ContactDetailsScreen.name,
        params
    })
};
