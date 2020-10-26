import React, { Component } from 'react';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props) {
        super(props);
        
        this.onGenerate = this.onGenerate.bind(this);
        this.addSum = this.addSum.bind(this);

        this.state = {
            size:0,
            sum:0,    
        };
    }

    onGenerate(size) {
        this.setState({size});
    }

    addSum(valueToAdd) {
        this.setState(
            (prevState) => ({ sum : prevState.sum + valueToAdd})
            );
    }
    
    render() {
        return (
            <div>
                <CounterSizeGenerator onGenerate={this.onGenerate} sum={this.state.sum}/>
                <CounterGroup size={this.state.size} addSum={this.addSum}/>
            </div>
        );
    }
}

export default MultiCounter;