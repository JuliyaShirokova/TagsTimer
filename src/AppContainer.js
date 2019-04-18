import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
     addNavigationHelpers
    } from 'react-navigation';
import AppNavigator from './AppNavigator';

class AppContent extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(AppContent)
