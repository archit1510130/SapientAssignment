import React, { Component } from 'react';
import SingleCard from "../components/customComponents/SingleCard";
import CardDeck from "react-bootstrap/CardDeck";

class showInfo extends Component {
    render() {
        return (
            < >
               
               <CardDeck className="mt-4">
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
                <SingleCard></SingleCard>
              </CardDeck>
                
            </>
        );
    }
}

export default showInfo;
