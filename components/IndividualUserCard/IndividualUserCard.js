import * as React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import generalStyles from '../../generalStyles';
import individualUserCardStyles from './individualUserCardStyles';
import axios from 'axios';

export default function IndividualUserCard({login, avatar_url, followers_url, repos_url}){
    const [followers, setFollowers] = React.useState([]);
    const [repositories, setRepositories] = React.useState([]);

    React.useEffect(() => {
        try{
            axios.get(followers_url).then(items => {
                setFollowers([...items.data]);
            })
            axios.get(repos_url).then(items => {
                setRepositories([...items.data]);
            })
        }catch(error){
            console.log(error)
        }
    }, [])

    return(
        <TouchableOpacity onPress={() => {}} style={individualUserCardStyles.container}>
            <View style={individualUserCardStyles.leftContainer}>
                <Image style={individualUserCardStyles.imageStyle}
                       source={{uri: avatar_url}}/>
            </View>
            <View style={individualUserCardStyles.rightContainer}>
                <Text style={generalStyles.nicknameStyle}>{login}</Text>
                <Text style={generalStyles.blackFontStyle}>Número de seguidores: {followers.length}</Text>
                <Text style={generalStyles.blackFontStyle}>Número de repositórios: {repositories.length}</Text>
            </View>
        </TouchableOpacity>
    )

}