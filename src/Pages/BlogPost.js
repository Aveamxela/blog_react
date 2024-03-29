import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FetchPostId from "../components/FetchPostId";

const BlogPost = () => {
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
      const confirmDelete = window.confirm(`You're about to delete post ${post.id}. Are you sure ?`);
      if (confirmDelete) {
        save();
        console.log('Post deleted');
      }
    };

    console.log(post);


    return (
        <>
        {/* Créer un composant post avec titre etc + style */}
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleClick}>Delete</button>

        </>
    );
};

export default BlogPost;
