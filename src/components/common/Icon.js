import React from 'react';
import { Platform } from 'react-native';
import RNIcon from 'react-native-vector-icons/dist/MaterialIcons';
import { useTheme } from '../../hooks';

const Icon = ({ primary, white, size = 24, ...props }) => {
  const { colors } = useTheme();

  let color = colors.text;
  if (primary) {
    color = colors.primary;
  }
  if (white) {
    color = colors.white;
  }

  return <RNIcon color={color} size={size} {...props} />;
};

Icon.Button = ({
  iconStyle,
  color = 'white',
  backgroundColor = 'transparent',
  size = 24,
  ...props
}) => (
  <RNIcon.Button
    color={color}
    backgroundColor={backgroundColor}
    size={size}
    iconStyle={[{ marginRight: 0 }, { ...iconStyle }]}
    underlayColor={
      Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.2)' : 'transparent'
    }
    {...props}
  />
);

export default Icon;
