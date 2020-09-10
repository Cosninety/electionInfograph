const svg = d3.select("#chartArea").append("svg")
  // .attr( "preserveAspectRatio","xMinYMin meet")
  .attr("width", "90vh")
  .attr("height", "90%")
  // .attr("width", "650")
  // .attr("height", "650")
  // .attr("viewBox", "0 0 650 650")
  // .attr('width', '100%')
  .attr("style", "outline: thin solid #adadad")  ;
  // .attr("stroke", "dkGrey");

//color pallete
ltGrey = "#ededed";
grey = "#D3D3D3";
dkGrey = "#adadad";
orange = "orange";

//tooltip
// tip = d3.tip().attr('class','d3.tip').html(function(d){return d;});



vH_unscaled= $(window).innerHeight();
vH= .90 * vH_unscaled
redraw(vH)

rectHeight =  vH/13;
rectWidth =  vH/13;


$(window).on('resize', function() {
  vH_unscaled = $(this).innerHeight();
  vH= .90 * vH_unscaled
  console.log("resize");
  redraw(vH);
})



function redraw(viewportHeight){

  svg.selectAll("*").remove();
  vH = viewportHeight;
  rectHeight =  vH/13;
  rectWidth = rectHeight;
  console.log("rectHeight is now"+rectHeight);
  console.log("vHeight is now"+vH);

  const tip = d3.tip()
  .attr('class', 'd3-tip')
  .html(d=>d)
  // .html(d=> {
  //   let text = "<span>'rectangle # '</span>"+ d
  //   text += "<p>'SampleText2'</p>"
  //   text += "<p>'SampleText3'</p>"
    // return text;
  // })
  svg.call(tip);

  rects = svg.selectAll("rect")  
  .data(d3.range(169)) // defines range 13x13
  .enter()
  .append("rect") 
    .attr("x", (d, i) => vH/13 * (i % 13)) //arrays columns of rectangles (x-axis) 
    .attr("y", (d, i) => vH/13 * Math.floor(i / 13)) // array rows of rectangles (y-axis)
    .attr("height", vH/13) // assigns height to predefined height
    .attr("width", vH/13) // assigns width to predefined width
    .attr("stroke", "white") //creates a stroke around the rectangle
    .attr("fill",  grey)
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);

 
    
//CROSSES
  // cross = svg.selectAll("cross")  
  // .data(d3.range(169)) // defines range 13x13
  // .enter()
  // svg.append("path")
  //   .attr("d", cross)
  //   .attr("x", (d, i) => rectWidth * (i % 13)) 
  //   .attr("y", (d, i) => rectWidth * Math.floor(i / 13))
  //   .attr("fill",  "red");


// http://using-d3js.com/05_10_symbols.html
// var cross = d3.symbol().type(d3.symbolCross).size(110);
// svg.append("path")
//   .attr("d", cross)
//   .attr("transform", "translate(325,325)")
//   .attr("fill", ltGrey)
  // .style("stroke", "red")
  // .style("stroke-width", "1px");

  // svg.append("path")
  // // .attr("d", d3.symbol())
  // .attr("d", cross)
  // .attr("transform", "translate(250,250)");


  var rectangle1 = svg.append("rect")
  .attr("x", 2/13 * vH)
  .attr("y", 10/13 *  vH)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

  var rectangle2 = svg.append("rect")
  .attr("x", 1/13 *  vH)
  .attr("y", 11/13 *  vH)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

  var rectangle3 = svg.append("rect")
  .attr("x", 0)
  .attr("y",  12/13 * vH)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

// rects.call(tip)

var statenIsland = svg.append("text")
    .attr("x", 1/13 * vH)
    .attr("y", 11/13 *  vH)
    // .attr("font-family", "sans-serif")
    .attr("font-size","25px") 
    .data('StatenIsland')
    .attr("fill","black")
    .text("STATEN ISLAND");

  }

