import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import { connect } from 'react-redux'
import { DEVICE_WIDTH, DEVICE_HEIGHT } from '../container/const';
import { changeColor } from '../action/index'

class PickColor extends Component {
    changeMarginLeft(value) {
        if (value < 75) {
            return 75
        } else if (value > 175) {
            return
        }
    }

    changeMarginRight(value) {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text style={styles.title}>{`rgb(${this.props.currentColor.value1},${this.props.currentColor.value2},${this.props.currentColor.value3})`}</Text>
                </View>
                <View style={styles.picker}>
                    <View style={{ flex: 1, }}>
                        <Text style={{ paddingLeft: `${(this.props.currentColor.value1 - 10) * 100 / 255}%` }}>{this.props.currentColor.value1}</Text>
                        <Slider
                            thumbTintColor='red'
                            minimumTrackTintColor='red'
                            step={1}
                            minimumValue={0}
                            maximumValue={255}
                            value={this.props.currentColor.value1}
                            onValueChange={val =>
                                this.props.changeColor(
                                    Object.assign({}, this.props.currentColor, { value1: val })
                                )
                            }
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingLeft: `${(this.props.currentColor.value2 - 10) * 100 / 255}%` }}>{this.props.currentColor.value2}</Text>
                        <Slider
                            minimumTrackTintColor='green'
                            thumbTintColor='green'
                            step={1}
                            minimumValue={0}
                            maximumValue={255}
                            value={this.props.currentColor.value2}
                            onValueChange={val =>
                                this.props.changeColor(
                                    Object.assign({}, this.props.currentColor, { value2: val })
                                )
                            }
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingLeft: `${(this.props.currentColor.value3 - 10) * 100 / 255}%` }}>{this.props.currentColor.value3}</Text>
                        <Slider
                            minimumTrackTintColor='blue'
                            thumbTintColor='blue'
                            step={1}
                            minimumValue={0}
                            maximumValue={255}
                            value={this.props.currentColor.value3}
                            onValueChange={val =>
                                this.props.changeColor(
                                    Object.assign({}, this.props.currentColor, { value3: val })
                                )
                            }
                        />
                    </View>
                </View>
            </View>
        );
    }
}


const maptStateToProps = (state) => {
    return {
        currentColor: state.currentColor
    }
}

export default connect(maptStateToProps, { changeColor })(PickColor)


const styles = StyleSheet.create({
    container: {
        height: DEVICE_HEIGHT / 2
    },
    text: {
        flex: 1,
        backgroundColor: '#EEF1F6',
        justifyContent: 'center',
    },
    picker: {
        padding: 40,
        flex: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 40,
    }
});