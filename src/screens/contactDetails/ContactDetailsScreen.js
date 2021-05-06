import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

import IText from '../../components/IText';
import Location from '../../components/location';
import { colors, strings } from '../../utilities';

const ContactDetailsScreen = ({ navigation, route }) => {
    const { name, picture, email, phone, cell, location } = route.params;

    const contactName = `${name.first} ${name.last}`;

    useEffect(() => {
        navigation.setOptions({ title: contactName })
    }, []);

    return (
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={{ uri: picture.large }}
            />
            <IText textStyle={styles.text}>{contactName}</IText>
            <IText textStyle={styles.text}>{email}</IText>

            <Location {...location} />

            <IText textStyle={styles.text}>{strings.address_phone}{phone}</IText>
            <IText textStyle={styles.text}>{strings.address_cell}{cell}</IText>
        </View>
    )
}

export default ContactDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    image: {
        marginVertical: 50,
        height: 200,
    },
    text: {
        textAlign: 'center',
        paddingVertical: 10
    },
});