import React, { Component } from 'react';
import SingleCard from "../components/customComponents/SingleCard";
import CardDeck from "react-bootstrap/CardDeck";

class showInfo extends Component {
    constructor(props)
    {
      super();
  
    }
    render() {
        let data=this.props.data
        return (
            < >
               
               <CardDeck className="mt-4">

               {data.map((data) => (
          <SingleCard data={data}image={data.links.mission_patch} />
        ))}
              </CardDeck>
                
            </>
        );
    }
}

export default showInfo;
