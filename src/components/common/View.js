import React from 'react';
import { View as RNView } from 'react-native';
import { useTheme } from '../../hooks';

const View = ({
  style,
  flex,
  row,
  padding,
  margin,
  marginRight,
  justifyCenter,
  alignCenter,
  bgWhite,
  bgDark,
  absolute,
  separator,
  shadow,
  rounded,
  card,
  children,
  ...props
}) => {
  const { colors, sizes } = useTheme();

  const styles = [
    flex && { flex: 1 },
    row && { flexDirection: 'row' },
    padding && { padding: sizes.md },
    margin && { margin: sizes.md },
    marginRight && { marginRight: sizes.md },
    justifyCenter && { justifyContent: 'center' },
    alignCenter && { alignItems: 'center' },
    bgWhite && { backgroundColor: colors.white },
    bgDark && { backgroundColor: colors.darkBg },
    absolute && { position: 'absolute' },
    separator && { borderBottomColor: colors.border, borderBottomWidth: 1 },
    card && { margin: sizes.sm },
    (shadow || card) && {
      shadowColor: colors.darkBg,
      shadowOffset: { width: 1, height: 3 },
      shadowRadius: colors.sm,
      shadowOpacity: 0.1,
      elevation: 2,
    },
    (rounded || card) && { borderRadius: sizes.sm, overflow: 'hidden' },
    style,
  ];

  return (
    <RNView style={styles} {...props}>
      {children}
    </RNView>
  );
};

export default View;
