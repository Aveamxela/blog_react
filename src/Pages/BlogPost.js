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

    return (
        <>
        {/* Créer un composant post avec titre etc + style */}
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}/edit`}>
                <button>Edit</button>
            </Link>
        </>
    );
};

export default BlogPost;
