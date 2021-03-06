import React, { Component } from "react";
import {
  AiFillSmile,
  AiFillTwitterSquare,
  AiOutlineLike,
  AiTwotoneHeart,
} from "react-icons/ai";
import { withRouter } from "react-router";
import "./Movie.css";
class Movie extends Component {
  state = {
    movie: {},
  };
  constructor(props) {
    super(props);
    console.log(window.location);
    //   const a = window.location.pathname;
    //   const b = a.split("/").reverse()[0];
    //   console.log(b);
    // window.location.pathname = "/";
  }

  componentDidMount() {
    console.log(this.props);
    const { movies, match } = this.props;
    const { id } = match.params;
    console.log({ id, movies });
    const movie = movies[id];
    if (movie) {
      this.setState({ movie });
    }
  }
  render() {
    const { movie } = this.state;
    return (
      <>
        <div className="movie-content">
          <div className="movie-banner">
            <img src={movie.img}></img>
          </div>
          <div className="movie-detail">
            <div className="md-1">
              <span className="t-bold">{movie.name}</span>
              <span>{movie.genre}</span>
            </div>
            <div className="md-2">
              <button className="custom-button">Book Tickets</button>
              <button className="custom-button">Buy or Rent</button>
            </div>
          </div>
        </div>
        <div className="movie-description">
          <h3>About Uss</h3>
          <p>Hope you like our movie!!!!</p>
        </div>
      </>
    );
  }
}

export default withRouter(Movie);
