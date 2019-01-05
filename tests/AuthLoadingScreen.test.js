import React from 'react';
import AuthLoadingScreen from '../components/AuthLoadingScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AuthLoadingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});