import React, { Component } from "react";
import LaunchYearRow from "./customComponents/LaunchYearRow";
import { connect } from 'react-redux';
import * as actions from '../redux/homeData/homePageActions';
import Button from 'react-bootstrap/Button';

class filterComponent extends Component {
  constructor(props)
  {
    super();
    this.state={
        launchYear:'',
        launchSuccess:'',
        landSuccess:'',
    }

  }

  handleClick=(e)=>{

    this.setState({
    [e.target.name]:e.target.value
    })

  }


  handleonSubmit=()=>{

  
    this.props.dispatch(actions.fetchDefaultData(this.state.launchSuccess,this.state.landSuccess,this.state.launchYear))

  }
  render() {
    console.log(this.state)
    return (
      <>
        <div class="col-md-3 sm-12 bg-grey">
          <div>
            <h5>Launch Year</h5>
            <LaunchYearRow name={'launchYear'} key={1} onClick={this.handleClick} val1={2006} val2={2007} ></LaunchYearRow>
            <LaunchYearRow name={'launchYear'}key={2}  onClick={this.handleClick} val1={2008} val2={2009}></LaunchYearRow>
            <LaunchYearRow name={'launchYear'} key={3}  onClick={this.handleClick} val1={2010} val2={2011}></LaunchYearRow>
            <LaunchYearRow name={'launchYear'} key={4}  onClick={this.handleClick} val1={2012} val2={2013}></LaunchYearRow>
            <LaunchYearRow name={'launchYear'} key={5}  onClick={this.handleClick} val1={2014} val2={2015}></LaunchYearRow>
            <LaunchYearRow name={'launchYear'} key={6}  onClick={this.handleClick} val1={2016} val2={2017}></LaunchYearRow>
            <LaunchYearRow name={'launchYear'} key={7}  onClick={this.handleClick} val1={2018} val2={2019}></LaunchYearRow>
          </div>
      <br></br>
          <div>
            <h5>Successfull Launch</h5>
            <LaunchYearRow name={'launchSuccess'} key={8}  onClick={this.handleClick}  val1={"False"} val2={"True"} ></LaunchYearRow>
          </div>
          <br></br>
          <div>
            <h5>Successfull Landing</h5>
            <LaunchYearRow  name={'landSuccess'} key={10}  onClick={this.handleClick}  val1={"False"} val2={"True"} ></LaunchYearRow>
          </div>

          <br></br>
          <Button onClick={this.handleonSubmit}  type="sumbit"  size='sm'>Submit</Button>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch:dispatch 
    
  }
}
export default connect(null,mapDispatchToProps)(filterComponent);
