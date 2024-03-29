import { useState, useEffect } from 'react';

const url = 'https://jsonplaceholder.typicode.com/posts';

function HomePage() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    // @TODO - fetching post blogs from the server...
    const fetchData = () => {
      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Issue with the response');
        }
        return response.json();
      })
      .then(postsData => {
        setPosts(postsData);
      })
      .catch(error => {
        console.log('Error :', error)
      })
    }
    fetchData();
    // @HINT - once we got the data, it's maybe time to provoke a rerender...
  }, []);
  // pay attention on how to use carefully useEffect, don't hesitate to log !
  console.log(posts);
  
  return (
    <>
      <h1>Blog posts</h1>
      <p>...</p>
    </>
  );
}

export default HomePage;
