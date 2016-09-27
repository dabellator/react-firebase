import { connect } from 'react-redux';
import PatternLibrary from './PatternLibrary';
import * as Auth from '../../Actions/Auth';
import * as Entity from '../../Actions/Entity';
import * as Identity from '../../Actions/Identity';
import * as Notification from '../../Actions/Notification';

/**
 * Cherry pick values out of the given state model and choose which
 * ones to pass to the contextual component.
 *
 * @param  {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
  return {};
}

/**
 * Bind the store's dispatch() to action creators ahead of time to simplify
 * action dispatching and decouple state manipulation from the component.
 *
 * @param  {Function} dispatch
 * @return {Object}
 */
function mapDispatchToProps (dispatch) {
  return {
    Actions: {
      ...Auth,
      ...Entity,
      ...Identity,
      ...Notification
    }
  };
}

/**
 * Create the smart component.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternLibrary);
