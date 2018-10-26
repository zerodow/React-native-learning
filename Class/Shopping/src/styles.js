import { StyleSheet, Platform } from 'react-native'
export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

export const commonStyles = StyleSheet.create({
    screenContainer: {
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    screenTitle: {
        fontSize: 20,
        color: primaryColorRed,
        fontWeight: 'bold',
        marginHorizontal: 7,
        marginVertical: 10,

    },
    button: {
        position: 'absolute',
        bottom: 16,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: primaryColorRed,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})