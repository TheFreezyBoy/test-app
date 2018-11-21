import React from 'react'
import { Image, StyleSheet } from "react-native";
import { h, w } from "../../constants";

const ShowSmallImage = ({urls}) => {
    const { small } = urls;
    const { cover } = styles;

    return(
        <Image style={ cover } source={{ uri: small }} />
    )

};

const styles = StyleSheet.create({
    cover: {
        width: w / 2.5,
        height: h / 3.4,
        borderRadius: 4,
        justifyContent: 'center'
    }
});

export default ShowSmallImage;