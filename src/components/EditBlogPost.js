import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditBlogPost = () => {
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

    FetchPostId(id, "PUT");
  }, []);

  console.log(postInfo)

  return (
    <>
        <h1> Edit Post {id} </h1>
    </>
  );

}

export default EditBlogPost;
