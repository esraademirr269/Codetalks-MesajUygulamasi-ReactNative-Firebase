import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './Rooms.styles';

import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInputModal';
import RoomCard from '../../components/Cards/RoomCard';

import database from '@react-native-firebase/database';
import ParseContentData from '../../utils/parseContentData/ParseContentData';

const Rooms = ({navigation}) => {
    const [modal, setModal] = useState(false)
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = ParseContentData(contentData || {});//veri varsa contentData , veri yoksa null olacak
                setRooms(parsedData);
            })
    }, []);

    const handleModal = () => {
        setModal(!modal);
    }

    const onSend = (modelText) => {
        handleModal();
        const myroom = {
            room: modelText,
            date: (new Date().toISOString()),
            messages: '',
        };
        database().ref('/rooms').push(myroom);
    }

    const handleRooms= (item) =>{
        navigation.navigate('RoomMessagesPage',{item});
    }

    const renderRooms = ({ item }) => <RoomCard text={item.room} onSend={()=>handleRooms(item)} />
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2} //verileri 2 şer gönderir
                data={rooms}
                renderItem={renderRooms}
                columnWrapperStyle={{ justifyContent: 'space-between' }} //2 tane card yan yana ekler
            />

            <FloatingButton handleFloatingSubmit={handleModal} />
            <ContentInputModal
            placeholder={'Oda adı..'}
                handleModalSubmit={onSend}
                visible={modal}
                onClose={handleModal}
            />
        </View>
    );
}

export default Rooms;