import Card from 'react-bootstrap/Card';

const Post = ({id, title, body}) => {
  return (
    <>
      <Card style={{ width: '18rem', height: '9rem' }}>
      <Card.Body key={id}>
        <Card.Title>Post {id} : {title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Post;
