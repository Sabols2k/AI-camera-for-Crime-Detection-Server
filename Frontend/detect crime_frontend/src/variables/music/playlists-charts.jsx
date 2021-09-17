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

module.exports = {
    playlistCharts, // Chart for Dashboard view - 24 Hours Performance Card
}
