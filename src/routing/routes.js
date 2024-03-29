import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/HomePage";
// import BlogPost from "../components/BlogPost"
import EditBlogPost from "../components/EditBlogPost";
import DeleteBlogPost from "../components/DeleteBlogPost";
import Layout from "../components/Layout";
import BlogDetails from "../components/BlogDetail";


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
                element: <BlogDetails />,
            },
            {
                path: "post/:id/edit",
                element: <EditBlogPost />,
            },
            {
                path: "/post/:id/delete",
                element: <DeleteBlogPost />,
            },
        ],
    },
]);
