import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends React.Component {

    componentDidMount() {
        this.props.movieList();
    }

    renderMovies() {
        if(this.props.movies) {
            return this.props.movies.map((movie) => {
                return <div key={movie.id}>{movie.name}</div>
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.renderMovies()}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, actions)(App);