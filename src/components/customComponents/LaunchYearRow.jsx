import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LaunchYearRow extends Component {
    
    render() {
        return (
            <div class="row mt-3">
            <div class="col-5 ">
            <Button size='sm' variant="outline-success">2001</Button>
            </div>
            <div class="col-4">
            <Button size='sm' variant="outline-success">2002</Button>{''}
            </div>
          </div>
        );
    }
}

export default LaunchYearRow;