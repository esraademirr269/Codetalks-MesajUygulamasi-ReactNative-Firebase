import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        backgroundColor:colors.straw_yellow,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderStyle:'dotted',//çerçeve çizgisi
    },
    title:{
        color:'white',
    },
});