import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import './custom.css'


class SingleCard extends Component {
    constructor(props)
    {
      super();
  
    }
    render() {
      let launch =(this.props.data.launch_success)
        return (
            
            <Card class="card mb-2" >
       

         <Card.Body class="card-body">
         <Card.Img class="card-img-top mb-2" variant="top" style={{"backgroundColor":"#F0F0F0"}} src={this.props.image} /> 
        <Card.Title  class="card-title"style={{"color":"#191970"}} ><b>{this.props.data.mission_name +" "+this.props.data.flight_number}</b></Card.Title>
          <span class="card-text"><b>Mission Ids:</b> </span>
         
          {this.props.data.mission_id.map((data) => (
           <span style={{"color":"#4f86f7"}} > {data}</span> 
        ))}
        <br></br>

          <span><b>Launch Year:</b> </span>  <span style={{"color":"#4f86f7"}} > {this.props.data.launch_year}</span> 
        <br></br>
        <span><b>Successfull Launch: </b> </span> <span style={{"color":"#4f86f7"}} > {launch?"True":"False"}</span> 
        </Card.Body>
     
  
    </Card>
            
        );
    }
}

export default SingleCard;