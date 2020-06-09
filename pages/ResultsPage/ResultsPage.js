import * as React from 'react';
import {View, ScrollView, Text, Image, Animated} from 'react-native';
import pagesStyles from '../pagesStyles';
import resultsStyles from './resultsStyles';
import SearchBar from '../../components/SearchBar/SearchBar';
import github from '../../apis/github'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import UserCardList from '../../components/UserCardList/UserCardList';
import authorizationHeader from '../../constants/authorizationHeader';

export default function ResultsPage(){
    const [results, setResults] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);


    const fetchUsersByNickname = (query) => {
        try{
            setIsFetching(true);
            github.get(`/search/users?q=${query}`,authorizationHeader).then(results => {
                setResults([...results.data.items])
                setIsFetching(false);
            }).catch(err => {
                console.log("First catch " + err);
            })
        }catch(error){
            console.log("Second catch " + error);
        }
    }
    
    return(
        <View style = {pagesStyles.container}>
            <SearchBar onSubmit = {fetchUsersByNickname} style={resultsStyles.searchArea}/>
            <View style={resultsStyles.resultsArea}>
                <BackgroundImage isFetching = {isFetching}/>
                <UserCardList users={results}/>
            </View>
        </View>
    )
}