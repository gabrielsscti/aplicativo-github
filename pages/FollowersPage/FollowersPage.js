import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import MiniHeader from '../../components/MiniHeader/MiniHeader';
import pagesStyles from '../pagesStyles';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import UserCardList from '../../components/UserCardList/UserCardList';

export default function FollowersPage({navigation, route}){
    const [followers, setFollowers] = React.useState([...route.params.followers])
    const [login, setLogin] = React.useState(route.params.login);

    return(
        <View style={pagesStyles.container}>
            <BackgroundImage/>
            <MiniHeader>
                Seguidores de @{login}
            </MiniHeader>
            <View style={pagesStyles.scrollingArea}>
                <UserCardList navigation={navigation} users={followers} />
            </View>
        </View>
    )
}