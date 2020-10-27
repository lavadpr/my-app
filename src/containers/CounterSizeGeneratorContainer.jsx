import CounterSizeGenerator from "../components/CounterSizeGenerator";
import {updateCounterSize} from "../actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    updateCounterSize: (size) => {
        dispatch(updateCounterSize(size))
    }
});

const CounterSizeGeneratorContainer = 
    connect(null, mapDispatchToProps)(CounterSizeGenerator);

export default CounterSizeGeneratorContainer;