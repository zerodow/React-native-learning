import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Platform, FlatList, Button
} from 'react-native';
import { color } from '../../styles'
import TimePicker from 'react-native-modal-datetime-picker';
import CalendarStrip from 'react-native-calendar-strip';
import { data } from '../../database.json'
import ItemDate from '../components/ItemDate';
import PickCategories from '../components/PickCategories';
import { connect } from 'react-redux'
import { addTask } from '../action'

class AddTask extends Component {
    state = {
        selectedDate: this.changeForm(new Date()),
        isTimePickerVisible: false,
        selectedTime: new Date().toTimeString().substring(0, 5),
        category: 'To do',
        //number of days from 1/1/1970
        dayId: Math.floor(new Date().getTime() / (24 * 60 * 60 * 1000)),
        //number of milis from 1/1/1970
        taskId: new Date().getTime()
    }

    componentDidMount() {
        this.props.navigation.setParams({ addTask: this.addMoreTask })
    }

    chooseColorByCategory = (category) => {
        switch (category) {
            case 'To do': return color.categoryTodo
            case 'Shopping': return color.categoryShopping
            case 'Birthday': return color.categoryBirthday
            case 'Event': return color.categoryEvent
            case 'Personal': return color.categoryPersonal
            default: return 'white'
        }
    }

    changeForm(date) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
    }

    onDateSelected = (date) => {
        this.setState({
            selectedDate: this.changeForm(date._d),
            dayId: Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
        }, () => console.log(this.state.dayId))
    }

    addMoreTask = () => {
        let task = {
            id: this.state.dayId,
            date: this.state.selectedDate,
            task: {
                id: this.state.taskId,
                category: this.props.hello,
                content: "Go to new york",
                time: this.state.selectedTime,
                isDone: false
            }
        }
        this.props.addTask({
            id: this.state.dayId,
            date: this.state.selectedDate,
            task: {
                id: this.state.taskId,
                category: this.props.hello,
                content: this.state.content,
                time: this.state.selectedTime,
                isDone: false
            }
        })
        this.props.navigation.navigate('Schedule')
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
                    autoCorrect={false}
                    onChangeText={(text) => this.setState({ content: text })}
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
                    onConfirm={(time) => this.setState({
                        selectedTime: time.toTimeString().substring(0, 5),
                        isTimePickerVisible: false,
                        taskId: time.getTime()
                    })}
                    isVisible={this.state.isTimePickerVisible} />
                <Text style={styles.title}>Category</Text>
                <PickCategories
                // onGet={(name) => this.setState({ category: name })} 
                />
                <Text style={[styles.title, { color: this.chooseColorByCategory(this.props.hello) }]}>This task belongs to {this.props.hello} category</Text>
                {/* <Button
                    title={'add'}
                    onPress={() => {
                        
                    }}
                /> */}
            </View>
        );
    }
}
// tạo 1 props cho AddTask 
// props này có thê là currenntCategory
const mapStateToProps = (store) => ({
    hello: store.currentCategory,
})

export default connect(mapStateToProps, { addTask })(AddTask)

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
