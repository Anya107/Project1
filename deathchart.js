function main (){

  var svg = d3.select("#deathchart"),
  margin = 100
  width = svg.attr("width") - margin,
  height = svg.attr("height") - margin;

  var g = svg.append("g").attr("transform", "translate(100,50)")

  d3.csv("/data/deathdays.csv").then(function(data){

    var xScale = d3.scaleBand()
                    .domain(data.map(function(d) { return d.date;} ))
                    .range([0, width]);

    var yScale = d3.scaleLinear()
                  .domain([0, 150])
                  .range ([height-margin, 0]);

      g.append ("g").attr('transform', 'translate(0, '+(height-margin)+')')
        .call(d3.axisBottom(xScale)
      );


      g.append('g')
       .call(d3.axisLeft(yScale)
       .tickFormat(function(d){
          return "deaths" + d;
      })
      .ticks(20));


      g.selectAll(".rect")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d){return xScale(d.date);})
                .attr("y", function(d){return ((height-margin) - d.deaths*((height - margin)/150));})
                .attr("width", xScale.bandwidth())
                .attr("height",function(d){return d.deaths * (height - margin)/150;})
                .attr("fill", "steelblue")

                .on("mouseover", function(e,d){
                  console.log("rectangle on mouseover")
                d3.select(this)
                .attr("opacity", ".8")
                d3.select("#deathchart")
                .append("text")
                .attr("id","deathnumber")
                .attr("x", d3.select(this).attr("x"))
                .attr("y", 50)
                .html(d.deaths)
                .on("mouseout", function(d){
                  console.log("rectangle on mouseout")

                d3.select("#deathnumber")
                .remove()
                d3.select(this)
                .attr("opacity", "1")
                })
                ;


              })
            }
