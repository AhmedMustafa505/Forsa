import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RetailScreen from "../screens/RetailScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={30}
              />
            ),
          tabBarLabelStyle: { fontSize: 16 },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Retail"
        component={RetailScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="pricetag" size={30} color={color} />
            ) : (
              <Ionicons name="pricetag-outline" size={30} color={color} />
            ),
          tabBarLabelStyle: { fontSize: 16 },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" color={color} size={30} />
            ) : (
              <FontAwesome5 name="user" color={color} size={30} />
            ),
          tabBarLabelStyle: { fontSize: 16 },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
