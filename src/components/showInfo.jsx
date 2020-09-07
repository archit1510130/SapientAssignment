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
        console.log("jhere dfata")
        console.log(data)
        return (
            < >
               
               <div class="col-lg-4 col-xl-3 col-md-6 col-sm-12">

               {data.map((data) => (
          <SingleCard data={data}image={data.links.mission_patch} />
        ))}
        </div>
              
                
            </>
        );
    }
}

export default showInfo;
