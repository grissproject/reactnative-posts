import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View, Icon } from '../components/common';
import { useTheme } from '../hooks';

const Header = ({ favorites }) => {
  const { images, colors } = useTheme();

  return (
    <View row>
      <Text h1 white>
        Posts
      </Text>

      {favorites ? (
        <Icon name="favorite" color={colors.primary} style={styles.icon} />
      ) : (
        <Image
          source={images.isologo}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  icon: {
    marginLeft: 4,
    width: 24,
    height: 24,
  },
});
