import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import LaunchYearRow from "../components/customComponents/LaunchYearRow";
import FilterComponent from "../components/filterComponent";
import ShowInfo from '../components/showInfo';


class homePage extends Component {
  render() {
    return (
      <>
        <div className="container mt-5">
          <div class="row">
            <FilterComponent></FilterComponent>
            <div class="col-md-9  sm-12" style={{ backgroundColor: "#F0F0F0" }}>

              <ShowInfo></ShowInfo>
              <ShowInfo></ShowInfo>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default homePage;
