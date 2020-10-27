import React, { Component } from 'react';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupSum from './CounterGroupSum';
import CounterGroup from './CounterGroup';

class MultiCounter extends Component {
    constructor(props) {
        super(props);

        this.onGenerate = this.onGenerate.bind(this);
        this.addSum = this.addSum.bind(this);

        this.state = {
            size: 0,
            sum: 0,
        };
    }

    onGenerate(size) {
        this.setState({ size });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sum !== this.state.sum) {
            this.setState((prevState) => ({
                number: prevState.number + 1,
            }));
        }
    }

    addSum(valueToAdd) {
        this.setState(
            (prevState) => ({ sum: prevState.sum + valueToAdd })
        );
    }

    render() {
        return (
            <div>
                <fieldset>
                    <CounterSizeGeneratorContainer />
                    <CounterGroupSum sum={this.state.sum} />
                </fieldset>
                <CounterGroup size={this.state.size} addSum={this.addSum} />
            </div>
        );
    }
}

export default MultiCounter;