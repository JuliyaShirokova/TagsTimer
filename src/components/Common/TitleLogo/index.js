import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  * as colors  from '../../../constants/colors';

export default class TitleLogo extends Component{
    render(){
        return (
            <View
                style={styles.logoContainer}
            >
                <MaterialIcons 
                    name='timer' 
                    size={19}
                    color={colors.dark} />
                <Text
                    style={styles.textLogo}
                >
                    Tags timer
                </Text>
          </View>
        )
    }
}

const styles=StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        paddingLeft: 4,
        fontSize: 14,
        color: colors.dark 
    }
})