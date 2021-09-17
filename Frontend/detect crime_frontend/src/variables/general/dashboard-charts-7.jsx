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
        gradientFill.addColorStop(0, primaryColor);
        gradientFill.addColorStop(1, primaryColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [50,39,66,76,23,55,80,45,68,80,43,55]
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
                  barPercentage: 0.5,
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



const playlistCharts1 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, primaryColor);
        gradientFill.addColorStop(1, primaryColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [50,39,66,176,23,155,80,45,68,180,43,155]
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
                  barPercentage: 0.5,
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


const playlistCharts2 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, primaryColor);
        gradientFill.addColorStop(1, primaryColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [150,39,166,76,23,55,180,45,168,80,43,55]
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
                  barPercentage: 0.5,
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


const playlistCharts3 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, primaryColor);
        gradientFill.addColorStop(1, primaryColor);
        return {
            labels :[
                "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
            ],
            datasets: [{
                label: "Progress",
                backgroundColor: gradientFill,
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 2,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 1,
                pointRadius: 4,
                fill: true,
                borderWidth: 1,
                data: [50,139,66,176,23,55,80,45,168,80,143,155]
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
                  barPercentage: 0.5,
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


const playlistCharts5 = {
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
                label: "Progress",
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
                data: [50,39,66,76,23,55,80,45,68,80,43,55]
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
                  barPercentage: 0.5,
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



const playlistCharts6 = {
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
                label: "Progress",
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
                data: [50,39,66,176,23,155,80,45,68,180,43,155]
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
                  barPercentage: 0.5,
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


const playlistCharts7 = {
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
                label: "Progress",
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
                data: [150,39,166,76,23,55,180,45,168,80,43,55]
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
                  barPercentage: 0.5,
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


const playlistCharts8 = {
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
                label: "Progress",
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
                data: [50,139,66,176,23,55,80,45,168,80,143,155]
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
                  barPercentage: 0.5,
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


const playlistCharts9 = {
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
                label: "Progress",
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
                data: [150,239,166,276,213,155,210,45,168,180,43,75]
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
                  barPercentage: 0.5,
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

const playlistCharts10 = {
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
                label: "Progress",
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
                data: [150,139,166,276,23,155,280,245,268,80,143,255]
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
                  barPercentage: 0.5,
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
        gradientStroke.addColorStop(1, primaryColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(38, 166, 154, 0)");
        gradientFill.addColorStop(1, "rgba(38, 166, 154, 1)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: primaryColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: primaryColor,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
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

const dashboardAllProductsChart2 = {
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
                data: [2640, 1660, 2700, 1720, 1790, 2832, 2860, 1920]
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
                label: "Uploads",
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
                data: [1640, 1660, 1700, 1720, 1790, 2132, 1860, 1920]
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
                data: [2540, 1760, 1700, 2620, 1690, 2732, 1460, 1720]
            },
            {
                label: "Users",
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
                data: [1740, 2760, 1800, 1720, 1690, 1832, 1760, 1820]
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



module.exports = {
    dashboardAllProductsChart,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    playlistCharts, 
    playlistCharts1, 
    playlistCharts2, 
    playlistCharts3, 
    playlistCharts5, 
    playlistCharts6, 
    playlistCharts7, 
    playlistCharts8, 
    playlistCharts9, 
    playlistCharts10, 
}
