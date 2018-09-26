import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Platform, FlatList
} from 'react-native';
import { color } from '../../styles'
import TimePicker from 'react-native-modal-datetime-picker';
import CalendarStrip from 'react-native-calendar-strip';
import { data } from '../../database.json'
import ItemDate from '../components/ItemDate';
import PickCategories from '../components/PickCategories';

export default class AddTask extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'AddTask',
        headerTitleStyle: {
            width: '85%',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            color: 'gray'
        },
        headerLeft: (<TouchableOpacity
            onPress={() => navigation.goBack(null)}>
            <Image
                style={{ height: '50%', aspectRatio: 1, marginLeft: 10 }}
                source={require('../../back.png')} />
        </TouchableOpacity>),
        headerRight: (<TouchableOpacity
            onPress={() => navigation.navigate('AddTask')}>
            <Text style={{ color: color.calendarHighlight, fontSize: 18, marginRight: 10, fontWeight: 'bold' }}>Done</Text>
        </TouchableOpacity>)
    })

    state = {
        selectedDate: '',
        isTimePickerVisible: false,
        selectedTime: new Date().toTimeString().substring(0, 5)
    }


    changeForm(date) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return days[date.getDay() + 1] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
    }

    onDateSelected = (date) => {
        console.log(date._d)
        this.setState({ selectedDate: this.changeForm(date._d) })
    }

   
    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    highlightDateNumberStyle={{ color: color.calendarHighlight }}
                    highlightDateNameStyle={{ color: color.calendarHighlight }}
                    calendarColor={color.calendarBackground}
                    onDateSelected={this.onDateSelected}
                    style={styles.calendar} />
                <ItemDate date={data[0].date} />
                <Text style={styles.title}>Content</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />
                <Text style={styles.title}>Time</Text>
                <TouchableOpacity
                    onPress={() => this.setState({ isTimePickerVisible: true })}>
                    <Text style={styles.time}>{this.state.selectedTime}</Text>
                </TouchableOpacity>
                <TimePicker
                    mode='time'
                    onCancel={(time) => console.log(time)}
                    onConfirm={(time) => this.setState({ selectedTime: time.toTimeString().substring(0, 5), isTimePickerVisible: false })}
                    isVisible={this.state.isTimePickerVisible} />
                <Text style={styles.title}>Category</Text>
                <PickCategories />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    calendar: {
        height: 100,
        paddingTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginStart: 20,
        marginTop: 8,
    },
    input: {
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: Platform.OS === 'ios' ? 15 : 10,
        shadowOffset: { width: 0, height: 0 },
        //for ios
        borderRadius: 10,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: 'gray',
        backgroundColor: 'white',
        //for android
        elevation: 5,
    },
    time: {
        fontSize: 18,
        color: color.calendarHighlight,
        fontWeight: 'bold',
        marginStart: 20,
        marginTop: 2
    },
   
});
