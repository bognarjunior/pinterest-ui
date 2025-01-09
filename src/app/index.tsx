import { useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, 
{ 
  useAnimatedStyle, 
  useSharedValue, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated';

import { styles } from './styles';

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  
  const dimensions = useWindowDimensions();

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value }
    ]
  }));

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (isFinished) => {
        if (isFinished) {
          logoPositionY.value = withSequence(
            withTiming(50), 
            withTiming(-dimensions.height, { duration: 1000 }),
          );
        }
      }),

    );
  };

  useEffect(() => {
    logoAnimation();
  },[])
  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('@/assets/logo.png')} 
        style={[styles.image, logoAnimatedStyle]} 
      />
    </View>
  )
}

