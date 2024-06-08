import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center',backgroundColor:'#FFF' }}>
            <View style={styles.container}>
                <Image source={require('../../Assets/internee.png')}
                    style={{ alignSelf: 'center',height: 70,}} />

                    <TextInput placeholder='Email'
                    style={styles.input}
                    />
                     <TextInput placeholder='Password'
                    style={styles.input}
                    />

                <View style={{flexDirection:'row',width:'100%',marginVertical:'5%'}}>
                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                        <View style={styles.box}/>
                        <Text style={styles.rem}>Remember me</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}
                    onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.txt}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.fp}>Forget Password?</Text>
            </View>
        </View>
    )
}