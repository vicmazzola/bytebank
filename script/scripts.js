import selectQuote from "./printQuote.js";
const dollarChartElement = document.getElementById('dollarChart');

const dollarChart = new Chart(dollarChartElement, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dollar',
            data: [],
            borderWidth: 1
        }]
    },
});

function generateTime() {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(time);
    return time;
}

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    })
    chart.update();
}

let dollarWorker = new Worker('./script/workers/workerDollar.js');
dollarWorker.postMessage('usd');

dollarWorker.addEventListener("message", event => {
    let time = generateTime();
    let value = event.data.ask;
    selectQuote("dollar", value);
    addData(dollarChart, time, value);
})

const yenChartElement = document.getElementById('yenChart');
const yenChart = new Chart(yenChartElement, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Yen',
            data: [],
            borderWidth: 1
        }]
    }
})

let yenWorker = new Worker("./script/workers/workerYen.js");
yenWorker.postMessage("yen");
yenWorker.addEventListener("message", event => {
    let time = generateTime();
    let value = event.data.ask;
    addData(yenChart, time, value);
    selectQuote("yen", value)
})
