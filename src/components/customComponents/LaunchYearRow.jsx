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
            <Button size='sm' variant="outline-success">{this.props.val1}</Button>
            </div>
            <div class="col-4">
            <Button size='sm' variant="outline-success">{this.props.val2}</Button>{''}
            </div>
          </div>
        );
    }
}

export default LaunchYearRow;