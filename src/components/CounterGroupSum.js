import React, { Component } from 'react';

class CounterGroupSum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sum: 0
        };
    }
    

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