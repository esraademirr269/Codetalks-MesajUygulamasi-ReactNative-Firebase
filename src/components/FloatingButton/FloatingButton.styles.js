import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:30,
        height:60,
        width:60,
        position:'absolute',
        right:20,
        bottom:20,
        backgroundColor:colors.yellow,
        alignItems:'center',
        justifyContent:'center',
        borderColor:colors.dark_yellow,
    },
});