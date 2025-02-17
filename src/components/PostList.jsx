import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postListContext } from "../store/PostListContext";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const [delId,setDelId]=useState([]);
  // const delId=[];
  console.log(delId);
  const { postList } = useContext(postListContext);
  let postListFromLoader = useLoaderData();
  // console.log(deletePostId[0]);
  delId.map(delId=>{postListFromLoader=postListFromLoader.filter(post=>post.id!==delId)})
  
  const finalPostList=[...postList,...postListFromLoader];


  const handleMyPost = () => {
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then(data=> addMyPosts(data.posts));
  };
  // console.log(postList);
  return (
    <>
      {/* {fetching && <LoadingSpinner />} */}
      {finalPostList.length === 0 && <EmptyMessage />}
      {
        finalPostList.map((post) => <Post key={post.id} post={post} delId={delId} setDelId={setDelId}></Post>)}
    </>
  );
}

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
