import * as React from 'react';
import {FlatList} from 'react-native';
import IndividualUserCard from '../IndividualUserCard/IndividualUserCard'

export default function UserCardList({users, navigation}){
    return(
        <FlatList
            style={{flex:1}}
            data = {users}
            renderItem = {({item}) => (
                <IndividualUserCard navigation={navigation} login={item.login} avatar_url = {item.avatar_url}
                 followers_url={item.followers_url} repos_url={item.repos_url}/>
            )}
            keyExtractor={(item => item.id.toString())}
        />
    )
}