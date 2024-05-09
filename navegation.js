import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Header from "./screens/header";
import Footer from "./screens/footer";
import HomeScreen from "./screens/homeScrean";
import DrawerScreen from "./screens/Drawer";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MyStack} options={{ headerShown: false }}/>
            <Tab.Screen name="Footer" component={Footer} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={MyTabs} />
                <Drawer.Screen name="Drawer" component={DrawerScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
