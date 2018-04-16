import { combineReducers } from 'redux';
import playersReducer from './playersReducer';
import playerReducer from './playerReducer'

export default combineReducers({
  players: playersReducer,
  player: playerReducer

});
