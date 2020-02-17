import React from 'react';
import { shallow } from 'enzyme';
import GitHubViewer from './GitHubViewer';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<GitHubViewer />);
    expect(wrapper).toMatchSnapshot();
  });
});
