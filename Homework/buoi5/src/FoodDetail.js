import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { formatNumbersAsCode } from './handle';
import Swiper from 'react-native-swiper';

import AutoScale from './AutoScale';
const widthScr = Dimensions.get('window').width
const heightScr = Dimensions.get('window').height

export default class FoodDetail extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        const food = this.props.navigation.getParam('food')
        let banners = [];
        for (let i in food.createdBy.photos) {
            let banner = food.createdBy.photos[i];
            banners.push(
                <View style={{ width: '100%', height: '100%' }}>
                    <AutoScale
                        width={widthScr}
                        uriImage={banner} />
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <Swiper horizontal={true}>
                    {banners}
                </Swiper>
                <View style={styles.title}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 5, marginRight: 5 }}>{food.dish.foodName}</Text>
                    {food.dish.price == 0
                        ? <Text style={{ color: 'white', marginLeft: 5, marginRight: 5 }}>Chưa cập nhật giá </Text>
                        : <Text style={{ color: 'white', marginLeft: 5, marginRight: 5 }}>Giá : {formatNumbersAsCode(food.dish.price.toString())} đ</Text>
                    }
                    <Text numberOfLines={2} style={{ color: 'white', marginLeft: 5, marginRight: 5 }}>Địa chỉ : {food.dish.eatery.address.full}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: widthScr,
        height: heightScr,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        height: '90%',
        position: 'absolute',
        justifyContent: 'flex-end',
        marginBottom: 10,
        paddingBottom: 10,
    }
})
