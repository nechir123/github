import { FETCH_PLAYERS, NEW_PLAYER, FETCH_PLAYER, FETCH_PLAYERPIC } from './types';
import { database, storageRef } from '../fire'
export const fetchPlayers =  ()  => dispatch => {
  database.get().then(querySnapshot => {
    var players = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));
      dispatch({
        type: FETCH_PLAYERS,
        payload: players
      })
      })
};
export const fetchPlayer =  (idd)  => dispatch => {
  database.doc(idd).get().then(querySnapshot => {
    var player = querySnapshot.data();
      dispatch({
        type: FETCH_PLAYER,
        payload: player
      })
    })
};
export const fetchPlayerPic =  (path)  => dispatch => {
  storageRef.child(path).getDownloadURL().then(url => {
    var imageUrl;
    imageUrl = url;

      dispatch({
        type: FETCH_PLAYERPIC,
        payload: imageUrl
      })
    })
};
export function doEverything(idd, path) {
  return dispatch => Promise.all([
    dispatch(fetchPlayer(idd)),
    dispatch(fetchPlayerPic(path))
  ]);
}
