import { useWindowDimensions, View } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';
import Animated, 
{ 
  runOnJS,
  SlideInDown,
  useAnimatedStyle, 
  useSharedValue, 
  withSequence, 
  withTiming 
} from 'react-native-reanimated';

import { Skeleton } from 'moti/skeleton';

import { styles } from './styles';
import { theme } from '@/theme';

const { colors } = theme;

export default function Splash() {
  const logoScale = useSharedValue(1);
  const logoPositionY = useSharedValue(0);
  const contentDisplay = useSharedValue(0);
  
  const dimensions = useWindowDimensions();

  const skeletonColor = [
    colors.Gray[600],
    colors.Gray[700],
    colors.Gray[800],
    colors.Black,
    colors.Gray[800],
    colors.Gray[700],
    colors.Gray[600],
  ]

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
      { translateY: logoPositionY.value }
    ]
  }));
  
  const contentAnimatedStyle = useAnimatedStyle(() => ({
    display: contentDisplay.value === 1 ? "flex" : "none"
  }));

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (isFinished) => {
        if (isFinished) {
          logoPositionY.value = withSequence(
            withTiming(50, undefined ,  () => contentDisplay.value = 1), 
            withTiming(-dimensions.height, { duration: 400 }),
          )
          runOnJS(onEndSplash)();
        }
      }),

    );
  };

  function boxes(colums: "right" | "left") {
    const rest = colums === "left" ? 0 : 1;
    return Array.from({length: 10})
    .filter((_, index) => index % 2 === rest)
    .map((_, index) => {
      const height = index %2 === (colums === "left" ? 0 : 1) ? 200 : 300;
      return (
        <Animated.View 
          key={index}
          style={[styles.box, { height }]}
        >
          <Skeleton 
            colors={skeletonColor}
            width="100%"
            height={height}
          />
        </Animated.View>
      )
    })
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push("/(tabs)/")
    }, 2000);
  }

  function filters(){
    return Array.from({length: 10})
    .map((_, index) => (
      <Skeleton 
        key={index}
        colors={skeletonColor}
        width={60}
        height={26}
        radius={6}
      />
    ))
  }

  useEffect(() => {
    logoAnimation();
  },[])
  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('@/assets/logo.png')} 
        style={[styles.image, logoAnimatedStyle]} 
      />

      <Animated.View 
        style={[styles.content, contentAnimatedStyle]}
        entering={SlideInDown.duration(700)}
      >
        <View style={styles.filters}>
          {filters()}
        </View>
        <View style={styles.boxes}>
          <View style={styles.column}>
            {boxes("left")}
          </View>
          <View style={styles.column}>
            {boxes("right")}
          </View>
        </View>
        </Animated.View>
    </View>
  )
}

