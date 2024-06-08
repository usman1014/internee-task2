import { View, Text, StatusBar, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Carousel from 'pinar';
import { Featured } from '../../Components/Lists';

export default function Home({ navigation }) {
    const { width, height } = Dimensions.get('window');

    const handleItemPress = (item) => {
        navigation.navigate('DetailScreen', { selectedItem: item });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <Text style={styles.name}>Internee.pk</Text>
            </View>
            <ScrollView>

                <Carousel
                    showsControls={false}
                    showsDots={false}
                    height={250}
                    width={width}
                    autoplay={true}
                    autoplayInterval={2000}
                    loop={true}
                    pagingEnabled
                    bounces={true}
                >
                    <View style={styles.child}>
                        <Image source={require('../../Assets/i1.jpeg')} style={styles.img} resizeMode='contain' />
                    </View>
                    <View style={styles.child}>
                        <Image source={require('../../Assets/i2.jpeg')} style={styles.img} resizeMode='contain' />
                    </View>
                    <View style={styles.child}>
                        <Image source={require('../../Assets/i3.jpeg')} style={styles.img} resizeMode='contain' />
                    </View>
                </Carousel>

                <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Featured Internships</Text>
                </View>
                <View style={{ backgroundColor: '#fff', }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Featured}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => handleItemPress(item)}
                                style={styles.container}>
                                <Image
                                    source={{ uri: item.photo }}
                                    style={{ height: 80, width: 80, alignSelf: 'center', margin: 3 }}
                                />
                                <Text style={{ textAlign: 'center', marginTop: 5, }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Popular Technologies</Text>
                </View>
                <View style={{ backgroundColor: '#fff', }}>
                    <FlatList
                        inverted
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={Featured}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.container}>
                                <Image
                                    source={{ uri: item.photo }}
                                    style={{ height: 80, width: 80, alignSelf: 'center', margin: 3 }}
                                />
                                <Text style={{ textAlign: 'center', marginTop: 5, }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>

        </View>
    );
}
