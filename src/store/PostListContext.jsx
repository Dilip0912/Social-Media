import { createContext, useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList=currentPostList;
  if(action.key==="Delete_Post"){
    newPostList=currentPostList.filter(post=>post.id!==action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer,Default_Post_List);

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      key:"Delete_Post",
      payload:{
        postId,
      }
    })
  };

  return (
    <postListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </postListContext.Provider>
    // <postListContext.provider value={{postList,addPost,deletePost}}>{children}</postListContext.provider>
  );
};

const Default_Post_List = [
  {
    id: "1",
    title: "Going To Mahakumbh",
    body: "I am Going to Prayagraj",
    reactions: "2",
    userId: "user-2",
    tags: ["UP", "Hindu"],
  },
  {
    id: "2",
    title: "Going to Ladakh",
    body: "I am Going to Ladakh",
    reactions: "100",
    userId: "user-1",
    tags: ["Leh", "Nubra"],
  },
];
export default PostListProvider;
