import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TitleLogo from '../Common/TitleLogo';
import { SafeAreaView } from 'react-navigation';
import * as colors from '../../constants/colors';
import SelectComponent from './SelectComponent';
//import MultiSelect from 'react-native-multiple-select';

export default class TagsScreen extends Component {

  static navigationOptions = {
    headerTitle: <TitleLogo />,
  };

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    return (
      <SafeAreaView
        style={styles.container}
      >
        <SelectComponent />
      </SafeAreaView>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
    selectContainer: {
      flex: 1,
      backgroundColor: 'lightblue',
    }
  });
  