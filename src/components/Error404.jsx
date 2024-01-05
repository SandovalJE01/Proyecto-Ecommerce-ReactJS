import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Error404 = () => {

  return (
    <Container style={{textAlign: "Center", marginTop: "120px"}}>
      <Card.Title style={{fontSize: "80px", color: "white"}}>Ooops!</Card.Title>
      <Card.Text style={{fontSize: "32px", color: "white"}}>Página no encontrada</Card.Text>
      <Link to={'/'}>
        <Button variant="dark" style={{fontSize: "90%"}}>HOME</Button>
      </Link>
    </Container>
  )

}