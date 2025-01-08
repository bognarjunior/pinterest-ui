import { View, Text } from 'react-native';
import React, { forwardRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { FontAwesome } from '@expo/vector-icons';

import { MenuProps } from './menu';

import { styles } from './styles';

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) =>{
  return (
    <BottomSheet 
      ref={ref} 
      index={0} 
      snapPoints={[0.01, 230]}
      backgroundStyle={styles.container}
      handleComponent={null}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome 
            style={styles.close} 
            name='close' 
            onPress={onClose} size={24} 
          />
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
      </View>
    </BottomSheet>
  )
})
