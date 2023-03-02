import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './RoomCard.styles';

const RoomCard = ({ text, onSend }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onSend}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default RoomCard;