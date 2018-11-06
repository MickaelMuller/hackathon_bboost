import React from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

// Same as data.tsv
import data from './data';

import './Graphs.css';

const svgWidth = 960,
  svgHeight = 500;

//Note: getting width and height from a variable rather than the elements attribute e.g. svg.attr("width")
const margin = { top: 20, right: 20, bottom: 30, left: 40 },
  width = svgWidth - margin.left - margin.right,
  height = svgHeight - margin.top - margin.bottom;

const x = scaleBand()
    .rangeRound([0, width])
    .padding(0.1),
  y = scaleLinear().rangeRound([height, 0]);

x.domain(data.map(d => d.letter));
y.domain([0, max(data, d => d.frequency)]);



// <BarChart/>
export default () => (

  <svg width={svgWidth} height={svgHeight}>
    <g transform={`translate(${margin.left}, ${margin.top})`}>
      <g
        className="axis axis--x"
        transform={`translate(0, ${height})`}
        ref={node => select(node).call(axisBottom(x))}
      />
      <g className="axis axis--y">
        <g ref={node => select(node).call(axisLeft(y).ticks(10, '%'))} />

        <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
          Frequency
        </text>
      </g>
      {data.map(d => (
        <rect
          key={d.letter}
          className="bar"
          x={x(d.letter)}
          y={y(d.frequency)}
          width={x.bandwidth()}
          height={height - y(d.frequency)}
        />
      ))}
    </g>
  </svg>
);