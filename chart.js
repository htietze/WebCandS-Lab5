let canvas = document.getElementById('bridge-chart')
let context = canvas.getContext('2d')

let bridgeNames = []
let bridgeSpans = []
bridges.forEach(function(bridge) {
    bridgeNames.push(bridge.name)
})
bridges.forEach(function(bridge) {
    bridgeSpans.push(bridge.span)
})

chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [{
            label: 'Longest Bridges',
            data: bridgeSpans,
            backgroundColor: ['red', 'blue', 'yellow', 'orange', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})



