import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    viewLogo: {
        height: 200,
        alignItems: 'center',
        backgroundColor: '#1c1e22',
    },
        swfLogo: {
            fontSize: 46,
            fontFamily: 'Starjedi',
            color: '#ffe300',
            marginTop: 20,
            marginBottom: 20,
        },

    viewCategories: {
        flex: 1,
    },

    viewGitHub: {
        height: 160,
        backgroundColor: '#1c1e22',
        alignItems: 'center',
        justifyContent: 'flex-end',
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