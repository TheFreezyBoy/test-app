import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import ImageCard from './imagecard'

class Body  extends Component {

    render () {
        const { container } = styles;
        const photos = this.props.photos;

        return (
            <ScrollView>
                <View style={ container }>
                    { photos.map(item => {
                        return (<ImageCard
                            photos={ item }
                            key={ item.id }
                            onPress={ () => { this.props.navigation.navigate('Picture', (item.urls)) } }
                            />
                        )
                    })}
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
    return {
        photos: state.arr
    }
};

export default connect(mapStateToProps)(Body)