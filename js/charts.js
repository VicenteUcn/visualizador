
// Load Charts and the corechart and barchart packages.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['line']});
// Draw the pie chart and bar chart when Charts is loaded.
google.charts.setOnLoadCallback(drawChart);

google.charts.setOnLoadCallback(linea);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Activos', 785],
    ['Inactivos', 181],
    ['En receso', 35],
   
  ]);


  var piechart_options = {title:'Estado de establecimientos de la región',
                 width:350,
                 height:300};
  var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
  piechart.draw(data, piechart_options);


}
function linea() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Año');
    data.addColumn('number', 'Total');
    data.addColumn('number', 'Activos');
    data.addColumn('number', 'Inactivos');
   

    data.addRows([
     
      
      
     
      ['2016',  973, 789, 157],
      ['2017',  975, 790, 157],
      ['2018',  980,   788,164],
      ['2019',  991, 789, 167],
      ['2020',  1001, 785, 181],
    ]);

    var options = {
      title:'Cantidad de establecimientos',
      width: 350,
      height:300 
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }