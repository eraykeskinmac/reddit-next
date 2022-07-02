import { useRecoilState } from "recoil";
import { postState } from "../atoms/postsAtom";

const usePost = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = async () => {};

  const onDeletePost = async () => {};

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
export default usePost;
