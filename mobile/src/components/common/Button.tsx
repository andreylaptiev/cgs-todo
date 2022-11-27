import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { button } from '../../styles/base';

type Props = {
  // eslint-disable-next-line no-unused-vars
  onPress: (event: GestureResponderEvent) => void
  title: string;
};

const Button = ({ onPress, title }: Props) => {
  return (
    <Pressable onPress={onPress} style={button.default}>
      <Text style={button.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
