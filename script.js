// Chart 1: Homicide Victimization
    const homicideCtx = document.getElementById('homicideChart').getContext('2d');
    const homicideChart = new Chart(homicideCtx, {
        type: 'bar',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: 'Homicide Rate per 100k',
                data: [36.4, 4.5],
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Rate per 100,000 Population'
                    }
                }
            },
            plugins: {
                title: {
                    display: false, // Title is already in <h2> above canvas
                },
                legend: {
                    display: false // Legend is not needed for two bars
                }
            }
        }
    });

    // Chart 2: Violent Victimization
    const violentCrimeCtx = document.getElementById('violentCrimeChart').getContext('2d');
    const violentCrimeChart = new Chart(violentCrimeCtx, {
        type: 'bar',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: 'Violent Victimization Rate per 1,000',
                data: [28.2, 19.7],
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Rate per 1,000 Persons (Age 12+)'
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: false
                }
            }
        }
    });

    // Chart 3: Incarceration Rates
    const incarcerationCtx = document.getElementById('incarcerationChart').getContext('2d');
    const incarcerationChart = new Chart(incarcerationCtx, {
        type: 'bar',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: 'Incarceration Rate per 100k',
                data: [854, 172],
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Rate per 100,000 Residents'
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: false
                }
            }
        }
    });

    // Chart 4: Poverty Rates
    const povertyCtx = document.getElementById('povertyChart').getContext('2d');
    const povertyChart = new Chart(povertyCtx, {
        type: 'bar',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: 'Poverty Rate (%)',
                data: [22.0, 8.1],
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Poverty Rate (Percentage)'
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: false
                }
            }
        }
    });

    // Chart 5: Police Confidence
    const policeConfidenceCtx = document.getElementById('policeConfidenceChart').getContext('2d');
    const policeConfidenceChart = new Chart(policeConfidenceCtx, {
        type: 'bar',
        data: {
            labels: ['Black', 'White'],
            datasets: [{
                label: '% Not Confident in Police',
                data: [72, 37],
                backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 99, 132, 0.7)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Percentage "Not Confident"'
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                },
                legend: {
                    display: false
                }
            }
        }
    });
