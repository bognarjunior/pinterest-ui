import React from 'react';
import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import * as SplasScreen from 'expo-splash-screen';

import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold, 
} from '@expo-google-fonts/roboto';

SplasScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold,
  });

  if(fontsLoaded){
    SplasScreen.hideAsync();
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Slot />
    </GestureHandlerRootView>
  )
}