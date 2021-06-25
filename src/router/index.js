import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Menu, AddEvents, CalendarsScreen } from "../pages";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddEvents"
        component={AddEvents}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CalendarScreen"
        component={CalendarsScreen}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
