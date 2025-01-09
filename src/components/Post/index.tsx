import { View, Text, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

import { PostProps } from './post';
import { styles } from './styles';
import { theme } from '@/theme';

const { colors } = theme

type Props = {
  post: PostProps
}

export default function Post({ post }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: post.image}} style={styles.image} />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.White} />
      </View>
    </View>
  )
}