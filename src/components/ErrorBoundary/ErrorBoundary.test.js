import React from 'react';
import { mount } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';

describe('<ErrorBoundary />', () => {
  it('renders error message if error is caught', () => {
    const Dummy = () => null;

    const wrapper = mount(
      <ErrorBoundary>
        <Dummy />
      </ErrorBoundary>
    );

    const error = new Error('Oh No!!');
    wrapper.find(Dummy).simulateError(error);
    expect(wrapper.text()).toEqual('There has been an error');
  });

  it('renders children if no error is throw', () => {
    const Dummy = () => 'All ok!!';

    const wrapper = mount(
      <ErrorBoundary>
        <Dummy />
      </ErrorBoundary>
    );

    expect(wrapper.text()).toEqual('All ok!!');
  });

  it('does not render error message if no error is throw', () => {
    const Dummy = () => 'All ok!!';

    const wrapper = mount(
      <ErrorBoundary>
        <Dummy />
      </ErrorBoundary>
    );

    expect(wrapper.text()).toEqual(
      expect.not.stringContaining('There has been an error')
    );
  });
});
