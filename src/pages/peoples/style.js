import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: '#1c1e22',
    },

        loading: {
            color: '#ffffff',
        },

        btnPeople: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginTop: 20,
        },
            avatarPeople: {
                height: 80,
                width: 80,
                borderWidth: 1,
                borderColor: '#ffe300',
                borderRadius: 8,
            },
            namePeople: {
                fontSize: 16,
                fontFamily: 'Sarpanch_600SemiBold',
                color: '#ffe300',
                marginLeft: 12,
            },
});

export default style;