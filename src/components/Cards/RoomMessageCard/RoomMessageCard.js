import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './RoomMessageCard.styles';
import { formatDistance, parseISO } from 'date-fns';
import { tr } from 'date-fns/locale';
const RoomCard = ({ message }) => {
    const formatedDate = formatDistance(parseISO(message.date) , new Date(), {
        addSuffix: true,
        locale:tr,
    });
    return (
        <View style={styles.container}>
            <View style={styles.inner_container} >
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
            </View>
            <Text style={styles.message}>{message.text}</Text>
        </View>
    );
}

export default RoomCard;