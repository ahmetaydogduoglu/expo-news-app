import React from 'react';
import { StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
};
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator headerMode="screen">
        <AuthStack.Screen options={{headerTransparent:true, headerStyle: { backgroundColor: "white", borderBottomWidth: 0 }, headerShown: true, headerTintColor: "#9E58B2" }}
          name="Login" component={LoginScreen} />
        <AuthStack.Screen
          options={{headerTransparent:true, headerStyle: { backgroundColor: "white", borderBottomWidth: 0 }, headerShown: true, headerTintColor: "#9E58B2" }}
          name="Register" component={Register} />
        <AppStack.Screen
         options={{headerShown: false}}

          name="Home" component={Home} />
      </AuthStack.Navigator>
      {/* <AppStack.Navigator headerMode="none">
     
      </AppStack.Navigator> */}

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
