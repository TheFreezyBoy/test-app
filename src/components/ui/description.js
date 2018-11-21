import React from 'react';
import { Text, StyleSheet } from "react-native";

const Description = ({ user }) => {
    const { h1 } = styles;
    const { name } = user;

    return (
        <Text style={ h1 }>{ name.toUpperCase() }</Text>
    );
};

const styles = StyleSheet.create({
    h1: {
        paddingTop: 3,
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'sans-serif-medium',
        fontSize: 18
    }
});

export default Description;