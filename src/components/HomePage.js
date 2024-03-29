import { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function HomePage() {
  useEffect(() => {
    // @TODO - fetching post blogs from the server...
    //
    // @HINT - once we got the data, it's maybe time to provoke a rerender...
  });
  // pay attention on how to use carefully useEffect, don't hesitate to log !
const posts = [
    { id: 1, title: "Premier Post" },
    { id: 2, title: "Deuxième Post" },
    // ...
];
  return (
      <>
          <h1>Blog posts</h1>
          {posts.map((post) => (
              <li key={post.id}>
                  <Link to={`post/${post.id}`}>{post.title}</Link>
              </li>
          ))}
          <Button>est composantreact bootstrap</Button>
      </>
  );
}

export default HomePage;
