import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images } from '../../utilities';

const ContactLine = ({ handleOnPress, ...item }) => {

    const onPress = () => {
        handleOnPress(item);
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text>{item.name.first} {item.name.last}</Text>
            <Image
                style={styles.arrow}
                source={images.arrowRight}
            />
        </TouchableOpacity>
    )
}

export default ContactLine;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    arrow: {
        width: 15,
        height: 15,
        marginRight: 10
    }
});