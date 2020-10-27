import CounterGroup from "../components/CounterGroup";
import { connect } from "react-redux";

const CounterGroupContainer = 
    connect(null, mapDispatchToProps)(CounterGroup);

export default CounterGroupContainer;