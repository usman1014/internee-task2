import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'

export const Splash = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000);
  })
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../../Assets/internee.pk.jpeg')}
        style={{ height: 200, width: '80%', alignSelf: 'center', marginTop: '50%' }}
      />
    </View>
  )
}
