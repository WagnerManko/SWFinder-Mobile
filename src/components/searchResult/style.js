import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    btnItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
        avatarItem: {
            height: 80,
            width: 80,
            borderWidth: 1,
            borderColor: '#ffe300',
            borderRadius: 8,
        },
        nameItem: {
            fontSize: 16,
            fontFamily: 'Sarpanch_600SemiBold',
            color: '#ffe300',
            marginLeft: 12,
        },
});

export default style;