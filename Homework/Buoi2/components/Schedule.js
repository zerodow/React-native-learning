import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';

export default class Schedule extends Component {
    render() {
        return (
            <View style={styles.itemSchedule}>
                <View style={styles.viewTime}>
                    <Text style={styles.time}>{this.props.time}</Text>
                </View>
                <View style={styles.viewSchedule}>
                    <View style={styles.name}>
                        <Text style={styles.smallText}>{this.props.team1}</Text>
                    </View>
                    <View style={styles.flag}>
                        <Image
                            style={styles.icon}
                            source={{ uri: this.props.imageTeam1 }} />
                        <Image
                            style={styles.icon}
                            source={{ uri: this.props.imageTeam2 }} />
                    </View>
                    <View style={styles.name}>
                        <Text style={styles.smallText}>{this.props.team2}</Text>
                    </View>
                </View>
            </View>
        );
    }
}


