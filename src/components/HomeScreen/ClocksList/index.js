import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SectionList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import ClockContainer from '../ClockContainer';
import store from '../../../config/store'

export default class ClocksList extends Component{
    
    constructor(props) {
        super(props);
    }

    renderItem = ({item, index, section}) => {
        return (
            <View
                key={index}
                style={styles.clockItem}
            >
               <ClockContainer id = {item} />
            </View>
        
        )
    }
    renderSectionHeader = ({section: {title}}) => (
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
    )

    getData = () =>{
        const { timer } = this.props;
        const setTimer = new Set(timer.timerId);
        const arrTimer = [...setTimer];    
        let _data={};
        _data = arrTimer ? arrTimer.map((item, index, arr)=>{
            return {title: 'Clock ID: ' + item, data: [item], footer: [item]}
            }) 
            : 
            {};

        return _data;
    }
    render() {
    
        return (
            <View
                style={styles.container}
            >
                <SectionList 
                stickySectionHeadersEnabled={false}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                keyExtractor={(item, index) => item + index}
                sections={this.getData()}
                />
                <View
                    style={styles.buttonAddContainer}
                >
                    <Button
                        style={styles.buttonAdd}
                        title='Add'
                        onPress={this.props.onAddTimer}
                    />
                </View>
            </View>
        )
             
    }

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: 'red'
    },
    clockItem: {
        width: '100%',
        height: 200,
        borderWidth: 1
    },
    buttonAddContainer: {
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0
    },
    buttonAdd: {
        width: '100%',
        height: '100%',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
})