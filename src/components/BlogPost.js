import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogPost = ({ idPost, title, body }) => {
  const {id} = useParams();

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
