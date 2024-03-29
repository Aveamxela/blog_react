import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchPostId from "../components/FetchPostId";
import EditBlogPost from "../components/EditBlogPost";

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        FetchPostId(id, "GET").then((post) => {
            setPost(post);
        });
    }, [id]);

const handleChange = (name, value) => {
    setPost((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    console.log(name, value)
};

    function save() {
        FetchPostId(id, "PUT").then((updatedPost) => {
            setPost(updatedPost);
            console.log({post})
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        save()
        alert(`Votre post a bien été modifié !`);
    };
    return (
        <>
            {/* Créer un composant post avec titre etc + style */}
            <h1>Post {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button>Edit</button>
            <EditBlogPost
                onSubmit={handleSubmit}
                // Revoir onEdit
                onEditTitle={(value) => handleChange("title", value)}
                onEditBody={(value) => handleChange("body", value)}
                titleValue={post.title}
                bodyValue={post.body}
            />
        </>
    );
};

export default BlogPost;
