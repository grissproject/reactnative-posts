import React, { useState, createContext, useContext } from 'react';
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useTheme } from '../../hooks';
import View from './View';
import Text from './Text';
import Icon from './Icon';

const ActionsMenuContext = createContext();

const ActionsMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [onCloseCallback, setOnCloseCallback] = useState(() => () => {});
  // TODO: Implement the logic to detect the correct place to render the menu.
  const menuXYPosition = [12, 50];

  const closeModal = (callback) => {
    setOnCloseCallback(() => () => callback && callback());

    setIsOpen(false);
  };

  return (
    <ActionsMenuContext.Provider value={{ closeModal }}>
      <Modal
        transparent
        visible={isOpen}
        animationType="fade"
        onDismiss={onCloseCallback}
      >
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View flex>
            <View
              style={{ right: menuXYPosition[0], top: menuXYPosition[1] }}
              absolute
              shadow
              rounded
            >
              {children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon.Button name="more-vert" onPress={() => setIsOpen(true)} />
    </ActionsMenuContext.Provider>
  );
};

const MenuItem = ({ title, onPress }) => {
  const { colors, sizes } = useTheme();
  const styles = makeStyles({ colors, sizes });
  const { closeModal } = useContext(ActionsMenuContext);

  const handleOnPress = () => {
    closeModal(onPress);

    // Calling the callback from here causes an issue with the Modal on iOS. So we exec it only for android.
    // Modal's "onDismiss" event will take care of the callback on iOS (this event is only available for iOS).
    if (Platform.OS === 'android') {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handleOnPress}
      style={styles.menuItem}
      activeOpacity={0.8}
    >
      <Text white sm>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

ActionsMenu.MenuItem = MenuItem;

export default ActionsMenu;

const makeStyles = ({ colors, sizes }) =>
  StyleSheet.create({
    menuItem: {
      paddingVertical: 12,
      backgroundColor: colors.darkGray,
      paddingHorizontal: sizes.xxl,
    },
  });
