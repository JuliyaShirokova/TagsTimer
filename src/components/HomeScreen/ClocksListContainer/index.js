import React, {Component} from 'react';
import ClocksList from '../ClocksList';
import { addTimer } from '../../../actions';
import {connect} from "react-redux";

const mapStateToProps = state => ({
    timer : state.timer,
    justState: state
  })
  
  const mapDispatchToProps = dispatch => ({
    onAddTimer: () => dispatch(addTimer()),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClocksList)