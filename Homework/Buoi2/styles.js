import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282F37',
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    schedule: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemSchedule: {
        margin: '2%',
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.15,
        borderRadius: 5,
        backgroundColor: '#3E4659',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTime: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '40%'
    },
    viewSchedule: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '60%'
    },
    image: {
        width: '60%',
        aspectRatio: 1,
        margin: '2%',
        tintColor: 'white'
    },
    bigText: {
        fontSize: 30,
        color: 'white',
        marginBottom: '8%'
    },
    normalText: {
        fontSize: 19,
        color: 'white',
    },
    smallText: {
        fontSize: 15,
        color: 'white'
    },
    time: {
        fontSize: 14,
        color: 'white'
    },
    icon: {
        width: '25%',
        aspectRatio: 1
    },
    flag: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    name: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})