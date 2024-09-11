import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


const card = ({title , description }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1709311452427-fff3030eabbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
  )
}

export default card