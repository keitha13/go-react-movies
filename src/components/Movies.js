import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {

  state = { movies: []}

  componentDidMount() {
    this.setState({
      movies: [
        {id: 1, title: "movie one", runtime: 142},
        {id: 2, title: "movie twe", runtime: 102},
        {id: 3, title: "movie three", runtime: 98},
      ]
    })
  }

  render() {
    return (
      <Fragment>
        <h2>choose a movie</h2>
        <ul>
          {this.state.movies.map((m) => (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}