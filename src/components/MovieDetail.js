import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const prefix = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = (props) => {
    const { headerContentStyles, textStyle } = styles;
    return (
        <View>
            <Card>
                <CardSection>
                    <View>
                        <Image 
                            style={{ width: 125, height: 80 }}
                            source={{ uri: prefix + props.movies.backdrop_path }}
                        />
                    </View>

                    <View style={headerContentStyles}>
                        <Text style={textStyle}>Title: {props.movies.original_title}</Text>
                        <Text style={textStyle}>Rating: {props.movies.vote_average} ({props.movies.vote_count} voters)</Text>
                        <Text style={textStyle}>Release: {props.movies.release_date}</Text>
                    </View>
                </CardSection>
                
                <CardSection>
                    <Image
                        style={{ height: 500, flex: 1 }}
                        source={{ uri: prefix + props.movies.poster_path }}
                    />
                </CardSection>
                    
                <CardSection>                   
                        <Text style={textStyle}>Description: {props.movies.overview}</Text>                    
                </CardSection>

            </Card>
        </View>
    );
};

const styles = {
    headerContentStyles: {
        paddingLeft: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textStyle: {
        color: 'black'
    }
};

export default MovieDetail;