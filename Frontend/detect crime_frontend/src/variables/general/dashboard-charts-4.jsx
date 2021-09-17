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
const purpleColor = "#7f8ff4";


//const chartColor = "#FFFFFF";



// ##############################
// // // Dashboard view - Bar Chart - Card
// #############################

const playlistCharts = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, purpleColor);
        gradientFill.addColorStop(1, purpleColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [80,139,96,76,123,85,80,145]
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
            }],
            xAxes: [{
                display:0,
                ticks: {
                    display: false
                },
              categoryPercentage: 0.6,
              barPercentage: 0.6,
              maxBarThickness: 8,
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




const playlistCharts1 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, purpleColor);
        gradientFill.addColorStop(1, purpleColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [510,519,366,716,523,455,801,645,]
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
            }],
            xAxes: [{
              categoryPercentage: 0.6,
              barPercentage: 0.6,
              maxBarThickness: 8,
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


// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 2,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 3,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
            }]
        }
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            display: false,
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




// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart1 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 2,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 3,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [4110, 5010, 6150, 7010, 1200, 1250, 1300, 2900]
            }]
        }
    },
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        tooltips: {
            display: false,
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

// ##############################
// // // Dashboard view - All Products - Card
// #############################

function lineChartData(data, time) {
    // return {
    //     data: (canvas) => {
        //  var ctx = canvas.getContext("2d");
        //  var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        //  gradientStroke.addColorStop(0, '#18ce0f');
        //  gradientStroke.addColorStop(1, primaryColor);
        //  var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        //  gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        //  gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
            labels: time,
            datasets: [{
                label: "Stats",
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: 'rgba(255,255,255,0)',
                borderWidth: 2,
                data: data
            }]
        }

}


const dashboardAllProductsChart2 =  {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [640, 660, 700, 720, 790, 832, 860, 920]
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
    /*scales: {
        yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
              color: "rgba(0, 0, 0, 0.07)",
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
    },*/
    scales: {
             xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }],
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
            }]
      },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
    }
}


// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart3 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [640, 660, 700, 720, 790, 832, 860, 920]
            },
            {
                label: "Downloads",
                borderColor: accentColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: accentColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [540, 760, 700, 620, 690, 732, 660, 720]
            },
            {
                label: "Visitors",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [740, 760, 800, 720, 690, 832, 760, 820]
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
    /*scales: {
        yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
              color: "rgba(0, 0, 0, 0.07)",
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
    },*/
    scales: {
             xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }],
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
            }]
      },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
},
}



// ##############################
// // // Dashboard view - All Products - Card
// #############################

const dashboardAllProductsChart31 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 0)");

       

        return {
            labels: [],
            datasets: [
            {
                label: "Downloads",
                borderColor: accentColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: accentColor,
                pointBorderWidth: 2,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: []
            },
            // {
            //     label: "Visitors",
            //     borderColor: purpleColor,
            //     pointBorderColor: "#FFF",
            //     pointBackgroundColor: purpleColor,
            //     pointBorderWidth: 2,
            //     pointHoverRadius: 2,
            //     pointHoverBorderWidth: 2,
            //     pointRadius: 4,
            //     fill: true,
            //     backgroundColor: gradientFill,
            //     borderWidth: 2,
            //     data: [540, 660, 500, 620, 790, 632, 560, 820]
            // },
            // {
            //     label: "Visitors2",
            //     borderColor: purpleColor,
            //     pointBorderColor: "#FFF",
            //     pointBackgroundColor: purpleColor,
            //     pointBorderWidth: 2,
            //     pointHoverRadius: 2,
            //     pointHoverBorderWidth: 2,
            //     pointRadius: 4,
            //     fill: true,
            //     backgroundColor: gradientFill,
            //     borderWidth: 2,
            //     data: [740, 660, 500, 620, 790, 632, 560, 820]
            // }

        ]
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
    /*scales: {
        yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0.01)",
            zeroLineColor: "transparent",
              color: "rgba(0, 0, 0, 0.07)",
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
    },*/
    scales: {
             xAxes: [{
              display:1,
              gridLines: {
                 color: "rgba(0, 0, 0, 0.01)",
              },
              ticks: {
                  display: false
              },

            }],
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
            }]
      },
    layout:{
      padding:{left:0,right:0,top:0,bottom:0}
    }
},
}



module.exports = {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    lineChartData,
    dashboardAllProductsChart31,
    playlistCharts,
    playlistCharts1,
}
