import * as React from 'react';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import LogoTitle from './components/LogoTitle/LogoTitle';
import SingleResultPage from './pages/SingleResultPage/SingleResultPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const containerRef = React.useRef();
  return (
    <NavigationContainer ref={containerRef}>
      <Stack.Navigator screenOptions={{
        headerTitle: props => <LogoTitle/>
      }}>
        <Stack.Screen 
          name="Root"
          component={ResultsPage}
        />
        <Stack.Screen
          name="SingleResultPage"
          component={SingleResultPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}