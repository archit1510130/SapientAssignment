import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class SingleCard extends Component {
    render() {
        return (
            <>
            <Card>
         <div className="p-3">
        <Card.Img variant="top" style={{"backgroundColor":"#F0F0F0"}} src="https://images2.imgbox.com/40/e3/GypSkayF_o.png" />
         <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
        </Card.Body>
        </div>
  
    </Card>
            </>
        );
    }
}

export default SingleCard;