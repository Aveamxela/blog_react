import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogPost = ({ idPost, title, body }) => {
  const {id} = useParams();

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
      console.log({postInfo});
      return postInfo;

    } catch (error) {
      console.log("Error :", error);
    }

  };

  FetchPostId(idPost, "GET");

  return (
      <>
          <h1> Post {idPost} {id} </h1>
          <li key={idPost}>
              <Link to={`post/${idPost}`}>{title}</Link>
          </li>
      </>
  );
}

export default BlogPost;
