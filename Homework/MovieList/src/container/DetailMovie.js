import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomImage from '../components/CustomImage';
import { WIDTH_SCREEN, HEIGHT_SCREEN, URL_IMAGE } from './const'
import Swiper from 'react-native-swiper';

export default class DetailMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.getParam('detail')
        };

    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.container}>
                    <CustomImage
                        height={400}
                        uri={`${URL_IMAGE}${this.state.data.poster_path}`}
                    />
                    <View style={styles.detail}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Time:
                            <Text style={[styles.text]}> {this.state.data.release_date}</Text>
                            </Text>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Vote :
          <Text style={[styles.text]}> {this.state.data.vote_average} / 10</Text>
                            </Text>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Overview:
          <Text style={[styles.text]}> {this.state.data.overview}</Text>
                            </Text>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>Vote count :
              <Text style={[styles.text]}> {this.state.data.vote_count}</Text>
                            </Text>
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
    detail: {
        marginTop: 20,
        // marginLeft: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    }
});
