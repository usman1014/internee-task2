import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height / 3,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingHorizontal: 10,

    },
    btn: {
        backgroundColor: '#32cd32',
        width: '85%',
        padding: 12,
        borderRadius: 20,
        alignSelf: 'center',
        position:'absolute',
        bottom:10
    },
});