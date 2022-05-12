import React, { useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useTheme } from '../../hooks';
import View from './View';
import Text from './Text';
import Icon from './Icon';

const SwipeableListItem = ({
  id,
  title,
  icon,
  onSwipeFromLeft,
  leftActionTitle,
  rightAction,
  onPress,
  height,
}) => {
  const swipeableRef = useRef(null);
  const { colors, sizes } = useTheme();
  const styles = makeStyles({ colors, sizes, height });

  const LeftActions = () => (
    <View style={styles.actionLeftContainer}>
      <Text white padding>
        {leftActionTitle}
      </Text>
    </View>
  );

  const RightActions = () => (
    <TouchableOpacity onPress={rightAction} style={styles.actionRightContainer}>
      <Text white padding>
        Delete
      </Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable
      ref={swipeableRef}
      renderLeftActions={LeftActions}
      renderRightActions={RightActions}
      onSwipeableLeftOpen={() => {
        swipeableRef.current.close();
        onSwipeFromLeft();
      }}
    >
      <TouchableHighlight onPress={onPress} underlayColor={colors.ligthGray}>
        <View style={styles.itemContainer}>
          <View style={styles.icon}>{icon && icon}</View>

          <Text style={styles.title}>{title}</Text>

          {Platform.OS === 'ios' && (
            <>
              <Text style={styles.identifier}>{id}</Text>
              <View style={styles.chevron}>
                <Icon name="chevron-right" color={colors.gray} />
              </View>
            </>
          )}
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />
    </Swipeable>
  );
};

export default SwipeableListItem;

const makeStyles = ({ colors, sizes, height }) =>
  StyleSheet.create({
    itemContainer: {
      flex: 1,
      height: height - 1,
      flexDirection: Platform.OS === 'ios' ? 'row' : 'row-reverse',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    icon: {
      width: sizes.xxl,
      alignItems: 'center',
    },
    title: {
      flex: 1,
      paddingLeft: Platform.OS === 'ios' ? 0 : sizes.md,
    },
    chevron: {
      width: sizes.lg,
    },
    identifier: {
      height: sizes.md,
      width: sizes.md,
      backgroundColor: colors.ligthGray,
      borderRadius: sizes.sm,
      fontSize: 11,
      textAlign: 'center',
      overflow: 'hidden',
      paddingTop: 0.5,
      color: colors.mutted,
    },
    actionLeftContainer: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      borderBottomColor: colors.white,
      borderBottomWidth: 1,
    },
    actionRightContainer: {
      backgroundColor: colors.red,
      justifyContent: 'center',
    },
    separator: {
      flex: 1,
      backgroundColor: colors.border,
      marginLeft: Platform.OS === 'ios' ? sizes.xxl : 0,
      height: 1,
    },
  });
