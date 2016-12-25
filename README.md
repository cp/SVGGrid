SVGGrid
===

Render a grid as SVG. Useful for building previews of given grid layouts.

No dependencies.

## Usage

```javascript
const layout = [
  { w: 12, h: 1, x: 0, y: 0 },
  { w: 6, h: 1, x: 0, y: 1 },
  { w: 6, h: 1, x: 0, y: 2 },
  { w: 3, h: 2, x: 6, y: 1 },
  { w: 3, h: 2, x: 9, y: 1 }
];

const settings = {
  rowHeight: 50, // Height of each individual row
  height: 200, // Max height of grid
  width: 300, // Max width of grid
  margin: 5, // Margins between grid items
  cols: 12, // Number of columns in your grid
};

// Initialize the renderer
const grid = new SVGGrid(layout, settings);

// Render the grid on the DOM
grid.render(document.getElementById('grid'));
```
## Development

> `npm install`

> `npm start` // Start a webserver at localhost:4242

## TODO

- [ ] Collision detection
- [ ] Tests
