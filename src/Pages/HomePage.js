import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Post from "../components/Post";

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
          <Container>
            <h1 className="mb-4">Blog Posts</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
              {posts.map((post, index) => {
                  return (
                      <>
                        <Col key={index} className="m-2">
                          <Post id={post.id} title={post.title}/>
                          <Link to={`post/${post.id}`}>
                            <Button variant="primary" className="mt-2">More info</Button>
                          </Link>
                        </Col>
                      </>
                  );
              })}
              </Row>
          </Container>
        </>
    );
}

export default HomePage;
