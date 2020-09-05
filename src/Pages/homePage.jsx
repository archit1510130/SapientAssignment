import React, { Component } from "react";
import ShowInfo from "../components/showInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './home.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
import LaunchYearRow from '../components/customComponents/LaunchYearRow';

class homePage extends Component {
  render() {
    return (
      <>

<div className="container mt-5">
  <div class="row">
    <div class="col-md-3 sm-12 bg-grey">
      <div>
    <h3>Launch Year</h3>
     <LaunchYearRow></LaunchYearRow>
    
     <LaunchYearRow></LaunchYearRow>
   
     <LaunchYearRow></LaunchYearRow>

     <LaunchYearRow></LaunchYearRow>
     
     <LaunchYearRow></LaunchYearRow>
     <LaunchYearRow></LaunchYearRow>
     <LaunchYearRow></LaunchYearRow>
      </div>
     
      <div>
    <h4>Successfull Launch</h4>
    <LaunchYearRow></LaunchYearRow>
      </div>
     
      <div>
    <h4>SuccessFull Landing</h4>
    <LaunchYearRow></LaunchYearRow>
      </div>


    </div>


    <div class="col-md-9  sm-12" style={{"backgroundColor":"#F0F0F0"}}>

    <CardDeck className="mb-4">
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
  
  <Card>
    <Card.Img variant="top" style={{"backgroundColor":"lightgray"}}src="holder.js/50px50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
    <Card.Img variant="top" style={{"backgroundColor":"lightgray"}}src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  
  </Card>

</CardDeck>

<CardDeck className="mt-4">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/50px50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
   <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="holder.js/50px50" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
</CardDeck>
   
   
 
  
    </div>
  </div>
  
</div>

      </>
    );
  }
}

export default homePage;
