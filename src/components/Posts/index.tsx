import { View, Text } from 'react-native';
import React from 'react';

import { POSTS } from '@/utils/posts';

import Post from '@/components/Post';

import { styles } from './styles';
import { PostsProps } from './posts';
import { ScrollView } from 'react-native-gesture-handler';

export default function Posts({ post }: PostsProps) {

  function postsByColumns(column: "right" | "left") {
    const rest = column === "left" ? 0 : 1;

    return post.filter((_, index) => index % 2 === rest).map((post) => (
      <Post key={post.id} post={post} />
    ));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {postsByColumns("left")}
      </View>
    </ScrollView>
  )
}