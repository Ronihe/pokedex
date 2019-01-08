import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokedex from './Pokedex';

it('renders without crashing', function() {
  shallow(<Pokedex />);
});

it('matches snapshot for adopted dogs', function() {
  let wrapper = shallow(<Pokedex />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
