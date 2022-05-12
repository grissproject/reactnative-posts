import React from 'react';
import { Text, Loader, View, Icon } from '../common';
import { useUser, useTheme } from '../../hooks';

const UserPreview = ({ userId }) => {
  const { user, isLoading } = useUser(userId);
  const { colors, sizes } = useTheme();

  return (
    <View row>
      <Icon
        name="account-circle"
        color={colors.ligthGray}
        size={sizes.xxxl}
        style={{ marginRight: sizes.md }}
      />
      <View justifyCenter>
        {isLoading && <Loader />}

        {user && (
          <>
            <Text bold>{user.name}</Text>
            <Text mutted sm>
              {user.email}
            </Text>
            <Text mutted sm>
              {user.website}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default UserPreview;
