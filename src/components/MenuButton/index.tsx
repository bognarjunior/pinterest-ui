import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '@/theme';

import { MenuButtonProps } from './menuBotton';

const { colors } = theme;

export default function MenuButton({title, icon}: MenuButtonProps) {
  return (
    <Pressable style={styles.container}>
      <FontAwesome name={icon} size={32} color={colors.White} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}