import * as React from 'react';
import {TouchableOpacity, Text, Linking, View} from 'react-native';
import generalStyles from '../../generalStyles';
import repositoryItemStyles from './repositoryItemStyles';

export default function RepositoryItem({description, name, html_url}){
    return(
        <TouchableOpacity onPress={() => {Linking.openURL(html_url)}} style={repositoryItemStyles.container}>
            <Text style={repositoryItemStyles.repositoryNameText}>{name}</Text>
            <Text style={repositoryItemStyles.repositoryDescriptionText}>{description}</Text>
        </TouchableOpacity>
    )
}