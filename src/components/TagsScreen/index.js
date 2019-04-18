import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TitleLogo from '../Common/TitleLogo';
import { SafeAreaView } from 'react-navigation';
import * as colors from '../../constants/colors';
import MultiSelect from 'react-native-multiple-select';

export default class TagsScreen extends Component {

  static navigationOptions = {
    headerTitle: <TitleLogo />,
  };

  state = {
    selectedItems : []
  };

  items = [{
    id: '92iijs7yta',
    name: 'Regular work',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Task-1',
  }, {
    id: '16hbajsabsd',
    name: 'Subtask-1',
  }, {
    id: 'nahs75a5sg',
    name: 'Subtask-2',
  }, {
    id: '667atsas',
    name: 'Task-2',
  }, {
    id: 'hsyasajs',
    name: 'Subtask-3',
  }, {
    id: 'djsjudksjd',
    name: 'Subtask-4',
  }, {
    id: 'sdhyaysdj',
    name: 'Periodical work',
  }, {
    id: 'suudydjsjd',
    name: 'Reading',
  }];

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    return (
      <SafeAreaView
      style={styles.container}
      >
      <MultiSelect
      items={this.items}
      uniqueKey="id"
      onSelectedItemsChange={this.onSelectedItemsChange}
      selectedItems={selectedItems}
      selectText="Pick Items"
      searchInputPlaceholderText="Search Items..."
      tagRemoveIconColor="red"
      tagBorderColor="blue"
      tagTextColor="blue"
      selectedItemTextColor="green"
      selectedItemIconColor="green"
      itemTextColor="#000"
      searchInputStyle={{ color: '#000' }}
      submitButtonColor="green"
      submitButtonText="Submit"
    />
    </SafeAreaView>
    );
  }
/*
    render() {
      return (
        <SafeAreaView
          style={styles.container}
        >
          <View style={styles.container}>
              <View style='inputContainer'>
              

              </View>
          </View>
        </SafeAreaView>
      );
    }
    */
}

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
  });
  