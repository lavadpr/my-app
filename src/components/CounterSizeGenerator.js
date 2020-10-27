import React, { Component } from 'react';

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.state = {
            size: 0
        };
    }

    onChange(event) {
        const value = event.target.value < 0 ? 0 : event.target.value;
        this.setState(() => {
            return { size: value };
        });
        this.props.updateCounterSize(value);
    }

    render() {
        return <p>
            <label htmlFor="size">Generate </label>
            <input type="number" name="size" id="size" value={this.state.size} onChange={this.onChange} />
            <label htmlFor="size"> Counters</label>
        </p>;
    }
}

export default CounterSizeGenerator;