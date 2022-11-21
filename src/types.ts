import * as React from 'react';
import { CanvasDraw } from '.';

export type Dimensions = number | string;

export type Bounds = {
  min: number;
  mas: number;
};

export interface CanvasDrawProps {
  ref?: React.LegacyRef<CanvasDraw>;
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
  style?: React.CSSProperties;
  onChange?: (v: CanvasDraw) => void;
}
