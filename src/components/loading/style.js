import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1e22',
        marginTop: 200,
    },

        bb8Head: {
            height: 66,
            width: 66,
            top: 18,
            zIndex: 2,
        },

        bb8Body: {
            height: 80,
            width: 80,
        },

        textLoading: {
            marginTop: 20,
            fontSize: 16,
            fontFamily: 'Sarpanch_600SemiBold',
            color: '#ffe300',
            textTransform: 'uppercase',
        },
});

export default style;