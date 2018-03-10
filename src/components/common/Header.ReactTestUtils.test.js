import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Header from './Header';

function renderHeader() {
  let renderer = TestUtils.createRenderer();
  renderer.render(<Header />);
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  };
}

describe('Header via React Test Utils', () => {
  it('renders header and h1', () => {
    const { output } = renderHeader();
    expect(output.type).toBe('header');

    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });
});
