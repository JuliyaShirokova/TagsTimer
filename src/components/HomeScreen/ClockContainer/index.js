import { connect } from 'react-redux';
import Clock from '../Clock';
import { timerStart, timerStop, timerPause, timerReset, removeTimer, addTags } from '../../../actions';

const mapStateToProps = state => ({
  timer : state.timer,
  justState: state
})

const mapDispatchToProps = dispatch => ({
  onPressStart : (id) => dispatch(timerStart(id)),
  onPressStop  : (id) => dispatch(timerStop(id)),
  onPressReset : (id) => dispatch(timerReset(id)),
  onPressPause : (id) => dispatch(timerPause(id)),
  onPressRemoveTimer  : ( id ) => dispatch(removeTimer(id)),
  onPressAddTags : (id) => dispatch(addTags(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)