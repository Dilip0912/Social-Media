import { createContext, useReducer,useState,useEffect } from "react";

export const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching:false,
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

  const addPost = (post) => {
    // console.log(post);
    dispatchPostList({
      type: "Add_Post",
      payload: 
        post,
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

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller=new AbortController();
    const signal=controller.signal;
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addMyPosts(data.posts);
        setFetching(false);
      });

    // return () => {
    //   console.log("Fetch Aborted")
    //   controller.abort();
    // };
  }, []);

  return (
    <postListContext.Provider
      value={{ postList, addPost, deletePost, fetching }}
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
