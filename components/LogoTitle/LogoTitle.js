import * as React from 'react';
import {Image, View} from 'react-native';
import logoTitleStyles from './logoTitleStyles';

export default function LogoTitle(){
    return(
        <View style={logoTitleStyles.container}>
            <Image style={logoTitleStyles.image} source = {require('../../assets/github/logos/logo_dark.png')}/>
        </View>
    )
}