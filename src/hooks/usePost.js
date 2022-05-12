import PostModelContext, { PostModel } from '../storage/PostModel';

const usePost = (id) => {
  const { useRealm, useObject } = PostModelContext;
  const post = useObject(PostModel, id);
  const realm = useRealm();

  const toggleFavorite = () => {
    realm.write(() => {
      post.favorite = !post.favorite;
    });
  };

  const remove = () => {
    realm.write(() => {
      realm.delete(post);
    });
  };

  return { post, toggleFavorite, remove };
};

export default usePost;
