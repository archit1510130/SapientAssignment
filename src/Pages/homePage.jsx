import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LaunchYearRow from "../components/customComponents/LaunchYearRow";
import FilterComponent from "../components/filterComponent";
import ShowInfo from '../components/showInfo';
import { connect } from 'react-redux'
import * as actions from '../redux/homeData/homePageActions';


class homePage extends Component {

  constructor(props)
  {
    super();

  }

  componentWillMount=()=>{

    console.log("Conponet Called")
    this.props.getDefault()

  }

  render() {
    let data=this.props.data

    
    return (
      <>
        <div className="container-fluid ">
        <h2 class="pl-2 head">SpaceX Launch Programs</h2>
          <div class="row">
            <FilterComponent></FilterComponent>
            <div class="col-lg-9 col-xl-10 col-md-8 col-sm-12" style={{ backgroundColor: "#F0F0F0" }}>

          <div class="row">
            {data.map((data) => (
          <ShowInfo data={data} />
        ))}
        </div>
              
              

            </div>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    data: state.home.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDefault: () => dispatch(actions.fetchDefaultData())
  }
}






export default connect(mapStateToProps,mapDispatchToProps) (homePage);
