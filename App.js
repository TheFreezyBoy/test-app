import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from './src/components/homescreen'
import FullImage from './src/components/fullimage'

const AppNavigator = createStackNavigator ({
    Home: {
        screen: HomeScreen
    },
    Picture: {
        screen: FullImage
    },
}, {
    headerMode: 'none',
    initialRoute: 'Home'
});

export default createAppContainer(AppNavigator);