import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { styles } from './styles';
import Logo from './components/Logo';
import Schedule from './components/Schedule';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.schedule}>
          <Schedule
            time={'Jul 6 2018 - 21:00'}
            team1={'Uruguay'}
            team2={'France'}
            imageTeam1={'https://png.icons8.com/color/100/000000/uruguay.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/france.png'}
          />
          <Schedule
            time={'Jul 7 2018 - 01:00'}
            team1={'Brazil'}
            team2={'Belgium'}
            imageTeam1={'https://png.icons8.com/color/100/000000/brazil.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/belgium.png'} />
          <Schedule
            time={'Jul 8 2018 - 01:00'}
            team1={'Russia'}
            team2={'Croatia'}
            imageTeam1={'https://png.icons8.com/color/100/000000/russian-federation.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/croatia.png'} />
        </View>
      </View>
    );
  }
}

