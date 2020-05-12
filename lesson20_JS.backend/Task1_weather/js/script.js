function getMyMonth(number) {
    switch (number) {
        case 0:
            return "Jun";
            break;
        case 1:
            return "Feb";
            break;
        case 2:
            return "Mar";
            break;
        case 3:
            return "Apr";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "Jul";
            break;
        case 7:
            return "Aug";
            break;
        case 8:
            return "Sept";
            break;
        case 9:
            return "Oct";
            break;
        case 10:
            return "Nov";
            break;
        case 11:
            return "Dec";
            break;
        default:
            break;
    }
}
function getMyDay(number) {
    switch (number) {
        case 1:
            return "Mon";
            break;
        case 2:
            return "Tue";
            break;
        case 3:
            return "Wed";
            break;
        case 4:
            return "Thu";
            break;
        case 5:
            return "Fri";
            break;
        case 6:
            return "Sat";
            break;
        case 7:
            return "Sun";
            break;

        default:
            break;
    }
}
$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
    success: function (data) {
        $(".humidity").html(`Humidity: ${data.main.humidity}%`);
        $(".pressure").html(`Pressure: ${data.main.pressure} hPa`);
        $(".wind").html(`Wind: ${data.wind.speed} km/h ${windDirection[Math.round(data.wind.deg / 22.5)]}`);
        $("img").attr("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        $(".temp").html(`${data.main.temp}℃`);
        $(".feels__like").html(`Feels like: ${data.main.feels_like}℃`);
        $(".sky").html(data.weather[0].description);
    }
});
let windDirection = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
let date = new Date();
$(".date").html(`${getMyMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()} - ${getMyDay(date.getDay())}`);
$(".time").html(`${date.getHours()}:${date.getMinutes()}`);
