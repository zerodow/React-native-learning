import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import Logo from './components/Logo';
import Schedule from './components/Schedule';

const data = [
  {
    time: 'Jul 6 2018 - 21:00',
    team1: 'Uruguay',
    team2: 'France',
    imageTeam1: 'https://png.icons8.com/color/100/000000/uruguay.png',
    imageTeam2: 'https://png.icons8.com/color/100/000000/france.png'
  },
  {
    time: 'Jul 7 2018 - 01:00',
    team1: 'Brazil',
    team2: 'Belgium',
    imageTeam1: 'https://png.icons8.com/color/100/000000/brazil.png',
    imageTeam2: 'https://png.icons8.com/color/100/000000/belgium.png'
  },
  {
    time: 'Jul 8 2018 - 01:00',
    team1: 'Russia',
    team2: 'Croatia',
    imageTeam1: 'https://png.icons8.com/color/100/000000/russian-federation.png',
    imageTeam2: 'https://png.icons8.com/color/100/000000/croatia.png'
  },
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.schedule}>
          <FlatList
            data={data}
            keyExtractor={({ item, index }) => index + ''}
            renderItem={({ item, index }) =>
              <Schedule
                key={index}
                time={item.time}
                team1={item.team1}
                team2={item.team2}
                imageTeam1={item.imageTeam1}
                imageTeam2={item.imageTeam2}
              />}
          />
          {/* <Schedule
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
            imageTeam2={'https://png.icons8.com/color/100/000000/croatia.png'} /> */}
        </View>
      </View>
    );
  }
}

