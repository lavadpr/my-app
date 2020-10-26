import React, { Component } from 'react';

class CounterGroupSum extends Component {
    
    render() {
        return (
            <div>
                <label>sum of all counters is </label>
                <span>{this.props.sum}</span>
            </div>
        );
    }
}

export default CounterGroupSum;