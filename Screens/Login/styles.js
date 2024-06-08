import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '85%',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 10,
        //elevation: 1,
        alignSelf: 'center',
        borderWidth:1,
        borderColor: '#32cd32',
    },
    input: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.8,
        borderColor: '#32cd32',
        padding: 10,
        marginVertical: '3%',
    },
    box: {
        height: 22,
        width: 22,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        marginHorizontal: 10
    },
    rem: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        padding: 10,
        backgroundColor: '#32cd32',
        borderRadius: 10,
        paddingHorizontal: 20,
        right: 0,
        position: 'absolute',

    },
    txt: {
        color: '#fff'
    },
    fp:{
        color:'#32cd32',
        fontSize: 20,
        textAlign:'center',
        marginVertical:'2%'
    },

});