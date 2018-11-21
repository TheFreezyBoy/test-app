import React, { Component } from 'react';

import ImageCard from './ui/imagecard';
import Body from './ui/body';

const url = 'https://api.unsplash.com/photos/?client_id=3e69419ed57e93397e5729a1e65b38d0eebe02d26867b78c434a799481498b6d';

export default class HomeScreen extends Component {
    state = {
        title: `DEVSTEAM.MOBI`,
        arr: []
    };

    componentDidMount = async() => {
        const response = await fetch(url);
        const arr = await response.json();
        this.setState({ arr });
        console.log( arr );
    };

    render() {
        const { arr } = this.state;

        return (
            <Body>
            { arr.map(item => {
                return (<ImageCard
                    arr={item}
                    key={item.id}
                    onPress={ () => { this.props.navigation.navigate('Picture', (item.urls))} }
                />)
            })}
            </Body>
        );
    }
}


