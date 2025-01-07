import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Foundation } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false
    }}>
      <Tabs.Screen 
        name="index"
        options={{
          tabBarIcon:({size, color}) => <Foundation name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="messages" />
      <Tabs.Screen name="profile" /> 
    </Tabs>
  )
}