import React from 'react';
import { View, Text } from 'react-native';


const Header = (props) => {
    const { styleViewHeader, styleTextHeader } = styles;
    return (
        <View style={styleViewHeader}>
            <Text style={styleTextHeader}>{props.title}</Text>
        </View>
    );
};

const styles = {
    styleTextHeader: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    },
    styleViewHeader: {
        padding: 15,
        backgroundColor: 'black'
    }
};

export default Header;