import { useContext } from "react";
import Post from "./Post";
import { postListContext } from "../store/PostListContext";

function PostList() {
  const {postList}=useContext(postListContext);
  // console.log(postList);  
  return (
    <>
      {postList.map(post=><Post key={post.id} post={post}></Post>)}
    </>
  );
}

export default PostList;
