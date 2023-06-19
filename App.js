import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from './misc/Colors';
import Main from './screens/Main';
import { loadFonts } from './misc/Fonts';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function loadApp() {
      await loadFonts();
      setIsReady(true);
    }
    loadApp();
  }, []);

  if (!isReady) {
    return null; // or render a loading screen/component
  }

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: Colors.tertiary },
          }}>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
