import * as React from 'react';
import {View} from 'react-native';
import pagesStyles from '../pagesStyles';
import resultsStyles from './resultsStyles';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function ResultsPage(){
    return(
        <View style = {pagesStyles.container}>
            <SearchBar style={{flex: 1}}/>
            <View style={{flex: 8}}></View>
        </View>
    )
}