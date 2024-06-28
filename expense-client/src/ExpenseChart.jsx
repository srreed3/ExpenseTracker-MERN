import { useEffect, useRef } from 'react';

function ExpenseChart({ expenses }) {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const labels = ['Rent', 'Utilities', 'Groceries', 'Gas', 'Phone', 'Loans', 'Insurance', 'Entertainment', 'Other'];
      const colorHex = ['#cc260c', '#f5870a', '#d4e919', '#227541', '#26abab', '#1328e8', '#892ce6', '#f233e2', '#899191'];
      let chartData = new Array(labels.length).fill(0);
  
      expenses.forEach(expense => {
        const index = labels.indexOf(expense.type);
        if (index !== -1) {
          chartData[index] += expense.amount;
        }
      });
  
      const ctx = chartRef.current.getContext('2d');
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      chartRef.current.chart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: chartData,
            backgroundColor: colorHex
          }],
          labels: labels,
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            },
            datalabels: {
              backgroundColor: (context) => context.dataset.backgroundColor,
            }
          }
        }
      });
    }, [expenses]);



    return (
        <>
        <div className="wrapper">
            <div className="chartContainer">
                <div className="chart-wrapper">
                    <canvas ref={chartRef} id="myChart"></canvas> 
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpenseChart;