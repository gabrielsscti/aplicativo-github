import {StyleSheet} from 'react-native';

const searchBarStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    textInputContainer: {
        flex: 9,
        height: '100%',
        borderWidth:1
    },
    searchButtonContainer: {
        flex: 1,
        height: '100%'
    }
});

export default searchBarStyles;