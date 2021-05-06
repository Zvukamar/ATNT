import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const IText = ({ children, textStyle, containerStyle }) => {
    return (
        <View style={containerStyle}>
            <Text style={textStyle}>{children}</Text>
        </View>
    )
}

export default IText;

IText.propTypes = {
    children: PropTypes.node.isRequired,
    textStyle: PropTypes.object,
    containerStyle: PropTypes.object
}