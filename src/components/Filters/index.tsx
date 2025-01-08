import { FlatList } from 'react-native';
import React from 'react';

import Filter from '@/components/Filter';
import { FiltersProps } from './filters';

import { styles } from './styles';

export default function Filters({filters, filter, onChange}: FiltersProps) {
  return (
    <FlatList 
      data={filters}
      keyExtractor={item => item}
      renderItem={
        ({item}) => <Filter title={item} selected={item === filter} onPress={() => onChange(item)} />
      }
      horizontal
      style={styles.filters}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  )
}