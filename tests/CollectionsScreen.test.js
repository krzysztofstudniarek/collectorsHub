import React from 'react';
import CollectionsScreen from '../components/CollectionsScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CollectionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});