import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Button} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as colors from '../../constants/colors';

export default class LoadingScreen extends Component {
  
    render() {
        return (
          <SafeAreaView
            style={styles.container}
          >
            <View
            style={styles.content}>
                <Text
                    style={styles.loadingText}
                >
                    Loading...
                </Text>
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
          paddingHorizontal: 10,
          borderBottomWidth: 1,
          borderColor: colors.light
      },
      loadingText: {
        fontSize: 16,
        lineHeight: 20,
        color: colors.dark
      },
    });
    