import {StyleSheet} from 'react-native';
import Layout from '../../constants/Layout';

const backgroundImageStyle = StyleSheet.create({
    backgroundImage: {
        position:'absolute',
        height:120,
        width:120,
        top: Layout.window.height/2 - 90,
        right: Layout.window.width/2 - 60
        
    }
})

export default backgroundImageStyle