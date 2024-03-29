import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import BlogPost from "../Pages/BlogPost";
import EditBlogPost from "../Pages/EditBlogPost";
import DeleteBlogPost from "../Pages/DeleteBlogPost";
import Layout from "../components/Layout";

// const postsSaved = JSON.parse(localStorage.getItem('PostInfosTest'));
// const posts = postsSaved.slice(0, 100);

// console.log({posts})

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/post/:id",
                element: <BlogPost />,
            },
            {
                path: "/post/:id/edit",
                element: <EditBlogPost />,
            },
            {
                path: "/post/:id/delete",
                element: <DeleteBlogPost />,
            },
        ],
    },
]);
