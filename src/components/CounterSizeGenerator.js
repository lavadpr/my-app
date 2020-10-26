import React, { Component } from 'react';
import CounterGroupSum from './CounterGroupSum';


class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            size: 0
        };
    }

    onChange(event) {
        const value = event.target.value;
        this.setState(() => {
            return { size: value };
        }, () => this.props.onGenerate(value));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sum !== this.state.sum) {
            this.setState((prevState) => ({
                number: prevState.number + 1,
            }));
        }
    }

    render() {
        return <fieldset>
            <label htmlFor="size">Generate </label>
            <input type="number" name="size" id="size" value={this.state.size} onChange={this.onChange} />
            <label htmlFor="size"> Counters</label>
            <CounterGroupSum sum={this.props.sum} />
        </fieldset>;
    }
}

export default CounterSizeGenerator;