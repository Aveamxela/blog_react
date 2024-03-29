import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import BlogPost from "../components/BlogPost"
import EditBlogPost from "../components/EditBlogPost";
import DeleteBlogPost from "../components/DeleteBlogPost";
import Layout from "../components/Layout";

const postsSaved = JSON.parse(localStorage.getItem('PostInfosTest'));
const posts = postsSaved.slice(0, 100);


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage savedPosts={posts} />,
            },
            {
                path: "/post/:id",
                element: <BlogPost savedPosts={posts} />,
            },
            {
                path: "/post",
                element: <EditBlogPost />,
            },
            {
                path: "/post/:id/delete",
                element: <DeleteBlogPost />,
            },
        ],
    },
]);
