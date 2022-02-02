import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../../screens/categories/index';
import Detail from '../../screens/detail/index'
import Products from '../../screens/products/index'

const Stack = createStackNavigator()

const ShopNavigation = () => {
    return(
            <Stack.Navigator initialRouteName='Categories'>
                <Stack.Screen name="Categories" component= {Categories} />
                <Stack.Screen name="Products" component= {Products} />
                <Stack.Screen name="Detail" component= {Detail} />
            </Stack.Navigator>
    )
}

export default ShopNavigation;

