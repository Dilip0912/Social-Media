import { createContext, useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  return currentPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dipatchPostList] = useReducer(PostListReducer,Default_Post_List);

  const addPost = () => {};

  const deletePost = () => {};

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
