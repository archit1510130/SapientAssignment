import React, { Component } from "react";
import LaunchYearRow from "./customComponents/LaunchYearRow";
import { connect } from 'react-redux';
import * as actions from '../redux/homeData/homePageActions';
import Button from 'react-bootstrap/Button';


class filterComponent extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      year:'',
      launch:'',
      land:'',
    }
  }

  handleClick=(e)=>{

    let year=this.props.launchYear;
    let launch=this.props.launchSuccess;
    let land=this.props.landSuccess;
    if(e.target.name==='landSuccess')
    {
      this.props.dispatch(actions.setLandSuccess(e.target.value,e.target.value))
      land=e.target.value
     
    }

    if(e.target.name==='launchSuccess')
    {
      this.props.dispatch(actions.setLaunchSuccess(e.target.value,e.target.value))
      launch=e.target.value
      
    }

    if(e.target.name==='launchYear')
    {
      this.props.dispatch(actions.setLaunchYear(e.target.value,e.target.value ))
      console.log(year)
      year=e.target.value
      console.log(year)
     
    }
    console.log("before filer")
    console.log(year,launch,land)
    this.setState({
      year:year,
      land:land,
      launch:launch
    },this.props.dispatch(actions.fetchDefaultData(this.state.launch,this.state.land,this.state.year)))


    


  }


  render() {
    return (
      <>
        <div class="col-lg-3 col-xl-2 col-md-4 col-sm-12 bg-grey" style={{"backgroundColor":"#F0F0F0"}} >
        <div class='filter mb-3'>
        <h3 class="pl-3 pt-2">Filters </h3>
          <div  style={{"padding":"10%","marginTop":"10%","marginBottom":"10%","backgroundColor":"white"}} >
          <p style={{"borderBottom":"1px solid #ddd","margin":"auto","fontWeight":"600","fontFamily":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;"}}class="mb-2">Launch Year</p>
            <LaunchYearRow active={this.props.yearActive} name={'launchYear'} key={1} onClick={this.handleClick} val1={2006} val2={2007} ></LaunchYearRow>
            <LaunchYearRow active={this.props.yearActive}  name={'launchYear'}key={2}  onClick={this.handleClick} val1={2008} val2={2009}></LaunchYearRow>
            <LaunchYearRow  active={this.props.yearActive}  name={'launchYear'} key={3}  onClick={this.handleClick} val1={2010} val2={2011}></LaunchYearRow>
            <LaunchYearRow active={this.props.yearActive} name={'launchYear'} key={4}  onClick={this.handleClick} val1={2012} val2={2013}></LaunchYearRow>
            <LaunchYearRow active={this.props.yearActive}name={'launchYear'} key={5}  onClick={this.handleClick} val1={2014} val2={2015}></LaunchYearRow>
            <LaunchYearRow active={this.props.yearActive}name={'launchYear'} key={6}  onClick={this.handleClick} val1={2016} val2={2017}></LaunchYearRow>
            <LaunchYearRow active={this.props.yearActive}name={'launchYear'} key={7}  onClick={this.handleClick} val1={2018} val2={2019}></LaunchYearRow>
         
          <p style={{"borderBottom":"1px solid #ddd","margin":"auto","fontWeight":"600","fontFamily":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;"}} class="mb-2">Successful Launch</p>
            <LaunchYearRow active={this.props.successActive}name={'launchSuccess'} key={8}  onClick={this.handleClick}  val1={"false"} val2={"true"} ></LaunchYearRow>
            <p style={{"borderBottom":"1px solid #ddd","margin":"auto","fontWeight":"600","fontFamily":"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;"}} class="mb-2">Successful Land</p>
            <LaunchYearRow active={this.props.landActive} name={'landSuccess'} key={10}  onClick={this.handleClick}  val1={"false"} val2={"true"} ></LaunchYearRow>
          </div>
          </div>
          <br></br>

        </div>
      
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.home.data,
    launchSuccess:state.home.launchSuccess,
    launchYear:state.home.launchYear,
    landSuccess:state.home.landSuccess,
    yearActive:state.home.yearActive,
    successActive:state.home.successActive,
    landActive:state.home.landActive

  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch:dispatch 
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(filterComponent);
