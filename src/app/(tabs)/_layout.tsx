import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Foundation, Ionicons } from '@expo/vector-icons'
import { theme } from '@/theme';
import Avatar from '@/Avatar';

const { colors } = theme;

export default function TabLayout() {
  return (
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
  )
}