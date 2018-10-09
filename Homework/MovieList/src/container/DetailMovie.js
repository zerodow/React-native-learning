import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomImage from '../components/CustomImage';
import CustomImage2 from '../components/CustomImage2';
import { WIDTH_SCREEN, HEIGHT_SCREEN, URL_IMAGE } from './const'
import Swiper from 'react-native-swiper';

export default class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('detail'),
            top: 0
        };

    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.container}>
                    <View>
                        <CustomImage2
                            width={WIDTH_SCREEN}
                            uri={`${URL_IMAGE}${this.state.data.backdrop_path}`}
                            onHeight={(ahihi) => this.setState({ top: ahihi })}
                        />

                    </View>
                    <View style={[styles.voteBorder, { top: this.state.top - 10 }]}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>{this.state.data.vote_average}</Text>
                    </View>
                    <View style={[styles.backdrop, { top: this.state.top - 20 }]}>
                        <CustomImage
                            height={200}
                            uri={`${URL_IMAGE}${this.state.data.poster_path}`}
                        />
                        <View style={{ marginTop: 10, marginLeft: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white', marginTop: 50 }}
                                numberOfLines={1}>{this.state.data.title}</Text>
                            <Text style={[styles.text, { marginTop: 20, fontSize: 12 }]}> {this.state.data.release_date}</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: 180 }}>
                        <View>
                            <Text style={[styles.text, {
                                fontWeight: 'bold', fontStyle: 'italic', fontSize: 18, borderBottomColor: 'gray',
                                borderBottomWidth: 1
                            }]}>Overview
                        </Text>
                        </View>
                        <View>
                            <Text style={[styles.text]}> {this.state.data.overview}</Text>
                        </View>
                        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', fontStyle: 'italic' }}>Vote count : {this.state.data.vote_count}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'normal'
    },
    backdrop: {
        position: 'absolute',
        flexDirection: 'row',
        left: 20,
        // right: 20
    },
    voteBorder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#49CCBB',
        position: 'absolute',
        right: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
