import React from 'react';
import { Image } from 'react-native';

interface AvatarProps {
  src: string;
  style?: any;
  width?: number;
  height?: number;
}

export function Avatar({ src, style, width = 100, height = 100 }: AvatarProps) {
  return (
    <Image
      source={{ uri: src }}
      style={[{ width, height }, style]}
    />
  );
}
