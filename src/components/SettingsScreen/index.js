import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import TitleLogo from '../Common/TitleLogo';
import { SafeAreaView } from 'react-navigation';
import * as colors from '../../constants/colors';
export default class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: <TitleLogo />,
  };

    render() {
      return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Settings Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
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
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });
  