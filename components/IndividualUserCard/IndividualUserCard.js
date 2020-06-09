import * as React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import generalStyles from '../../generalStyles';
import individualUserCardStyles from './individualUserCardStyles';
import axios from 'axios';
import authorizationHeader from '../../constants/authorizationHeader';

export default function IndividualUserCard({login, avatar_url, followers_url, repos_url, navigation}){
    const [followers, setFollowers] = React.useState([]);
    const [repositories, setRepositories] = React.useState([]);

    React.useEffect(() => {
        try{
            axios.get(followers_url,authorizationHeader).then(items => {
                setFollowers([...items.data]);
            }).catch(err => {
                console.log("Erro na request de followers: ")
                console.log(followers_url)
                console.log(err)
            })
            axios.get(repos_url, authorizationHeader).then(items => {
                setRepositories([...items.data]);
            }).catch(err => {
                console.log("Erro na request de repositórios: ")
                console.log(repos_url)
                console.log(err)
            })
        }catch(error){
            console.log(error)
        }
    }, [])

    return(
        <TouchableOpacity onPress={() => {navigation.navigate("SingleResultPage", {
            followers: followers,
            repositories: repositories,
            login: login
        })}} style={individualUserCardStyles.container}>
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