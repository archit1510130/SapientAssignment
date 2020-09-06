import React, { Component } from "react";
import LaunchYearRow from "./customComponents/LaunchYearRow";

class filterComponent extends Component {
  render() {
    return (
      <>
        <div class="col-md-3 sm-12 bg-grey">
          <div>
            <h5>Launch Year</h5>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
            <LaunchYearRow></LaunchYearRow>
          </div>

          <div>
            <h5>Successfull Launch</h5>
            <LaunchYearRow></LaunchYearRow>
          </div>

          <div>
            <h5>SuccessFull Landing</h5>
            <LaunchYearRow></LaunchYearRow>
          </div>
        </div>
      </>
    );
  }
}

export default filterComponent;
