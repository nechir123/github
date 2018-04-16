import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { fetchPlayer, fetchPlayerPic, doEverything } from '../actions/postActions'
import PropTypes from 'prop-types';


class Player extends React.Component {

  componentWillMount() {
     this.props.doEverything(this.props.match.params.id,'/players/Resized pictures - 1.jpg');


  }
    render() {
      return (
        <div>
        <div class = "col-md-10">
          <img HEIGHT="200" WIDTH="200" class = "thumbnail" src = {this.props.image}></img>
        </div>
        <div class = "col-md-8">
            <li class = "list-group-item">Player: {this.props.player.name}</li>
            <li class = "list-group-item">Age: {this.props.player.age}</li>
            <li class = "list-group-item">Desciption: {this.props.player.description}</li>
      </div>
      </div>
    )
    }
}

Player.PropTypes = {
  fetchPlayer: PropTypes.func.isRequired,
  fetchPlayerPic: PropTypes.func.isRequired,
  player: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  player: state.player.playerInfo,
  image: state.player.image
});

export default connect(mapStateToProps, { fetchPlayer, fetchPlayerPic, doEverything })(Player);
