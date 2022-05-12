import React from 'react';
import { Text as RNText } from 'react-native';
import { useTheme } from '../../hooks';

const Text = ({
  style,
  white,
  mutted,
  h1,
  h2,
  h3,
  sm,
  bold,
  padding,
  center,
  children,
  ...props
}) => {
  const { colors, sizes } = useTheme();

  const styles = [
    { color: colors.text, fontSize: sizes.md },
    h1 && { fontSize: sizes.h1, fontWeight: 'bold', marginBottom: sizes.sm },
    h2 && { fontSize: sizes.h2, fontWeight: 'bold', marginBottom: sizes.sm },
    h3 && { fontSize: sizes.h3, fontWeight: 'bold', marginBottom: sizes.sm },
    sm && { fontSize: sizes.textsm },
    white && { color: colors.white },
    mutted && { color: colors.mutted },
    bold && { fontWeight: 'bold' },
    padding && { padding: sizes.md },
    center && { textAlign: 'center' },
    style,
  ];

  return (
    <RNText style={styles} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
