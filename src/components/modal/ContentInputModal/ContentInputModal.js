import React,{useState} from 'react';
import { View, TextInput } from 'react-native';

import styles from './ContentInputModal.styles';

import Modal from 'react-native-modal';
import Button from '../../Button';

const ContentInputModal = ({visible, handleModalSubmit, onClose, placeholder}) => {
    const [text,setText]= useState('');

    const handleSubmit= () =>{
        if(!text){
            return;
        }
        handleModalSubmit(text);
    };

    return (
        <Modal 
        style={styles.modal} 
        isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput  
                    placeholder={placeholder} 
                    onChangeText={setText} 
                    multiline
                    />
                </View>
                <Button text='Gönder' onSubmit={handleSubmit} />
            </View>
        </Modal>
    );
}

export default ContentInputModal;