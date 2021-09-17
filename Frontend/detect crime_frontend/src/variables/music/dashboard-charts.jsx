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
//const primaryColor = "#26a69a";
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


const playlistCharts2 = {
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
                data: [150,339,664,176,213,455,180,441,168,180,243,455]
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



const playlistCharts4 = {
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
                data: [150,239,66,176,123,55,480,45,268,80,143,55]
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

const dashboardAllProductsChart11 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 0)");
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
                data: [640, 500, 650, 700, 400, 850, 500, 700]
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



const dashboardAllProductsChart12 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 0)");
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
                data: [140, 1500, 650, 1700, 1200, 1250, 1300, 1900]
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



const dashboardAllProductsChart13 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 0)");
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
                data: [2240, 2500, 1650, 2700, 1200, 1250, 1300, 1900]
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



const dashboardAllProductsChart14 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 0)");
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
                data: [1140, 1500, 1650, 1700, 1200, 850, 900, 1100]
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
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 1)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [420, 600, 650, 500, 1200, 450, 600, 300]
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
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 1)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [410, 500, 650, 700, 500, 450, 700, 1200]
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

const dashboardAllProductsChart3 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 1)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [4330, 5300, 6530, 7300, 3200, 6250, 4300, 4900]
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

const dashboardAllProductsChart4 = {
    data: (canvas) => {
        var ctx = canvas.getContext("2d");
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#18ce0f');
        gradientStroke.addColorStop(1, purpleColor);
        var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
        gradientFill.addColorStop(0, "rgba(127, 143, 244, 0)");
        gradientFill.addColorStop(1, "rgba(127, 143, 244, 1)");
        return {
            labels: ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
            datasets: [{
                label: "Stats",
                borderColor: purpleColor,
                pointBorderColor: "#FFF",
                pointBackgroundColor: purpleColor,
                pointBorderWidth: 0,
                pointHoverRadius: 0,
                pointHoverBorderWidth: 0,
                pointRadius: 0,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [820, 1500, 1650, 700, 1200, 1250, 1000, 1200]
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




module.exports = {
    dashboardAllProductsChart11,
    dashboardAllProductsChart12,
    dashboardAllProductsChart13,
    dashboardAllProductsChart14,
    dashboardAllProductsChart1,
    dashboardAllProductsChart2,
    dashboardAllProductsChart3,
    dashboardAllProductsChart4,
    playlistCharts,
    playlistCharts2,
    playlistCharts3,
    playlistCharts4,
}
