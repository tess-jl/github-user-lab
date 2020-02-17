import React from 'react';
import { shallow } from 'enzyme';
import RepoList from './RepoList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('RepoList component', () => {
  it('renders RepoList', () => {
    const wrapper = shallow(<Provider store={store}><RepoList /></Provider>).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
