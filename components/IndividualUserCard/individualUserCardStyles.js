import {StyleSheet} from 'react-native';

const individualUserCardStyles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        margin:10,
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        paddingBottom:5,
        borderRadius:10
    },
    leftContainer: {
        flex:2,
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 150 / 2,
        overflow: "hidden"
    },
    rightContainer: {
        flex:7,
        flexDirection:'column'
    }
})

export default individualUserCardStyles;