import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'white',
        height:Dimensions.get('window').height*0.30,
        width:Dimensions.get('window').width*0.45,
        backgroundColor:'white',
        margin:10,
        alignItems:'center',
        justifyContent:'center',

    },
    text:{
        fontSize:25,
        color:colors.yellow,
    },
});