import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import TitleLogo from '../Common/TitleLogo';
import * as colors from '../../constants/colors';
import ClocksListContainer from './ClocksListContainer';


export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <TitleLogo />,
  };

  render() {
      return (
        <SafeAreaView
          style={styles.container}
        >
          <View
          style={styles.content}>
            <ClocksListContainer />
          </View>
        </SafeAreaView>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
    },
    content: {
      width: '100%',
      alignItems: 'center',
    },
  });
  