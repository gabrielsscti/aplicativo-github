import * as React from 'react';
import {View, Text} from 'react-native';
import miniHeaderStyles from './miniHeaderStyles';
import generalStyles from '../../generalStyles';

export default function MiniHeader({children}){
    return(
    <View style={miniHeaderStyles.container}>
        <Text style={generalStyles.nicknameStyle}>
            {children}
        </Text>
    </View>)
}