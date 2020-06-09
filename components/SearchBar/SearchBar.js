import * as React from 'react';
import {View, TextInput, TouchableOpacity, SafeAreaView} from 'react-native'
import searchBarStyles from './searchBarStyles';
import {Ionicons} from '@expo/vector-icons';

export default function SearchBar({style, onSubmit}){
    const [queryText, setQueryText] = React.useState('');

    const handleTextChange = text => {
        setQueryText(text);
    }

    return(
        <SafeAreaView behavior="height" enabled style={[searchBarStyles.container, {...style}]}>
            <View style={searchBarStyles.textInputContainer}>
                <TextInput
                    placeholder="Digite um usuário para procurar"
                    style={searchBarStyles.textInput}
                    value = {queryText}
                    onChangeText = {handleTextChange}
                    
                />
            </View>
            <TouchableOpacity onPress = {() => onSubmit(queryText)} style={searchBarStyles.searchButtonContainer}>
                <Ionicons name="md-search" size={24} color="black" />
            </TouchableOpacity>
        </SafeAreaView>
    )
}