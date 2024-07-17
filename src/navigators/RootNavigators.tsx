import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import Homenavigator from "./Homenavigator";
import Giftscreen from "../screens/Giftscreen";
import Homescreen from "../screens/Homescreen";
import HomeNavigator from "./Homenavigator";
import HearthScreen from "../screens/HeartScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children }) => {
  return (
    <TouchableOpacity
      style={{
        width: 58,
        height: 58,
        backgroundColor: "#5C3EBC",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: -10,
        borderWidth: 2,
        borderColor: "white",
        ...styles.shadow,
      }}
    >
      <FontAwesome6 name='trowel-bricks' size={32} color='#FFD00C' />
    </TouchableOpacity>
  );
};

export default function RootNavigators() {
  return (
    <Tab.Navigator
      initialRouteName='Ana Sayfa'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#5C3EBC",
        tabBarInactiveTintColor: "#959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name='Ana Sayfa'
        component={Homenavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Homenavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='list'
        component={Homenavigator}
        options={{
          tabBarIcon: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name='User'
        component={Homenavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='heartscreen'
        component={Giftscreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='gift' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
