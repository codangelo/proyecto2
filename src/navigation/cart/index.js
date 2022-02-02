import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../../screens/cart/index'

const Stack = createStackNavigator()

const CartNavigation = () => {
    return(
            <Stack.Navigator initialRouteName='Cart'>
                <Stack.Screen name="Cart" component= {Cart} />
            </Stack.Navigator>
    )
}

export default CartNavigation;