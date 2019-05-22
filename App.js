import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux'; 

import Store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen';

class App extends React.Component {
  render() {

    const MainNavigator = createAppContainer(
      createBottomTabNavigator(
        {
          Welcome : { screen: WelcomeScreen },
          Auth : { screen: AuthScreen }, 
          Main : {
            screen: createBottomTabNavigator({
              Maps: { screen: MapScreen },
              Deck: { screen: DeckScreen },
              Review: createStackNavigator({
                Review: { screen: ReviewScreen },
                Settings: { screen: SettingsScreen },
              })
            })
          }
        }
      )
    );

    return (
      <Provider store={Store} >
        <View style={styles.container}>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // DELETE alignItems
    justifyContent: 'center',
  },
});

export default App