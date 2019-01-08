import React from 'react';
import SignInScreen from '../src/components/SignInScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SignInScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});