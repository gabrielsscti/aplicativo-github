import {StyleSheet} from 'react-native';

const searchBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'

    },
    textInputContainer: {
        flex: 9,
        height: '100%',
        justifyContent:'center',
    },
    textInput: {
        height:'100%',
    },
    searchButtonContainer: {
        flex: 1,
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
    }
});

export default searchBarStyles;