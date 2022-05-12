import React from 'react';
import { ActionsMenu } from '../components/common';
import { usePosts } from '../hooks';

const HeaderActions = ({ navigation }) => {
  const { reload, removeAll } = usePosts();

  return (
    <ActionsMenu>
      <ActionsMenu.MenuItem title="Reload" onPress={reload} />
      <ActionsMenu.MenuItem title="Delete all" onPress={removeAll} />
    </ActionsMenu>
  );
};

export default HeaderActions;
