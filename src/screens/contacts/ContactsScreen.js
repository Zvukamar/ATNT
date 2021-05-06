import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ContactLine from '../../components/contactLine';
import ListSeperator from '../../components/listSeperator';
import { colors } from '../../utilities';

const INITIAL_AMOUNT_TO_LOAD = 10;
const ContactsScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(`https://randomuser.me/api?results=${INITIAL_AMOUNT_TO_LOAD}`);
            const json = await data.json();
            setContacts(json.results);
        } catch (error) {
            console.warn({ error })
        }
    }

    const renderItem = ({ item }) => {
        return (
            <ContactLine
                {...item}
                handleOnPress={handleOnPress}
            />
        )
    }

    const handleOnPress = (item) => {
        console.log({ item })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={(item) => item?.login?.uuid}
                ItemSeparatorComponent={ListSeperator}

            />
        </View>
    )
}

export default ContactsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        paddingLeft: 20
    }
});