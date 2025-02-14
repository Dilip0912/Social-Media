import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListContext } from "../store/PostListContext";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fetching } = useContext(postListContext);
  // console.log(postList);

  const handleMyPost = () => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then(data=> addMyPosts(data.posts));
  };
  // console.log(postList);
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <EmptyMessage />}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
}

export default PostList;
