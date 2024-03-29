import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
import BlogPost from "../components/BlogPost"
import EditBlogPost from "../components/EditBlogPost";
import DeleteBlogPost from "../components/DeleteBlogPost";
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
