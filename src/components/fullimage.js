import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'

export default class FullImage extends Component {

    render() {
        const { full } = this.props.navigation.state.params;
        const { container } = styles;

        return (
            <View style={ container }>
                    <Image resizeMode={'contain'} style={ container } source={{ uri: full }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
});
