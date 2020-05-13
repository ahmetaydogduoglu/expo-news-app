import React from 'react';
import { StyleSheet, StatusBar,TouchableOpacity,Text }from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/Login"
import Register from "./screens/Register"


const Stack = createStackNavigator();


export default function App({navigation}) {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator headerMode="screen">
        <Stack.Screen options={{headerStyle:{backgroundColor:"#9E58B2"},headerTintColor:"#fff"}} name="Login" component={LoginScreen} />
        <Stack.Screen
          options={{headerStyle:{backgroundColor:"#9E58B2"},headerTintColor:"#fff"}}
        name="Register" component={Register} />
      </Stack.Navigator>
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
