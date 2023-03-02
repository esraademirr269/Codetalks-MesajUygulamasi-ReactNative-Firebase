import { StyleSheet } from 'react-native';

const base_style = StyleSheet.create({
    container: {
        backgroundColor: '#ff9e42',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        borderRadius: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default {
    primary: StyleSheet.create({
        container: {
            ... base_style.container,
            backgroundColor: '#ff9e42',
        },
        text: {
            ... base_style.text,
            color: 'white',
        },
    }),
    secondary: StyleSheet.create({
        container: {
            ... base_style.container,
            backgroundColor: 'white',
            
        },
        text: {
            ... base_style.text,
            color: '#ff9e42',
        },
    }),
};