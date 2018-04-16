import { NEW_PLAYER, FETCH_PLAYER, FETCH_PLAYERPIC } from '../actions/types';

const initialState = {
  playerInfo: [],
  image: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYER:
      return {
        ...state,
        playerInfo: action.payload
      }
    case FETCH_PLAYERPIC:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
