import Card from 'react-bootstrap/Card';

const Post = ({id, title, body}) => {
  return (
    <>
      <Card style={{ width: '18rem', bg: 'black' }}>
      <Card.Body key={id}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Post;
