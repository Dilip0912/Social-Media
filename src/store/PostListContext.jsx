import { createContext, useReducer } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addMyPosts: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "Delete_Post") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type === "Add_MyPosts"){
    newPostList=action.payload.MyPosts;
  } 
  else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, title, body, reaction, hashtags) => {
    dispatchPostList({
      type: "Add_Post",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reaction,
        userId: userId,
        tags: hashtags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };
  const addMyPosts=(MyPosts)=>{
    // console.log(MyPosts);
    dispatchPostList({
      type:"Add_MyPosts",
      payload:{
        MyPosts,
      }
    })
  }

  return (
    <postListContext.Provider
      value={{ postList, addPost, deletePost, addMyPosts }}
    >
      {children}
    </postListContext.Provider>
    // <postListContext.provider value={{postList,addPost,deletePost}}>{children}</postListContext.provider>
  );
};

// const Default_Post_List = [
//   {
//     id: "1",
//     title: "Going To Mahakumbh",
//     body: "I am Going to Prayagraj",
//     reactions: "2",
//     userId: "user-2",
//     tags: ["UP", "Hindu"],
//   },
//   {
//     id: "2",
//     title: "Going to Ladakh",
//     body: "I am Going to Ladakh",
//     reactions: "100",
//     userId: "user-1",
//     tags: ["Leh", "Nubra"],
//   },
// ];
export default PostListProvider;
