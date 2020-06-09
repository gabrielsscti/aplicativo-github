import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import MiniHeader from '../../components/MiniHeader/MiniHeader';
import pagesStyles from '../pagesStyles';
import RepositoryItem from '../../components/RepositoryItem/RepositoryItem'
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';

export default function RepositoriesPage({navigation, route}){
    const [repositories, setRepositories] = React.useState([...route.params.repositories])
    const [login, setLogin] = React.useState(route.params.login)

    React.useEffect(() => {
        console.log(repositories[0])
    }, [repositories])

    return(
    <View style={pagesStyles.container}>
        <BackgroundImage/>
        <MiniHeader>
            Repositórios de @{login}
        </MiniHeader>
        <View style={pagesStyles.scrollingArea}>
            <FlatList
                data={repositories}
                renderItem = {({item}) => <RepositoryItem name = {item.name} 
                                            description = {item.description}
                                            html_url = {item.html_url}/>}
                keyExtractor={(item => item.id.toString())}
            />
        </View>
    </View>)
}