import {StyleSheet} from 'react-native';

const repositoryItemStyles = StyleSheet.create({
    container:{
        height:100,
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        marginBottom:5,
        overflow:'hidden'

    },
    repositoryNameText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    repositoryDescriptionText: {
        fontSize: 14,
    }
})

export default repositoryItemStyles;