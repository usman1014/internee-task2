import { StyleSheet ,Dimensions} from "react-native";
const { width ,height} = Dimensions.get('window');

export const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 12,
        backgroundColor: '#32cd32',
    },
    name: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        paddingTop: 30,
    },
    child: {
        padding:10,
        width: width/1.9,
        height: height/2.7,
        alignSelf:'center'
    },
    img:{
        width: '100%',
        height: height/2.9,
    },
    headingWrapper:{
        backgroundColor: '#32cd32',
        padding:10,
        width: width,
    },
    heading:{
        color:'#fff',
        fontSize:20,
        textAlign:'center'

    },
    container:{
        margin:10,
        borderWidth:0.4,
        height: 120,
        width: 110,
        borderColor:'#c0c0c0',
        borderRadius:20
    }
});