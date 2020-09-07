import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../customComponents/custom.css';

const LaunchYearRow=(props)=> {
        return (
            <div class="year text-center">
            <div class="year-container">
            <Button  active={props.active==props.val1?true:false} class="btn mb-1" name={props.name}  id={props.val1} value ={props.val1} onClick ={props.onClick} size='sm' >{props.val1}</Button>
            </div>
            <div class="col-4">
            <Button  active={props.active==props.val2?true:false}  class="btn mb-1" name={props.name} id={props.val2}  value={props.val2}onClick={props.onClick} size='sm'>{props.val2}</Button>{''}
            </div>
          </div>
        );
    
}

export default LaunchYearRow;