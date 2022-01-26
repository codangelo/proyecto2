import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/categories/index';
import Detail from '../screens/detail/index'
import Products from '../screens/products/index'


const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Categories'>
                <Stack.Screen name="Categories" component= {Categories} />
                <Stack.Screen name="Products" component= {Products} />
                <Stack.Screen name="Detail" component= {Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;

