import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function Filters() {
  return (
    <FlatList 
      data={[]}
      renderItem={() => <View />}
    />
  )
}