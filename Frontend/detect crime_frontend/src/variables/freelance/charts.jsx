// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
/*function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}*/

// ##############################
// // // general variables for charts
// #############################
const primaryColor = "#26a69a";
const accentColor = "#ff8a65";
const chartColor = "#FFFFFF";

// General configuration for the charts with Line gradientStroke
const gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            
              drawBorder: false
          }
        }],
        xAxes: [{
          display:1,
          ticks: {
              display: true
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
};

var gradientChartOptionsConfigurationWithNumbersAndGrid = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode:"nearest",
      intersect: 0,
      position:"nearest",
      xPadding:10,
      yPadding:10,
      caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
                categoryPercentage: 0.8,
                barPercentage: 0.6,
                maxBarThickness: 12,
                display:1,
                gridLines: {
                  color: "rgba(0, 0, 0, 0.01)",
                },
                ticks: {
                  display: true
                }
            }],
        xAxes: [{
          display:0,
          ticks: {
              display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
    },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
};

// ##############################
// // // Dashboard view - Panel chart
// #############################

const dashboardPanelChart = {
    data: (canvas) => {
        const ctx = canvas.getContext("2d");
        var chartColor = "#FFFFFF";
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

        return {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
            datasets: [{
                label: "Data",
                borderColor: chartColor,
                pointBorderColor: chartColor,
                pointBackgroundColor: "#2c2c2c",
                pointHoverBackgroundColor: "#2c2c2c",
                pointHoverBorderColor: chartColor,
                pointBorderWidth: 1,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
            }]
        }
    },
    options: {
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
            position: "bottom",
            fillStyle: "#FFF",
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 10
                },
                gridLines: {
                    drawTicks: true,
                    drawBorder: false,
                    display: true,
                    color: "rgba(255,255,255,0.1)",
                    zeroLineColor: "transparent"
                }

            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    color: "rgba(255,255,255,0.1)",
                },
                ticks: {
                    padding: 10,
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold"
                }
            }]
        }
    },
};

// ##############################
// // // Dashboard view - Shipped Products - Card
// #############################

const dashboardShippedProductsChart = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, 'rgba(255, 138, 101,1)');
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(255, 138, 101, 1)");
        gradientFill.addColorStop(1, "rgba(255, 138, 101, 1)");
        return {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Earnings",
                borderColor: "rgba(255, 138, 101,1)",
                pointBorderColor: "#FFF",
                pointBackgroundColor: "rgba(255, 138, 101,1)",
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [2542, 480, 1430, 2550, 1530, 453, 1380, 2434, 1568, 610, 1700, 2630]
            }]
        }
    },
    options: gradientChartOptionsConfiguration,
};

// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(233, 30, 99, 0)");
        gradientFill.addColorStop(1, "rgba(233, 30, 99, 0)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "New Buyers today",
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 4,
                pointRadius: 6,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [140, 200, 350, 300, 500, 250, 300, 100]
            }]
        }
    },
    options: gradientChartOptionsConfigurationWithNumbersAndGrid,
}

// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const dashboard24HoursPerformanceChart = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, accentColor);
        gradientFill.addColorStop(1, accentColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
            ],
            datasets: [{
                label: "Active Countries",
                backgroundColor: gradientFill,
                borderColor: accentColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: accentColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [80,99,86,96,123,85,100,75,88,90,123,155]
            }]
        }
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            bodySpacing: 4,
            mode:"nearest",
            intersect: 0,
            position:"nearest",
            xPadding:10,
            yPadding:10,
            caretPadding:10
        },
        responsive: 1,
        scales: {
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
                    drawBorder: false
                }
            }],
            xAxes: [{
                display:0,
                ticks: {
                    display: false
                },
                gridLines: {
                    color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
                    drawTicks: false,
                    display: false,
                    drawBorder: false
                }
            }]
        },
        layout:{
            padding:{left:0,right:0,top:0,bottom:0}
        }
    },
}

module.exports = {
    dashboardPanelChart, // Chart for Dashboard view - Will be rendered in panel
    dashboardShippedProductsChart, // Chart for Dashboard view - Shipped Products Card
    dashboardAllProductsChart, // Chart for Dashboard view - All products Card
    dashboard24HoursPerformanceChart, // Chart for Dashboard view - 24 Hours Performance Card
}
