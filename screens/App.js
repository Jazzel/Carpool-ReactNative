import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./Splash";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";
import HomeScreen from "./Home";
import CarpoolScreen from "./Carpool";
import BookRideScreen from "./BookRide";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Carpool" component={CarpoolScreen} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
