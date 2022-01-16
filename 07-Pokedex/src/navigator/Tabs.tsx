import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SearchTabNavigator } from './SearchTabNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 50,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: "List",
                    tabBarIcon: ({ color }) => <Icon color={color} size={20} name="list-outline" />
                }}
                component={Navigator} />
            <Tab.Screen
                name="SearchScreen"
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => <Icon color={color} size={20} name="search-outline" />
                }}
                component={SearchTabNavigator} />
        </Tab.Navigator>
    )
}
