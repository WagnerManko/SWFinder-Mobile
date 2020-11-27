import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewLogo: {
        alignItems: 'center',
        backgroundColor: '#ff0000',
    },
        swfLogo: {
            fontSize: 24,
        },

    viewGitHub: {
        backgroundColor: '#1c1e22',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
        githubBtn: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            width: 40,
            borderWidth: 2,
            borderColor: '#ffe300',
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,0)',
        },
            github: {
                fontSize: 20,
                color: '#ffe300',
            },
});

export default style;