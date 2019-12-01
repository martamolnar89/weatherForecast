import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { store } from './src/redux/configureStore';
import HomeScreen from './src/screens/home/index';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <HomeScreen></HomeScreen>
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
};

export default App;
