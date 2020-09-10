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


  ltGrey = "#ededed";
  grey = "#D3D3D3";
  dkGrey = "#adadad";
  orange = "orange";

  
  viewportWidth = $(document).width();
  console.log(viewportWidth)

  // $(window).on('resize', function() {
  //   if ($(this).width() !== viewportWidth) {
  //     viewportWidth = $(this).width();
  //     console.log("resize");
  //     console.log(viewportWidth);
  //   }})

    $(window).on('resize', function() {
      viewportWidth = $(this).width();
      console.log("resize");
      console.log(viewportWidth);
    })

  // document.onchange(function(){
  //   newWidth = $(this).width();
  //   viewportWidth = newWidth;
  //   return viewportWidth;
  // });


  rectHeight = viewportWidth/13;
  rectWidth = viewportWidth/13;
 
  rectHeight = 50;
  rectWidth = 50;

  rects = svg.selectAll("rect")  
  .data(d3.range(169)) // defines range 13x13
  .enter()
  .append("rect") 
    .attr("x", (d, i) => rectWidth * (i % 13)) //arrays columns of rectangles (x-axis) 
    .attr("y", (d, i) => rectWidth * Math.floor(i / 13)) // array rows of rectangles (y-axis)
    .attr("height", rectHeight) // assigns height to predefined height
    .attr("width", rectWidth) // assigns width to predefined width
    .attr("stroke", "white") //creates a stroke around the rectangle
    .attr("fill",  grey);

  // cross = svg.selectAll("cross")  
  // .data(d3.range(169)) // defines range 13x13
  // .enter()
  // svg.append("path")
  //   .attr("d", cross)
  //   .attr("x", (d, i) => rectWidth * (i % 13)) 
  //   .attr("y", (d, i) => rectWidth * Math.floor(i / 13))
  //   .attr("fill",  "red");



// http://using-d3js.com/05_10_symbols.html
var cross = d3.symbol().type(d3.symbolCross).size(110);
svg.append("path")
  .attr("d", cross)
  .attr("transform", "translate(325,325)")
  .attr("fill", ltGrey)
  // .style("stroke", "red")
  // .style("stroke-width", "1px");

  // svg.append("path")
  // // .attr("d", d3.symbol())
  // .attr("d", cross)
  // .attr("transform", "translate(250,250)");

  var rectangle1 = svg.append("rect")
  .attr("x", 100)
  .attr("y", 500)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

  var rectangle2 = svg.append("rect")
  .attr("x", 50)
  .attr("y", 550)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

  var rectangle3 = svg.append("rect")
  .attr("x", 0)
  .attr("y", 600)
  .attr("fill", orange)
  .attr("width", rectWidth)
  .attr("height", rectHeight);

var statenIsland = svg.append("text")
    .attr("x","25")
    .attr("y","550")
    // .attr("font-family", "sans-serif")
    .attr("font-size","25px") 
    .attr("fill","black")
    .text("STATEN ISLAND");

