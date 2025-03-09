import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogIn from "../screens/LogIn";
import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Rewards from "../screens/Rewards";
import Profile from "../screens/Profile";
import Announcements from "../screens/Announcements";
import { Button, TouchableOpacity, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Rewards" component={Rewards} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Announcements" component={Announcements} />
        </Tab.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="HomeScreenNavigator" component={HomeScreenNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;