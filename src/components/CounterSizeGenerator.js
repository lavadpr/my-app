import React, { Component } from 'react';
import CounterGroupSum from './CounterGroupSum';


class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);

        this.state = {
            size:0
        };
    }
    
    onChange(event) {
        const value= event.target.value;
        this.setState(() => {
            return {size: value};
        }, () => this.props.onGenerate(value));
    }

    render() {
        return <fieldset>
            <label htmlFor="size">Generate </label>
            <input type="number" name="size" id="size" value={this.state.size} onChange={this.onChange} />
            <label htmlFor="size"> Counters</label>
            <CounterGroupSum sum = {this.state.size}/>
        </fieldset>;
    }
}

export default CounterSizeGenerator;