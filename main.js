console.log("hi")


// define the dimensions of the chart
const margin = {top: 20, right: 30, bottom: 50, left: 40};
const width = 400 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

// create the SVG element
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// define the scales
const xScale = d3.scaleBand()
  .range([0, width]);

const yScale = d3.scaleLinear()
  .range([height, 0]);

  // create the axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);