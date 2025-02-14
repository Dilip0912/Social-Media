import { useContext, useEffect, useRef } from "react";
import { postListContext } from "../store/PostListContext";

function CreatePost() {
  const uerIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const hashtagsElement = useRef();

  const { addPost } = useContext(postListContext);

  const handleOnPost = (event) => {
    event.preventDefault();
    const userId = uerIDElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const hashtags = hashtagsElement.current.value.split(",");

    // uerIDElement.current.value = " ";
    // titleElement.current.value = " ";
    // bodyElement.current.value = " ";
    // reactionElement.current.value = " ";
    // hashtagsElement.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reaction,
        userId: 5,
        tags: hashtags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addPost(data);
      });
  };

  return (
    <form className="create-post" onSubmit={handleOnPost}>
      <div class="mb-3">
        <label htmlFor="userId" class="form-label">
          Enter You UserId
        </label>
        <input
          type="text"
          ref={uerIDElement}
          className="form-control"
          id="user-Id"
          placeholder="Your User Id"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="title" class="form-label">
          Enter You title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
          placeholder="Your title"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="body" class="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          rows={3}
          className="form-control"
          id="body"
          placeholder="Explain your Post"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="reactions" class="form-label">
          Reactions count
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reactions"
          placeholder="How many peoples reacted"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="tags" class="form-label">
          Enter You Hashtags
        </label>
        <input
          type="text"
          ref={hashtagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags using space"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreatePost;
