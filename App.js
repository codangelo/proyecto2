
import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import AppNavigation from './src/navigation/index'
import { Provider } from 'react-redux'
import store from './src/store/index'



const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;