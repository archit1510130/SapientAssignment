import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LaunchYearRow extends Component {

    constructor(props)
    {
      super();
  
    }
    
    render() {
        return (
            <div class="row mt-3">
            <div class="col-5 ">
            <Button  name={this.props.name}  id={this.props.val1} value ={this.props.val1} onClick ={this.props.onClick} size='sm' variant="outline-success">{this.props.val1}</Button>
            </div>
            <div class="col-4">
            <Button   name={this.props.name} id={this.props.val2}  value={this.props.val2}onClick={this.props.onClick} size='sm' variant="outline-success">{this.props.val2}</Button>{''}
            </div>
          </div>
        );
    }
}

export default LaunchYearRow;