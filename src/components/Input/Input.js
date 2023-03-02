import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.styles';

const Input = ({value, placeholder, onType}) =>{
    return (
        <View style={styles.container} >
            <TextInput 
            onChangeText={onType}
            placeholder={placeholder}
            value={value}
            placeholderTextColor='white'
            style={styles.txtinput}
            />
        </View>
    );
}

export default Input;