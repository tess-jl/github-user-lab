import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Provider store={store}><Search /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
