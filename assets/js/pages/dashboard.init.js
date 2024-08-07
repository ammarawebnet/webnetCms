/*
Template Name: Lexa - Admin & Dashboard Template
Author: Themesdesign
Website: https://Themesdesign.com/
Contact: Themesdesign@gmail.com
File: Dashboard
*/

!(function ($) {
  "use strict";

  var Dashboard = function () {};

  //creates area chart
  (Dashboard.prototype.createAreaChart = function (
    element,
    pointSize,
    lineWidth,
    data,
    xkey,
    ykeys,
    labels,
    lineColors
  ) {
    Morris.Area({
      element: element,
      pointSize: 0,
      lineWidth: 1,
      data: data,
      xkey: xkey,
      ykeys: ykeys,
      labels: labels,
      resize: true,
      gridLineColor: "rgba(108, 120, 151, 0.1)",
      hideHover: "auto",
      lineColors: lineColors,
      fillOpacity: 0.9,
      behaveLikeLine: true,
    });
  }),
    //creates Donut chart
    (Dashboard.prototype.createDonutChart = function (element, data, colors) {
      Morris.Donut({
        element: element,
        data: data,
        resize: true,
        colors: colors,
      });
    }),
    //creates Stacked chart
    (Dashboard.prototype.createStackedChart = function (
      element,
      data,
      xkey,
      ykeys,
      labels,
      lineColors
    ) {
      Morris.Bar({
        element: element,
        data: data,
        xkey: xkey,
        ykeys: ykeys,
        stacked: true,
        labels: labels,
        hideHover: "auto",
        resize: true, //defaulted to true
        gridLineColor: "rgba(108, 120, 151, 0.1)",
        barColors: lineColors,
      });
    }),
    $("#sparkline").sparkline([8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
      type: "bar",
      height: "130",
      barWidth: "10",
      barSpacing: "7",
      barColor: "#3eb7ba",
    });

  (Dashboard.prototype.init = function () {
    //creating area chart
    // var $areaData = [
    //     {y: '2011', a: 0, b: 0, c:0},
    //     {y: '2012', a: 150, b: 45, c:15},
    //     {y: '2013', a: 60, b: 150, c:195},
    //     {y: '2014', a: 180, b: 36, c:21},
    //     {y: '2015', a: 90, b: 60, c:360},
    //     {y: '2016', a: 75, b: 240, c:120},
    //     {y: '2017', a: 30, b: 30, c:30}
    // ];
    // this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#ccc', '#36508b', '#3eb7ba']);

    //creating donut chart
    // var $donutData = [
    //     {label: "Download Sales", value: 12},
    //     {label: "In-Store Sales", value: 30},
    //     {label: "Mail-Order Sales", value: 20}
    // ];
    // this.createDonutChart('morris-donut-example', $donutData, ['#f0f1f4', '#3eb7ba', '#36508b']);

    // start - this is dashborad donut chart for device
    var $donutData = [
      { label: "Desktop", value: 52 },
      { label: "Mobile", value: 45 },
      { label: "Tablet", value: 3 },
    ];
    // start - this is dashborad donut chart for device

    this.createDonutChart("morris-donut-example", $donutData, [
      "#cf7e38",
      "#c961c4",
      "#61b1c9",
    ]);
    // end - this is dashborad donut chart for device
    var $stckedData = [
      { y: "2005", a: 45, b: 180 },
      { y: "2006", a: 75, b: 65 },
      { y: "2007", a: 100, b: 90 },
      { y: "2008", a: 75, b: 65 },
      { y: "2009", a: 100, b: 90 },
      { y: "2010", a: 75, b: 65 },
      { y: "2011", a: 50, b: 40 },
      { y: "2012", a: 75, b: 65 },
      { y: "2013", a: 50, b: 40 },
      { y: "2014", a: 75, b: 65 },
      { y: "2015", a: 100, b: 90 },
      { y: "2016", a: 80, b: 65 },
    ];
    this.createStackedChart(
      "morris-bar-stacked",
      $stckedData,
      "y",
      ["a", "b"],
      ["Series A", "Series B"],
      ["#1e8741", "#f0f1f4"]
    );
  }),
    //init
    ($.Dashboard = new Dashboard()),
    ($.Dashboard.Constructor = Dashboard);
})(window.jQuery),
  //initializing
  (function ($) {
    "use strict";
    $.Dashboard.init();
  })(window.jQuery);
