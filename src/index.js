import utils from './utils';

class SVGGrid {
  constructor(layout, settings) {
    this.settings = {};
    this.settings.cols = settings.cols || 12;
    this.settings.width = settings.width || 200;
    this.settings.margin = settings.margin || 5;
    this.settings.height = settings.height || 200;
    this.settings.rowHeight = settings.rowHeight || 20;

    this.layout = layout;
  }

  getCoords({ x, y, w, h }) {
    return {
      x: ((this.settings.width / this.settings.cols) * x) + (this.settings.margin / 2),
      y: (this.settings.rowHeight * y) + (this.settings.margin * (y + 0.5)),
      h: (this.settings.rowHeight * h) + (this.settings.margin * (h - 1)),
      w: ((this.settings.width / this.settings.cols) * w) - this.settings.margin,
    };
  }

  renderItem(container, layout) {
    const { x, y, w, h } = this.getCoords(layout);

    const item = utils.createSVGElem('rect');
    item.setAttribute('fill', '#dedede');
    item.setAttribute('stroke', '#ccc');
    item.setAttribute('x', x);
    item.setAttribute('y', y);
    item.setAttribute('width', w);
    item.setAttribute('height', h);

    container.appendChild(item);
  }

  render(elem) {
    const container = utils.createSVGElem('svg');
    container.setAttribute('width', this.settings.width);
    container.setAttribute('height', this.settings.height);

    this.layout.forEach(item => this.renderItem(container, item));

    elem.appendChild(container);
  }
}

module.exports = SVGGrid;
