import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokecard from './Pokecard';

it('renders without crashing', function() {
  shallow(<Pokecard />);
});

it('matches snapshot for adopted dogs', function() {
  let wrapper = shallow(
    <Pokecard
      name="Charmander"
      type="fire"
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    />
  );
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
