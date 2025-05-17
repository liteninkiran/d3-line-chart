import { ScaleLinear, ScaleTime } from 'd3-scale';
import { EnterElement, Selection } from 'd3-selection';
import { ChartControl } from './chart-controls';

export type ChartData = {
    date: Date;
    value: number;
}

export type XScale = ScaleTime<number, number>;
export type YScale = ScaleLinear<number, number>;
export type Svg = Selection<SVGSVGElement, unknown, null, undefined>;
export type Group = Selection<SVGGElement, unknown, null, undefined>;
export type Div = Selection<HTMLDivElement, unknown, null, undefined>;

export type MarkerEnter = Selection<EnterElement, ChartData, SVGGElement, unknown>;
export type MarkerUpdate = Selection<SVGCircleElement, ChartData, SVGGElement, unknown>;
export type MarkerExit = Selection<SVGCircleElement, ChartData, SVGGElement, unknown>;

export type ChartContext = {
    svg: Svg;
    container: Group;
    x: XScale;
    y: YScale;
    innerHeight: number;
    innerWidth: number;
    data: ChartData[];
    chartControl: ChartControl;
    getLayer: (name: string) => Group;
}
