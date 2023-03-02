import React from "react";
import {View, Text} from 'react-native';

import styles from './Header.styles';

const Header = ({title}) =>{
    return (
        <View style={styles.container}>
            <Text style={styles.title} >{title} odası kuruldu</Text>
        </View>
    );
}

export default Header;