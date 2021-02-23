import React, { Component } from "react";
import MovieTiles from "./MoviesTiles"

class MovieTilesList extends Component {
	render() {
    	const { profiles, users, movies, usersByMovieID } = this.props;
    	const movieTiles = Object.keys(movies).map(id => (
        	<MovieTiles
          	key={id}
			users={users}
  			usersLikedMovie={usersByMovieID[id]}
			movieInfo={movies[id]}
          	/>
        ));

		return <ul>{movieTiles}</ul>
    }
}

export default MovieTilesList;