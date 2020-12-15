import { StyleSheet, Dimensions } from 'react-native';

const fullWidth = Dimensions.get('screen').width;
const fullHeight = Dimensions.get('screen').height;

const style = StyleSheet.create({
    viewBody: {
        flex: 1,
        backgroundColor: '#1c1e22',
    },

        viewPeople: {
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 2,
            borderColor: '#000000',
            paddingBottom: 20,
        },
            peopleImg: {
                minHeight: fullHeight / 2,
                minWidth: fullWidth -8,
                borderWidth: 1,
                borderColor: '#ffe300',
                borderRadius: 4,
            },
            itemTitle: {
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'Sarpanch_600SemiBold',
                color: '#ffe300',
                textTransform: 'uppercase',
                marginTop: 20,
                paddingLeft: 18,
                paddingRight: 18,
            },
            itemSubTitle: {
                fontSize: 16,
                textAlign: 'center',
                fontFamily: 'Sarpanch_500Medium',
                color: '#ffe300',
                paddingLeft: 18,
                paddingRight: 18,
            },

        viewDetails: {
            paddingLeft: 20,
            borderBottomWidth: 1,
            borderColor: '#000000',
            paddingBottom: 20,
        }, 
            itemSubTitleDetails: {
                marginTop: 20,
                marginBottom: 20,
                fontSize: 16,
                fontFamily: 'Sarpanch_500Medium',
                color: '#ffe300',
                paddingLeft: 18,
                paddingRight: 18,
            },
            itemText: {
                color: '#ffe300',
                paddingLeft: 18,
                paddingRight: 18,
            },
            itemData: {
                color: '#ffffff',
            },
});

export default style;