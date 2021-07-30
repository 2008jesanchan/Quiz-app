import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import ComputerScience from "./screens/ComputerScience";
import GeneralAwareness from "./screens/GeneralAwareness";
import NatureScreen from "./screens/Nature";
import Csquiz from './screens/csquiz';
import Gkquiz from './screens/gkquiz';
import Naturequiz from './screens/Naturequiz'
import Historyquiz from './screens/History'
import HiQuiz from './screens/hiquiz'
import BoardGames from './screens/Boardgames'
import BgQuiz from './screens/bgquiz'
import Geography from './screens/Geography'
import GeQuiz from './screens/gequiz'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ComputerScience" component={ComputerScience} />
        <Stack.Screen name="GeneralAwareness" component={GeneralAwareness} />
        <Stack.Screen name="Nature" component={NatureScreen} />
        <Stack.Screen name="csquiz" component={Csquiz} />
        <Stack.Screen name="gkquiz" component={Gkquiz} />
        <Stack.Screen name="Naturequiz" component={Naturequiz} />
        <Stack.Screen name="History" component={Historyquiz} />
        <Stack.Screen name="hiquiz" component={HiQuiz} />
        <Stack.Screen name="Boardgames" component={BoardGames} />
        <Stack.Screen name="bgquiz" component={BgQuiz} />
        <Stack.Screen name="Geography" component={Geography} />
        <Stack.Screen name="gequiz" component={GeQuiz} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
