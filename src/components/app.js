import React from "react";

import { connect } from "react-redux";
import * as actions from "../actions";

class App extends React.Component {

    componentWillMount() {
        this.props.movieList();
    }
    render() {
        return <div>Hello World</div>
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, actions)(App);