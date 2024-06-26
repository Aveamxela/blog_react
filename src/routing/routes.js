import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import BlogPost from "../Pages/BlogPost"
import DeleteBlogPost from "../Pages/DeleteBlogPost";
import Layout from "../components/Layout";

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
                path: "/post/:id/delete",
                element: <DeleteBlogPost />,
            },
        ],
    },
]);
