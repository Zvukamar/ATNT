import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import IText from '../IText';
import { strings } from '../../utilities';

const Location = (props) => {
    const { street, city, state, country, postcode } = props;
    return (
        <View style={styles.container}>
            <IText textStyle={styles.titleContainer}>{strings.address_title}</IText>
            <View style={styles.streetContainer}>
                <IText>{street.name} {street.number}</IText>
            </View>
            <IText textStyle={styles.fields}>{state}</IText>
            <IText textStyle={styles.fields}>{city}</IText>
            <IText textStyle={styles.fields}>{country}</IText>
            <IText textStyle={styles.fields}>{postcode}</IText>
        </View>
    )
}

export default Location;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    titleContainer: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    streetContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    fields: {
        textAlign: 'center',
    }
});

Location.propTypes = {
    street: PropTypes.objectOf({
        number: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ]),
        name: PropTypes.string
    }),
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    postcode: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    coordinates: PropTypes.objectOf({
        latitude: PropTypes.string,
        longitude: PropTypes.string
    }),
    coordinates: PropTypes.objectOf({
        offset: PropTypes.string,
        description: PropTypes.string
    })
}