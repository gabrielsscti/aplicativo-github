import * as React from 'react';
import {Text} from 'react-native';
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';

const BottomTab = createMaterialTopTabNavigator();
const INITIAL_ROUTE_NAME = 'repositories';

import RepositoriesPage from '../RepositoriesPage/RepositoriesPage';
import FollowersPage from '../FollowersPage/FollowersPage';

export default function SingleResultPage({navigation, route}){
    return(
        <BottomTab.Navigator
            tabBarPosition = {'bottom'}
            tabBarOptions={
                {
                    style: {
                        padding:0,
                        margin:0
                    }
                }
            }
            initialRouteName={INITIAL_ROUTE_NAME}
        >
            <BottomTab.Screen
                name="repositories"
                component={RepositoriesPage}
                options={{
                    title: `Repositórios(${route.params.repositories.length})`
                }}
                initialParams={{repositories: route.params.repositories,
                                login: route.params.login}}
            />
            <BottomTab.Screen
                name="followers"
                component={FollowersPage}
                options={{
                    title: `Seguidores(${route.params.followers.length})`
                }}
                initialParams={{followers: route.params.followers,
                                login: route.params.login}}
            />

        </BottomTab.Navigator>
    )
}