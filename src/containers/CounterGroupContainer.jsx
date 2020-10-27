import CounterGroup from "../components/CounterGroup";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    size: state.size
})

const CounterGroupContainer = 
    connect(mapStateToProps)(CounterGroup);

export default CounterGroupContainer;