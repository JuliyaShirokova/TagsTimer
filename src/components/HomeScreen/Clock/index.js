import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Button} from 'react-native';
import * as colors from '../../../constants/colors';

class Clock extends Component{

    componentDidMount() {
        clearInterval(this.props.timer);
    }
    componentWillUnmount() {
        clearInterval(this.props.timer);
    }
    
    onPressStartHandler = () => {
        const { onPressStart, id } = this.props;
        onPressStart(id);
    }
    onPressPauseHandler = () => {
        const { onPressPause, id } = this.props;
        onPressPause(id);   
    }

    onPressStopHandler = () => {
        const { onPressStop, id } = this.props;
        onPressStop(id);   
    }

    onPressResetHandler = () => {
        const { onPressReset, id } = this.props;
        onPressReset(id);   
    }

    onPressRemoveTimerHandler = () => {
        const { onPressRemoveTimer, id } = this.props;
        onPressRemoveTimer( id ); 
    }
    onPressAddTagsHandler = () => {
        const { onPressAddTags, id } = this.props;
        const param = {id: id, tags: [] }
        onPressAddTags( param ); 
    }

    render(){
        const { id, timer } = this.props;
        //console.log('timer=', timer);
        //console.log('id=', id);
        const getStartTime = () => {
            return ( timer && timer.timerStack[id].timerStart ) ? timer.timerStack[id].timerStart.toLocaleTimeString() : '--:--:--';
        }
        const getProgress = () => {
            return ( timer && timer.timerStack[id].progress ) ? timer.timerStack[id].progress : '-';
        }
        const getStopTime = () => {
        //    console.log('Clock props timer', timer)
            return ( timer && timer.timerStack[id].timerStop) ? timer.timerStack[id].timerStop.toLocaleTimeString() : '--:--:--';
        }
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.clockContent}
                >
                    <View
                        style={styles.row}
                    >
                        <Text style={styles.labelText}>Timer start:</Text>
                        <Text style={styles.valueText}>{ getStartTime() }</Text>
                    </View>
                    <View
                        style={styles.row}
                    >
                        <Text style={styles.labelText}>Timer stop:</Text>
                        <Text style={styles.valueText}>{ getStopTime() }</Text>
                    </View>
                    <View
                        style={styles.row}
                    >
                        <Text style={styles.labelText}>Progress, sec.:</Text>
                        <Text style={styles.valueText}>{ getProgress() }</Text>
                    </View>
                </View>
                <View
                    style={styles.controlContent}
                >
                    <View
                        style={styles.buttonContainer}
                    >
                        <Button
                            onPress={this.onPressStartHandler}
                            title="Start"
                            color={colors.alternativeTwo}
                            accessibilityLabel="Start timer"
                        />
                    </View>
                    <View
                        style={styles.buttonContainer}    
                    >
                        <Button
                            onPress={this.onPressPauseHandler}
                            title="Pause"
                            color={colors.black}
                            accessibilityLabel="Pause timer"
                        />
                    </View>
                    <View
                        style={styles.buttonContainer}
                    >
                        <Button
                            onPress={this.onPressStopHandler}
                            title="Stop"
                            color={colors.alternative}
                            accessibilityLabel="Stop timer"
                        />
                    </View>
                    <View
                        style={styles.buttonContainer}
                    >
                        <Button
                            onPress={this.onPressResetHandler}
                            title="Reset"
                            color={colors.alternative}
                            accessibilityLabel="Reset timer"
                        />
                    </View>
                    
                </View>
                <View
                    style={styles.userControlContainer}
                >
                    <View
                        style={styles.buttonAddTagsContainer}
                    >
                        <Button
                            style={styles.buttonAddTags}
                            title='Tags'
                            onPress={this.onPressAddTagsHandler}
                            />
                    </View>

                    <View
                        style={styles.buttonRemoveContainer}
                    >
                        <Button
                            style={styles.buttonRemove}
                            title='Remove'
                            onPress={this.onPressRemoveTimerHandler}
                            />
                    </View>

                </View>
            </View>
        );
    }
}

export default Clock;

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    clockContent: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    labelText: {
        width: '45%',
        fontSize: 16,
        lineHeight: 22,
        color: colors.dark,
        fontWeight: '600',
    },
    valueText: {
        width: '55%',
        fontSize: 20,
        lineHeight: 22,
        color: colors.black,
        fontWeight: '700'
    },
    controlContent: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'red',

    },
    userControlContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    buttonRemoveContainer: {
        flex: 1,
    },
    buttonRemove: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})