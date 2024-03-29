import Button from "react-bootstrap/Button";
import BlogPost from "./components/BlogPost";
import EditBlogPost from "./components/EditBlogPost";
import DeleteBlogPost from "./components/DeleteBlogPost";

function App() {
    return (
        <>
            <h1>App</h1>
            <Button>
              Test composantreact bootstrap
            </Button>
            <BlogPost />
            <EditBlogPost />
            <DeleteBlogPost />
        </>
    );
}

export default App;
