import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { postListContext } from "../store/PostListContext";

function Post({ post }) {
  const {deletePost}=useContext(postListContext);

  return (
    <div class="card Post-card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">
          {post.title}
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <TiDelete />
          </span>
        </h5>
        <p class="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary tag-span">{`#${tag}`}</span>
        ))}
      </div>
    </div>
  );
}

export default Post;
