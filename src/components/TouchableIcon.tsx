import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const TouchableIcon = ({name, color, size, onPress}: Props) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  const changeFavoriteIconOnPress = () => changeFavoriteIcon(name);

  return (
    <TouchableOpacity onPress={onPress ? onPress : changeFavoriteIconOnPress}>
      <Icon
        name={name}
        size={size ? size : 65}
        color={color ? color : colors.primary}
      />
    </TouchableOpacity>
  );
};
