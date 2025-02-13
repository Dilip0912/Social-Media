import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListContext } from "../store/PostListContext";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addMyPosts } = useContext(postListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addMyPosts(data.posts);
        setFetching(false);
      });
  }, []);
  const handleMyPost = () => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then(data=> addMyPosts(data.posts));
  };
  // console.log(postList);
  return (
    <>
      {fetching && <LoadingSpinner/>}
      {!fetching&&postList.length === 0 && <EmptyMessage />}
      {!fetching&&postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}

export default PostList;
