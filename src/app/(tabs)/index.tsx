import { View } from 'react-native'
import React from 'react'

import { styles } from './styles';
import Filter from '@/components/Filter';

export default function Home() {
  return (
    <View style={styles.container}>
      <Filter title="Todos" selected />
    </View>
  )
}