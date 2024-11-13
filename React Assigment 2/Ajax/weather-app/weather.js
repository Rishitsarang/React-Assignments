    $(document).ready(function() {
        $.getJSON('cities_weather.json', function(data) {
            $('button').click(function() {
                const cityName = $('input').val();
                const cityData = data.find(city => city.name.toLowerCase() === cityName.toLowerCase());

                if (cityData) {
                    $('.temp').text(`${(cityData.main.temp - 273.15).toFixed(1)}°C`);
                    $('.city').text(cityData.name);
                    $('.humidity').text(`${cityData.main.humidity}%`);
                    $('.wind').text(`${cityData.wind.speed} km/h`);

                    // Update weather icon based on the weather condition
                    const weatherIcon = `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`;
                    $('.weather-icon').attr('src', weatherIcon);
                } else {
                    alert('City not found in the dataset, please try another city');
                }
            });
        });
    });

