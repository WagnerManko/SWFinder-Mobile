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
            height: 112,
            width: 112,
            top: 82,
            right: 2,
            zIndex: 2,
        },

        bb8Body: {
            height: 78,
            width: 78,
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