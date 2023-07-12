import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-regular": require("./app/assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./app/assets/fonts/Inter-Bold.ttf"),
    "inter-medium": require("./app/assets/fonts/Inter-Medium.ttf"),
  });
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
