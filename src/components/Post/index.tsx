import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { PostProps } from './post';
import { styles } from './styles';
import { theme } from '@/theme';

const { colors } = theme

type Props = {
  post: PostProps
}

export default function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (post.image) {
      Image.getSize(post.image, (width, height) => {
        setAspectRatio(width / height);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: post.image}} style={[styles.image, {aspectRatio}]} />

      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={colors.White} />
      </View>
    </View>
  )
}