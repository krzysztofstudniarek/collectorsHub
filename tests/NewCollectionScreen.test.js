import React from 'react';
import NewCollectionScreen from '../components/NewCollectionScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<NewCollectionScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});