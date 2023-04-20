function load() {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        x: Math.random() * 500,
        y: Math.random() * 500
      });
    }
  
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
  
    const xScale = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, d => d.x)]);
  
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.y)]);
  
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
  
    const svg = d3.select('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d.x))
      .attr('cy', d => yScale(d.y))
      .attr('r', 5)
      .attr('fill', 'red');
  
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);
  
    svg.append('g')
      .call(yAxis);

      d3.csv('titanic.csv').then(function(data) {
        console.log("Age category: " + parseInt(data[1].Age / 10));
        var grouped = d3.group(data, d => parseInt(d.Age / 10));
        console.log(grouped);
      
        var counts = Array.from(grouped.values(), d => d.length);
      
        var pie = d3.pie()(counts);
      
        var width = 500;
        var height = 500;
        var radius = Math.min(width, height) / 2;
      
        var color = d3.scaleOrdinal()
          .domain(counts)
          .range(d3.schemeCategory10);
      
        var svg = d3.select("#piechart")
          .append("svg")
          .attr("width", width)
          .attr("height", height);
      
        var g = svg.append("g")
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
      
        var arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radius);
      
        var arcs = g.selectAll("arc")
          .data(pie)
          .enter()
          .append("g")
          .attr("class", "arc");
      
        arcs.append("path")
          .attr("fill", function(d) { return color(d.data); })
          .attr("d", arc);
      
        arcs.append("text")
          .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
          .attr("text-anchor", "middle")
          .text(function(d) { return d.data; });
      });
      
}
