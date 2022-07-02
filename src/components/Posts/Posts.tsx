import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Community } from "../../atoms/communitiesAtom";
import { Post } from "../../atoms/postsAtom";
import { firestore } from "../../firebase/clientApp";
import usePost from "../../hooks/usePost";

type PostsProps = {
  communityData: Community;
};

const Posts: React.FC<PostsProps> = ({ communityData }) => {
  // useAuthState
  const [loading, setLoading] = useState();
  const { postStateValue, setPostStateValue } = usePost();

  const getPosts = async () => {
    try {
      // get posts for this community
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );

      const postDoc = await getDocs(postQuery);

      // Store in post state
      const posts = postDoc.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
      console.log("posts", posts);
    } catch (error) {
      console.log("getPosts error", error.message);
    }
  };

  useEffect(() => {
    return () => {
      getPosts();
    };
  }, []);

  return <div>Posts</div>;
};
export default Posts;
