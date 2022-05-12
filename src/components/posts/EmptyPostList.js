import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Text, View } from '../common';
import { useTheme } from '../../hooks';

const EmptyPostList = () => {
  const { colors, sizes } = useTheme();
  const styles = makeStyles({ colors, sizes });

  return (
    <View style={styles.container} alignCenter>
      <Icon
        name="inbox"
        color={colors.gray}
        size={sizes.xxxl}
        style={{ marginBottom: sizes.md }}
      />
      <Text h1 mutted center>
        Sorry, no posts to show...
      </Text>
      <Text style={styles.hireMe} center>
        (Probably you want to hire me to fix this issue)
      </Text>
    </View>
  );
};

export default EmptyPostList;

const makeStyles = ({ colors, sizes }) =>
  StyleSheet.create({
    container: {
      paddingVertical: sizes.xxxl,
    },
    hireMe: { // <-----
      color: colors.gray,
      fontSize: 13,
    },
  });
