import { View, Text, PressableProps, Pressable } from 'react-native'
import React from 'react'
import { FilterProps } from './filter'
import { styles } from './styles'

export default function Filter({ title, selected, ...rest}: PressableProps & FilterProps) {
  return (
    <Pressable style={[styles.pressable, selected && styles.pressableSelected]} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}