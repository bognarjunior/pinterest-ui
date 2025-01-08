import { View } from 'react-native'
import React, { useState } from 'react'

import Filters from '@/components/Filters';
import { FILTERS } from '@/utils/filters';

import { styles } from './styles';

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter}/>
    </View>
  )
}