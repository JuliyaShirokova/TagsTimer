import React, { Component } from 'react';
import { View, TextInput, SectionList, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  * as colors from '../../../constants/colors';

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
    
    renderSelectedItems = () => this.state.selectedItems.map((value, index, arr) => {
        console.log('value = ', value)  
        return (
          <View
            style={styles.selectedItemContainer}
          >
            <Text>{value}</Text>
          </View>
          )
        }
      )
    
    onCHangeTextInput = (text) => {
      this.setState({text});
    }

    onPressItem = ( id ) => {
      const select = this.state.selectedItems.filter(( item, index ) => item === id );
      console.log('id=', id);
      console.log('select length=', select.length)
      if ( select.length === 0 ){
        console.log('we adding id')
        const list = [ ...this.state.selectedItems, id ];
        console.log('list', list)
        this.setState({selectedItems: list}, () => console.log('selected items ', this.state.selectedItems))          
      } else {
        console.log('we remove id')
        const list = this.state.selectedItems.filter( (item, index) => item !== id );
        this.setState({selectedItems: list})
      }
    }
    
    getItemColor = ( id ) => {
      const _color = (this.state.selectedItems.filter((item, index) => item === id)).length ? colors.alternative : colors.dark
      return _color;
    }
    getIconName = ( id ) => {
      const _icon = (this.state.selectedItems.filter((item, index) => item === id)).length ? 'bookmark' : 'bookmark-border'
      return _icon;
    }

    renderSectionItem = ( obj ) => {
      const { item, index, section} = obj;
      const currId = section.id; 
      return (
        <View
          style={styles.itemContainer}
        >
          <TouchableOpacity
            onPress = {(index) => this.onPressItem( currId )}
            style={styles.itemTouch}
          >
            <Text 
              style={[styles.itemText, {color: this.getItemColor( currId )}]}
              key={index}
              >
                {item}
            </Text>
            <MaterialIcons 
              name={this.getIconName(currId)}
              size={25} 
              color={this.getItemColor( currId )} />
          </TouchableOpacity>
        </View>
      )
    }

    render(){
        const getSelectedItems = () => {
            return (
                <SectionList 
                    renderItem={({item, index, section}) => this.renderSectionItem({item, index, section})}
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
                    onChangeText={(text) => this.onCHangeTextInput(text)}
                    value={this.state.text}
                    autoFocus
                    placeholder='enter tag'
                    placeholderTextColor='#ccc'
              />
            </View>
            <View
                style={styles.textBlock}
            >
                { getSelectedItems() }
            </View>
            <View
              style={styles.selectedItemsBlock}
            >
              { this.renderSelectedItems() }
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
    },
    itemContainer: {
      paddingVertical: 10,
      justifyContent: 'center',
    },
    itemTouch: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    itemText: {
      fontSize: 14,
      lineHeight: 16,
    },
    activeItem: {
      color: colors.alternative
    },
    selectedItemsBlock: {
      width: '100%',
      borderWidth: 2,
      borderColor: 'orange',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    selectedItemContainer: {
      borderWidth: 1,
      borderColor: 'red',
      padding: 5,
    }
})