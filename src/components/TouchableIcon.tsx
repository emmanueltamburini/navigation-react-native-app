import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress: () => void;
}

export const TouchableIcon = ({name, color, size, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={name}
        size={size ? size : 65}
        color={color ? color : colors.primary}
      />
    </TouchableOpacity>
  );
};
