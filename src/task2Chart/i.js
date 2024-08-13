// Убедитесь, что вы установили Chart.js: npm install chart.js

import Chart from "chart.js/auto";

document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('sales-chart').getContext('2d');
    
    const chartData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [{
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 1,
        }]
    };

    const salesChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});