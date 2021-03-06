import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';

import Navigator from './nav';
import { colors } from './utilities';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <Navigator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
});

export default App;
