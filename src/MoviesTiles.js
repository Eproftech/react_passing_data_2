import React, {Component} from "react";

class MovieTile extends Component {
  render() {
  	const { users, usersLikedMovie, movieInfo } = this.props;
    
    return (
    	<li key={movieInfo.id}>
			<h2>{movieInfo.name}</h2>
			<h3>Liked By:</h3>

			{!usersLikedMovie || usersLikedMovie.length === 0 ?(
             	<p>None of the current users liked this movie.</p>
             ) : (
             	<ul>
               		{usersLikedMovie &&
                    	usersLikedMovie.map(userId => {
                    	return (
                     		<li key={userId}>
               					<p>{users[userId].name}</p>
               				</li>
                     )
                    })
                    }
               </ul>
             )
            }
      </li>
    )
  }
}

export default MovieTile;