import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Dimensions, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import { Lorem } from '../../Components/Lists';

export const DetailScreen = () => {

    const route = useRoute();
    const selectedItem = route.params.selectedItem;
    const { width, height } = Dimensions.get('window');

    return (

        <ScrollView contentContainerStyle={{}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#32cd32'} />

            <View style={{ flex: 1, paddingVertical: 30, height: height }}>
                <Image source={{ uri: selectedItem.photo }} resizeMode='contain'
                    style={styles.image}
                />


                <Text style={styles.name}>{selectedItem.name}</Text>
                <Lorem />
                <TouchableOpacity style={styles.btn}
                    onPress={() => alert("Applied Successfully")}>
                    <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
                        Apply
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
