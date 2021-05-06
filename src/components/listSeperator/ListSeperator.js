import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../utilities';

const ListSeperator = () => {
    return (
        <View style={styles.container} />
    )
}

export default ListSeperator;

const styles = StyleSheet.create({
    container: {
        height: 1,
        backgroundColor: colors.GRAY
    }
});