import * as React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native'
import searchBarStyles from './searchBarStyles';
import {Ionicons} from '@expo/vector-icons';

export default function SearchBar({style}){
    return(
        <View style={[searchBarStyles.container, style.container]}>
            <View style={searchBarStyles.textInputContainer}>
                <TextInput
                    placeholder="Digite um usuário para procurar"
                />
            </View>
            <TouchableOpacity style={searchBarStyles.searchButtonContainer}>
                <Ionicons name="md-search" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}