import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeScreenComponent as HomeScreen } from '../../src/screens/home/index';
import testData from '../../src/testData/index';

describe('HomeScreen', () => {
  test('initial render', () => {
    const homeScreen = renderer.create(
      <HomeScreen weatherData={testData} fetchErrorMessage={null} />,
    );

    expect(homeScreen).toMatchSnapshot('HomeScreen');
  });

  test('initial render with fetch error message', () => {
    const homeScreen = renderer.create(
      <HomeScreen weatherData={null} fetchErrorMessage={'FAILED'} />,
    );

    expect(homeScreen).toMatchSnapshot('HomeScreenFetchError');
  });

  test('render header', () => {
    const homeScreen = renderer.create(
      <HomeScreen weatherData={testData} fetchErrorMessage={'FAILED'} />,
    );

    const homeScreenInstance = homeScreen.root;

    expect(homeScreenInstance.findByProps({ testID: 'header' })).not.toBe(null);
  });

  test('render fetch error message when fetch weather forecast failed', () => {
    const homeScreen = renderer.create(
      <HomeScreen weatherData={null} fetchErrorMessage={'FAILED'} />,
    );

    const homeScreenInstance = homeScreen.root;

    expect(
      homeScreenInstance.findByProps({ testID: 'fetchErrorView' }),
    ).not.toBe(null);
  });
});
