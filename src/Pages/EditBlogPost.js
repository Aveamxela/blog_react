import { useEffect, useState } from "react";
import FetchPostId from "../components/FetchPostId";
import { useParams } from "react-router";

const EditBlogPost = () => {
     const { id } = useParams();
   const [post, setPost] = useState({});
   useEffect(() => {
       FetchPostId(id, "GET").then((post) => {
           setPost(post);
       });
   }, [id]);

   function save() {
        FetchPostId(id, "PUT").then((post) => {
            setPost(post);
        });
    }
  return (
    <>
    <h1>PAGE EDIT</h1>
  {/* Créer composant form */}
          <form>
            <input type="text" />
          </form>
          </>
  )
}

export default EditBlogPost;
