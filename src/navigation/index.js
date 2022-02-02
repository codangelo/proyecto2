import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ShopNavigation from './shop/index'
import CartNavigation from './cart/index'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-ionicons'


const BottomTabs = createBottomTabNavigator()

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <BottomTabs.Navigator screenOptions={{
                headerShown: false,
            }} initialRouteName='Shop'>
                <BottomTabs.Screen 
                name='Shop' 
                component={ShopNavigation}
                options= {{
                    tabBarIcon: ({ focused }) => {
                        return(
                            <Icon name='home' size={30}/>
                        )
                    }
                    
                }}
                   />
                <BottomTabs.Screen 
                name='Cart' 
                component={CartNavigation}  
                options= {{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='cart' size={30}/>
                    )
                }}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;

