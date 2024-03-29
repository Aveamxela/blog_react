import Button from "react-bootstrap/Button";
import BlogPost from "./components/BlogPost";
import EditBlogPost from "./components/EditBlogPost";
import DeleteBlogPost from "./components/DeleteBlogPost";
import HomePage from "./routing/HomePage";

function App() {
    return (
        <>
            <h1>App</h1>
            <HomePage />
            <Button>Test composantreact bootstrap</Button>
            <BlogPost />
            <EditBlogPost />
            <DeleteBlogPost />
        </>
    );
}

export default App;
