import React from 'react';
import renderer from 'react-test-renderer';

import ItemMap from '.';

describe('ItemMap', () => {
  let component;
  let instance;
  let tree;

  const getComponent = () => {
    component = renderer.create(<ItemMap />);
    return component;
  };

  beforeEach(() => {
    component = getComponent();
    instance = renderer.root;
    tree = component.toJSON();
  });

  describe('Default', () => {
    test('Snapshot', () => {
      expect(tree).toMatchSnapshot();
    });
  });
});
