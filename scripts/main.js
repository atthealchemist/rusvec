var myChart = new Chart(document.getElementById("chart"), {
        type: 'line',
        data: {
            labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
            datasets: [{
                label: 'Объём продаж (тыс.)',
                data: [654, 656, 701, 693, 744, 805, 756, 1011],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup(
            'Наш адрес в Москве:<br> <strong>Москва, ул. Академика Сахарова, д. 22, корп. 1</strong><br> Телефон: <a href="tel:84953938373">8 (495) 393-83-73</a>'
        )
        .openPopup();

    L.marker([52.5, -0.19]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    L.marker([53.5, 0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable. ')
        .openPopup();

    var carousels = bulmaCarousel.attach();
    CarouselInstance.on('carousel:ready', function (item) {});