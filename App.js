import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import { Provider } from 'react-redux'
import { StyleSheet } from "react-native";
import { store } from "./Store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
   

import HomeScreen from "./Screens/HomeScreen";
import MapScreen from "./Screens/MapScreen";



// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider store={store}>

      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>

            <Stack.Screen name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,       
              }}
            />

          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});





