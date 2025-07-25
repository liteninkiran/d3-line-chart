import { Injectable } from '@angular/core';
import { ChartContext } from '../types/d3/d3';
import * as d3 from 'd3';

@Injectable({ providedIn: 'root' })
export class BarChartRendererService {

    private context: ChartContext;

    constructor() { }

    public setContext(context: ChartContext): void {
        this.context = context;
    }

    public removeBars(): void {
        this.removeLayer('bar-layer');
    }

    private removeLayer(layer: string): void {
        this.context.getLayer(layer).selectAll('*').remove();
    }

    public drawBar(): void {
        const { x, y, data, getLayer, chartControl } = this.context;
        const barLayer = getLayer('bar-layer');
        const barWidth = chartControl.bar.width;

        barLayer.selectAll('rect')
            .data(data)
            .join(
                enter => enter.append('rect')
                .attr('x', d => x(d.date) - barWidth / 2)
                .attr('y', d => y(d.value))
                .attr('width', barWidth)
                .attr('height', d => y(0) - y(d.value)),
                update => update
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('x', d => x(d.date) - barWidth / 2)
                    .attr('y', d => y(d.value))
                    .attr('width', barWidth)
                    .attr('height', d => y(0) - y(d.value)),
                exit => exit.remove(),
            )
            .attr('fill', chartControl.bar.colour);
    }
}
