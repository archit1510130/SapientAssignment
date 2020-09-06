import React, { Component } from "react";
import LaunchYearRow from "./customComponents/LaunchYearRow";

class filterComponent extends Component {
  render() {
    return (
      <>
        <div class="col-md-3 sm-12 bg-grey">
          <div>
            <h5>Launch Year</h5>
            <LaunchYearRow val1={2006} val2={2007} ></LaunchYearRow>
            <LaunchYearRow val1={2008} val2={2009}></LaunchYearRow>
            <LaunchYearRow val1={2010} val2={2011}></LaunchYearRow>
            <LaunchYearRow val1={2012} val2={2013}></LaunchYearRow>
            <LaunchYearRow val1={2014} val2={2015}></LaunchYearRow>
            <LaunchYearRow val1={2016} val2={2017}></LaunchYearRow>
            <LaunchYearRow val1={2018} val2={2019}></LaunchYearRow>
          </div>
      <br></br>
          <div>
            <h5>Successfull Launch</h5>
            <LaunchYearRow val1={"False"} val2={"True"} ></LaunchYearRow>
          </div>
          <br></br>
          <div>
            <h5>Successfull Landing</h5>
            <LaunchYearRow  val1={"False"} val2={"True"} ></LaunchYearRow>
          </div>




        </div>
      </>
    );
  }
}

export default filterComponent;
