import { useState, useEffect } from 'react';
import BlogPost from '../components/BlogPost';

const url = 'https://jsonplaceholder.typicode.com/posts';

function HomePage() {
  const [posts, setPosts] = useState();
  console.log(posts);

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
        let postInfos = JSON.parse(localStorage.getItem('PostInfosTest'));
        if(!postInfos) {
          postInfos = posts;
        } else {
          postInfos.push(posts);
        }
        localStorage.setItem('PostInfosTest', JSON.stringify(postInfos));
      })
      .catch(error => {
        console.log('Error :', error)
      })
    }
    fetchData();
    // @HINT - once we got the data, it's maybe time to provoke a rerender...
  }, []);
  // pay attention on how to use carefully useEffect, don't hesitate to log !

  const testPosts = [
    {
      id: 1,
      title: "Test",
      body: "Bla bla bla",
    },
    {
      id: 2,
      title: "Test2",
      body: "Bla2 bla bla",
    },
    {
      id: 2,
      title: "Test3",
      body: "Bla3 bla bla",
    },
  ]

  return (
    <>
      <h1>Blog posts</h1>
      <BlogPost posts={testPosts}/>
    </>
  );
}

export default HomePage;
