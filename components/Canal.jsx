import { Link } from "react-router-dom"
import { Button, Card, Image, Badge } from "react-bootstrap"

export function Canal({canal}){
    
    return(
      
           <Card className="canal">
            <Badge bg="secondary">{canal.categoria}</Badge>
            <Card.Title> <h1>{canal.title}</h1></Card.Title>
          
            <Card.Body><Image src={canal.logo}></Image></Card.Body>
            <Card.Footer><Button><Link className="link" to={`/canales/${canal.nombre}`}>Ver canal</Link></Button></Card.Footer>
           </Card>
          
      
    )
}