import React, { useEffect, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import * as Animatable from "react-native-animatable";

import { COLORS, Icons } from "../constants";
import Home from "../screens/Home/Home";
import SearchCollege from "../screens/Search/SearchCollege";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const TabArr = [
  {
    route: "Home",
    label: "Home",
    type: Icons.home,
    component: Home
  },
  {
    route: "Search",
    label: "Search",
    type: Icons.search,
    component: SearchCollege
  },
  {
    route: "Add",
    label: "Add",
    type: Icons.discover,
    component: Home
  },
  {
    route: "Profile",
    label: "Profile",
    type: Icons.profile,
    component: ProfileScreen
  }
];
const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 }
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 }
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 }
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = props => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Image
            source={item.type}
            color={focused ? COLORS.white : COLORS.button}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

function BottomStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: 5,
    right: 16,
    left: 16,
    borderRadius: 16
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: COLORS.button,
    backgroundColor: COLORS.button,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.button,
    borderRadius: 25
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: COLORS.black
  }
});

export default BottomStack;
