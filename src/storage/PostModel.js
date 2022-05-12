import { Realm, createRealmContext } from '@realm/react';

export class PostModel extends Realm.Object {
  static generate(post) {
    return {
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId,
      favorite: false,
    };
  }

  static schema = {
    name: 'Post',
    primaryKey: 'id',
    properties: {
      id: 'int',
      title: 'string',
      body: 'string',
      userId: 'int',
      favorite: { type: 'bool', default: false },
    },
  };
}

const config = {
  schema: [PostModel],
};
export default createRealmContext(config);
