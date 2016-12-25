import * as d3 from 'd3';

class D3Grid {
  constructor(layout, settings) {
    this.settings = {};
    this.settings.cols = settings.cols || 12;
    this.settings.width = settings.width || 200;
    this.settings.margin = settings.margin || 5;
    this.settings.height = settings.height || 200;
    this.settings.rowHeight = settings.rowHeight || 20;

    this.layout = layout;
  }

  getWH(w, h) {
    const wVal = ((this.settings.width / this.settings.cols) * w) - this.settings.margin;
    const hVal = (this.settings.rowHeight * h) + (this.settings.margin * (h - 1));

    return { w: wVal, h: hVal };
  }

  getXY(x, y) {
    const yVal = (this.settings.rowHeight * y) + (this.settings.margin * (y + 0.5));
    const xVal = ((this.settings.width / this.settings.cols) * x) + (this.settings.margin / 2);

    return { x: xVal, y: yVal };
  }

  renderItem(container, layout) {
    const { w, h } = this.getWH(layout.w, layout.h);
    const { x, y } = this.getXY(layout.x, layout.y);

    container.append('rect')
      .attr('fill', '#dedede')
      .attr('stroke', '#ccc')
      .attr('x', x)
      .attr('y', y)
      .attr('width', w)
      .attr('height', h);
  }

  render(elem) {
    const container = d3.select(elem)
      .append('svg')
      .attr('width', this.settings.width)
      .attr('height', this.settings.height);

    this.layout.forEach(item => this.renderItem(container, item));
  }
}

module.exports = D3Grid;
