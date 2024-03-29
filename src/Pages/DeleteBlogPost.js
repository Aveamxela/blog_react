import { useEffect, useState } from "react";
import FetchPostId from "../components/FetchPostId";
import { useParams } from "react-router";

const DeleteBlogPost = () => {
   const { id } = useParams();
   const [post, setPost] = useState({});

   useEffect(() => {
       FetchPostId(id, "GET").then((post) => {
           setPost(post);
       });
   }, [id]);

   function save() {
        FetchPostId(id, "DELETE").then((post) => {
            setPost(post);
        });
    }

    const handleClick = (e) => {
      save();
      console.log('Post deleted');
    };

    console.log(post);

  return (
      <>
          <h1>Test delete blog post</h1>
          <p>You're about to delete post {id} : {post.title} </p>
          <p>Are you sure ?</p>
          <button onClick={handleClick}>Yes, delete</button>
      </>
  );
}

export default DeleteBlogPost;
