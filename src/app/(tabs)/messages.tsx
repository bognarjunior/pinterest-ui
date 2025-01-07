import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './styles';

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages</Text>
    </View>
  )
}