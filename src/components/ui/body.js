import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

const Body = props => {
    const { container } = styles;

    return (
        <ScrollView>
            <View style={ container }>
                { props.children }
                </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});

export default Body