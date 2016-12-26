import jsdom from 'mocha-jsdom';
import SVGGrid from '../src/index.js';
import { expect } from 'chai';

describe('SVGGrid', () => {
  jsdom();

  it('should render a simple empty svg when provided no config or grid', () => {
    document.body.innerHTML = '<div id="container"></div>'
    const inst = new SVGGrid()
    const elem = document.getElementById('container');
    inst.render(elem)

    expect(elem.innerHTML).to.eql('<svg width="200" height="200"></svg>');
  })
})
