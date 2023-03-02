import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './FloatingButton.styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const FloatingButton =({handleFloatingSubmit}) =>{
    return (
        <TouchableOpacity style={styles.container} onPress={handleFloatingSubmit}>
           <Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
    );
}

export default FloatingButton;