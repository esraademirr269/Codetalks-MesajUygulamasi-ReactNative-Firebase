import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff6f00',
    },
    title:{
        height:Dimensions.get('window').height/2,
        textAlign: 'center',
        textAlignVertical:'center',
        color:'white',
        fontSize:45,
    },
});