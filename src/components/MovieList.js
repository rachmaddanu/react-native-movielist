import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import MovieDetail from './MovieDetail';


class MovieList extends Component {
    state = { movies: [] };

    componentWillMount() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4b4a1310f1f32db76ad377720216c66e&language=en-US&page=1')
        .then((response) => {
            this.setState({ movies: response.data.results });
        });
    }

    renderLogic() {
        if (this.state.movies.length > 0) {
            return this.state.movies.map((data1, index) =>                
                <MovieDetail key={index} movies={data1} />                                                         
            );
        }
    }

    render() {
        console.log('render', this.state.movies);
        return (
            <ScrollView>
                {this.renderLogic()}
            </ScrollView>
        );
    }
}

export default MovieList;
