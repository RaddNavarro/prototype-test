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
import { Button, TouchableOpacity, Text, View, Alert, Animated, StyleSheet } from "react-native";
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "../styles/styles";
import Svg, { Path } from "react-native-svg";
import { Props } from '../navigation/props'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreenNavigator: React.FC<Props> = ({ navigation }) => {
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Rewards') {
                iconName = focused ? 'rocket' : 'rocket-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />
  
            },
            headerTitleAlign: 'center',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: [styles.tabStyles],
            tabBarShowLabel: false,
            
            
          })
          }
          >
            
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Rewards" component={Rewards} />
            <Tab.Screen name="DLSociety" component={Home} options={{ title: "Home", 
                tabBarItemStyle: { position: 'relative' },
                tabBarIcon: ({ color, focused }) => (
                    <View style={styles.curvedLogo}>
                        <Svg width={210} height={40}>
                            <Path d="M 62.8 0 Q 82.8 0 102.8 20 C 122.8 40 142.8 40 162.8 20 Q 182.8 0 202.8 0"
                            fill="white" strokeWidth={10}/>
                        </Svg>
                    <View style={styles.curvedLogoBox}/>
                    </View>
                ),
                }}/>
            <Tab.Screen name="Calendar" component={Calendar} options={{  headerRight: () =>
            <TouchableOpacity onPress={() => navigation.navigate('AnnouncementsNav') } style={{ paddingHorizontal: 20 }}>
                <Ionicons name="notifications-outline" size={20} /> 
            </TouchableOpacity> }} />
            <Tab.Screen name="Profile" component={Profile} />

            {/* <Tab.Screen name="Announcements" component={Announcements} /> */}
        </Tab.Navigator>
    )
}

const AnnouncementNav: React.FC<Props> = ({ navigation }) => {

  return(
    <Stack.Navigator>
    <Stack.Screen name="Announcements" component={Announcements} options={{ title: "Create An Announcement", headerTitleAlign: 'center', headerRight: () =>
      <TouchableOpacity onPress={() => navigation.goBack() } style={{ paddingHorizontal: 10 }}>
        <Ionicons name="cloud-upload" size={25} />  
      </TouchableOpacity>
     }} />
  </Stack.Navigator>
  )
  
}

  

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="HomeScreenNavigator" component={HomeScreenNavigator} />
                <Stack.Screen name="AnnouncementsNav" component={AnnouncementNav}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}




export default AppNavigator;