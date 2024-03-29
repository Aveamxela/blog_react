import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditBlogPost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { id } = useParams();

    return (
        <>
            <h1>Test edit blog post</h1>
        </>
    );
};

export default EditBlogPost;
