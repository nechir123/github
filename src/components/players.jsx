import React from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { Link, Route } from "react-router-dom";
import _ from 'lodash';
import { fetchPlayers } from '../actions/postActions'
import PropTypes from 'prop-types';
class Players extends React.Component {

componentWillMount() {
  this.props.fetchPlayers();

}
  renderPlayers() {
    return _.map(this.props.players, (player, key) => {
      return (
        <div>
          <h3>{player.title}</h3>
        </div>
      );

    });

  }

  render() {
    const postItems = this.props.players.map(player => (
<Link to={`/player/${ player.id }`}>{player.data.name}</Link>
    ));
    return (
      <div className="jumbotron">
        {postItems}
      </div>
    )

  }
}
Players.PropTypes = {
  fetchPlayers: PropTypes.func.isRequired,
  players: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  players: state.players.players
});

export default connect(mapStateToProps, { fetchPlayers })(Players);
