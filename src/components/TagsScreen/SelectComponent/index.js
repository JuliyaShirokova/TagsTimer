import React, { Component } from 'react';
import { View, TextInput, SectionList, Text, Button, StyleSheet } from 'react-native';

export default class SelectComponent extends Component{
    state = {
        text : '',
        selectedItems : []
    };

    items = [{
        id: '92iijs7yta',
        data: ['Regular work'],
      }, {
        id: 'a0s0a8ssbsd',
        data: ['Task-1'],
      }, {
        id: '16hbajsabsd',
        data: ['Subtask-1'],
      }, {
        id: 'nahs75a5sg',
        data: ['Subtask-2'],
      }, {
        id: '667atsas',
        data: ['Task-2'],
      }, {
        id: 'hsyasajs',
        data: ['Subtask-3'],
      }, {
        id: 'djsjudksjd',
        data: ['Subtask-4'],
      }, {
        id: 'sdhyaysdj',
        data: ['Periodical work'],
      }, {
        id: 'suudydjsjd',
        data: ['Reading'],
      }];
    

    render(){
        const getSelectedItems = () => {
            return (
                <SectionList 
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    sections={this.items}
                    keyExtractor={(item, index) => item + index}
                />
            )
        }
        return (
            <View
                style={styles.container}
            >
            <View
                style={styles.inputRow}
            >
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    autoFocus
                    placeholder='enter tag'
                    placeholderTextColor='#ccc'
              />
            </View>
            <View
                style={styles.textBlock}
            >
                {
                    getSelectedItems()
                }
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 30,
        borderWidth: 1,
        borderColor: 'red',
    },
    inputRow: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputStyle: {
        height: 40,
        width: '98%',
        paddingVertical: 4,
        borderColor: 'gray',
        borderWidth: 1
    }
})