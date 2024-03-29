// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const [postInfo, setPostInfo] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const FetchPostId = async(id, method) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Issue with the response");
      }

      const postInfo = await response.json();
      setPostInfo(postInfo);

    } catch (error) {
      console.log("Error :", error);
    }}

    FetchPostId(id, "GET");
  }, []);

  console.log(postInfo);

  return (
    <>
        <h1> Post {id} </h1>
        <li key={postInfo.id}>
          <p>{postInfo.title}</p>
          <p>{postInfo.body}</p>
          <Link to={`/post/${id}/edit`}>Edit</Link>
          <Link to={`/post/${id}/delete`}>Delete</Link>
        </li>
    </>
  );
}


export default BlogDetails;
