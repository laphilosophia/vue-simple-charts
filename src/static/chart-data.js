export const electionChartData = {
  type: 'bar',
  data: {
    labels: ['Recep Tayyip Erdoğan', 'Abdullah Gül', 'Meral Akşener', 'Doğu Perinçek', 'Levent Gültekin', 'Yılmaz Büyükerşen'],
    datasets: [
      {
        label: 'Oy Oranları',
        data: [0.6, 9, 12, 1.4, 33, 54],
        backgroundColor: ['yellow', 'red', 'green', 'brown', 'gray', 'aqua'],
        borderColor: ['yellow', 'red', 'green', 'brown', 'gray', 'aqua'],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          padding: 25
        }
      }]
    }
  }
}
export default electionChartData
