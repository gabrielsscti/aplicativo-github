import * as React from 'react'
import {Animated, Easing} from 'react-native';
import backgroundImageStyle from './backgroundImageStyle';

export default function BackgroundImage({isFetching}){
    const fadeAnim = React.useRef(new Animated.Value(0.1)).current

    React.useEffect(() => {
        if(isFetching){
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.6,
                    easing: Easing.bezier(.65,.37,.5,.86),
                    duration: 1500
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0.1,
                    easing: Easing.bezier(.17,.67,.83,.67),
                    duration: 1000
                })
            ]).start()
        }
    }, [isFetching])

    return(
        <Animated.Image source={require('../../assets/github/icons/icon_dark.png')} style={[backgroundImageStyle.backgroundImage, {opacity: fadeAnim}]}/>
    )
}