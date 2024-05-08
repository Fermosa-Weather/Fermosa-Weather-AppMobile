import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// Screans
import Header from "./screans/header";
import Footer from "./screans/footer";
// import Setting_screan from "./screans/Setting_screan";
// import Stack_screan from "./screans/Stack_screan";
// import hamburguesa from "./screans/hamburguesa";
// import Boton_Drawer from "./screans/Drawer";

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();


// function MyDrawer() {
//     return (
//       <Drawer.Navigator>
//         <Drawer.Screen name="Feed" component={Boton_Drawer} />
//       </Drawer.Navigator>
//     );
//   }

// function MyStack() {
//     return (
//         <Stack.Navigator initialRouteName="Home_screan">
//             <Stack.Screen name="Home_screan" component={Home_screan} />
//             <Stack.Screen name="Stack" component={Stack_screan}/>
//             <Stack.Screen name="Hamburguesa" component={hamburguesa}/>
//         </Stack.Navigator>
//     );
// }

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Header">
            {/* <Tab.Screen name="Home_screan" component={MyStack} options={{ headerShown: false }} />
            <Tab.Screen name="Home_drawer" component={MyDrawer} options={{ headerShown: false }} /> */}
            <Tab.Screen name="Header" component={Header} options={{ headerShown: false }} />
            <Tab.Screen name="Footer" component={Footer} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
