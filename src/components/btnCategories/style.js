import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1e22',
    },
    btn: {
        width: 260,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffe300',
        borderRadius: 8,
    },
    icon: {
        width: 80,
        height: 80,
        marginRight: 48,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffe300',
    }
});

export default style;