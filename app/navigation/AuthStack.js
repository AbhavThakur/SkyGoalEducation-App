import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import OnboardingScreen from "../screens/Onboard/OnBoardingScreen";
import Login from "../screens/Authentication/Login";

const Stack = createStackNavigator();

function AuthStack() {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("Onboarding").then(value => {
      if (value === null) {
        AsyncStorage.setItem("Onboarding", "true");
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
    GoogleSignin.configure({
      webClientId:
        "863565391876-0fj9of0bh1vrqf6ebfshs3vk32b2t1as.apps.googleusercontent.com"
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator
      initialRouteName={routeName}
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthStack;
