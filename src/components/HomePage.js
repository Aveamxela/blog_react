import {useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import BlogPost from './BlogPost';
// import { Link } from 'react-router-dom';

const url = "https://jsonplaceholder.typicode.com/posts";

function HomePage() {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
      // @TODO - fetching post blogs from the server...
      const fetchData = () => {
          fetch(url)
              .then((response) => {
                  if (!response.ok) {
                      throw new Error("Issue with the response");
                  }
                  return response.json();
              })
              .then((postsData) => {
                  setPosts(postsData);
              })
              .catch((error) => {
                  console.log("Error :", error);
              });
      };
      fetchData();
      // @HINT - once we got the data, it's maybe time to provoke a rerender...
  }, []);
  // pay attention on how to use carefully useEffect, don't hesitate to log !

  return (
      <>
          <h1>Blog posts</h1>
          {posts.map((post, index) => {
            return <BlogPost key={index} idPost={post.id} title={post.title} body={post.body} />
          })}
          <Button>est composantreact bootstrap</Button>
      </>
  );
}

export default HomePage;
