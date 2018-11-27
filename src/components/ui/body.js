import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux'

import ImageCard from './imagecard'

class Body  extends Component {

    render () {
        const { container } = styles;
        const  photos = this.props.photos;
        const er = this.props.error.message;

        return (
            <ScrollView>
                <View style={ container }>
                    { photos.map(item => {
                        return (<ImageCard
                            photos={ item }
                            key={ item.id }
                            onPress={ () => { this.props.navigation.navigate('Picture', (item.urls)) } }
                            />)
                    })}
                    <Text>{ er }</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
});
const mapStateToProps = (state) => {
    console.log(state);
    return {
        photos: state.arr,
        error: state.error
    }
};


export default connect(mapStateToProps)(Body)