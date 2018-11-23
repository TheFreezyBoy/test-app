import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import ShowSmallImage from "./showsmallimage";
import Description from "./description";
import {w} from "../../constants";

const ImageCard = ({ photos, onPress }) => {
    const { container } = styles;
    const { urls, user } = photos;

    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={ container }>
                <ShowSmallImage urls={ urls } />
                <Description user={ user } />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 19,
        width: w / 2.5
    }
});

export default ImageCard;

