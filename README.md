# React Canvas Draw

Canvas drawing component to react

> Main core idea forked from https://github.com/embiem/react-canvas-draw

## Install

```bash
npm install --save rc-canvas-draw
```

or

```bash
yarn add rc-canvas-draw
```

## Props and Default Values

Props

```ts
export type Dimensions = number | string;

export type Bounds = {
  min: number;
  mas: number;
};

export interface CanvasDrawProps {
  loadTimeOffset?: number;
  lazyRadius?: number;
  brushRadius?: number;
  brushColor?: string;
  catenaryColor?: string;
  gridColor?: string;
  backgroundColor?: string;
  hideGrid?: boolean;
  canvasWidth?: Dimensions;
  canvasHeight?: Dimensions;
  disabled?: boolean;
  imgSrc?: string;
  saveData?: string;
  immediateLoading?: boolean;
  hideInterface?: boolean;
  gridSizeX?: number;
  gridSizeY?: number;
  gridLineWidth?: number;
  hideGridX?: boolean;
  hideGridY?: boolean;
  enablePanAndZoom?: boolean;
  mouseZoomFactor?: number;
  zoomExtents?: Bounds;
  clampLinesToDocument?: boolean;
  onChange?: (v: CanvasDraw) => void;
}
```

Default Values

```json
  let defaultProps = {
    onChange: null
    loadTimeOffset: 5,
    lazyRadius: 30,
    brushRadius: 12,
    brushColor: "#444",
    catenaryColor: "#0a0302",
    gridColor: "rgba(150,150,150,0.17)",
    hideGrid: false,
    canvasWidth: 400,
    canvasHeight: 400,
    disabled: false,
    imgSrc: "",
    saveData: null,
    immediateLoading: false,
    hideInterface: false,
    gridSizeX: 25,
    gridSizeY: 25,
    gridLineWidth: 0.5,
    hideGridX: false,
    hideGridY: false
    enablePanAndZoom: false,
    mouseZoomFactor: 0.01,
    zoomExtents: { min: 0.33, max: 3 },
  };

```

## Usage

```jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CanvasDraw } from 'rc-canvas-draw';

function App() {
  return <CanvasDraw />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
