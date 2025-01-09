import { View, Text } from 'react-native';
import React from 'react';

import Post from '@/components/Post';

import { PostsProps } from './posts';
import { ScrollView } from 'react-native-gesture-handler';

import { styles } from './styles';

export default function Posts({ post }: PostsProps) {

  function postsByColumns(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;

    return post.filter((_, index) => index % 2 === rest).map((post) => (
      <Post key={post.id} post={post} />
    ));
  }

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      <View style={styles.container}>
        <View style={styles.column}>
          {postsByColumns("left")}
        </View>
        <View style={styles.column}>
          {postsByColumns("right")}
        </View>
      </View>
    </ScrollView>
  )
}