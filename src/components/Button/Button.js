import React from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Button.styles';

const Button = ({text, onSubmit, theme='primary'}) => {
    return (
        <TouchableOpacity onPress={onSubmit} style={styles[theme].container}>
            <Text style={styles[theme].text}>{text}</Text>
        </TouchableOpacity>
    );
}
export default Button;