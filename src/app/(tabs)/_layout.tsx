import { View } from 'react-native'
import React, { useRef} from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome5, Foundation, Ionicons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet';

import { theme } from '@/theme';
import Avatar from '@/components/Avatar';
import {Menu} from '@/components/Menu';



export default function TabLayout() {
  const { colors } = theme;
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottonSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottonSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={{flex: 1}}>
      <Tabs screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.White,
        tabBarInactiveTintColor: colors.Gray[600],
        tabBarStyle: {
          backgroundColor: colors.Black,
          borderColor: colors.Black
        }
      }}>
        <Tabs.Screen 
          name="index"
          options={{
            tabBarIcon:({size, color}) => <Foundation name="home" size={size} color={color} />
          }}
          />
        <Tabs.Screen name="search" 
          options={{
            tabBarIcon:({size, color}) => <Ionicons name="search" size={size} color={color} />
          }}
          />
        <Tabs.Screen name="menu" 
          options={{
            tabBarIcon:({size, color}) => <FontAwesome5 name="plus" size={size} color={color} />
          }}
          listeners={() => ({
            tabPress: e => {
              e.preventDefault();
              handleBottonSheetOpen();
            }
          })}
          />
        <Tabs.Screen name="messages" 
          options={{
            tabBarIcon:({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          }}
          />
        <Tabs.Screen name="profile" 
          options={{
            tabBarIcon:({size, color}) => (
              <Avatar 
              selected={color === colors.White}
              source={{ uri: "https://github.com/bognarjunior.png" }}
              />
            )
          }}
          /> 
      </Tabs>
      <Menu ref={bottomSheetRef} onClose={handleBottonSheetClose}/>
    </View>
  )
}