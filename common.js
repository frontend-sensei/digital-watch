getTime();

function getTime() {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),

        hours_first_num = document.querySelector('.hours .first'),
        hours_second_num = document.querySelector('.hours .second'),

        minutes_first_num = document.querySelector('.minutes .first'),
        minutes_second_num = document.querySelector('.minutes .second'),

        seconds_first_num = document.querySelector('.seconds .first'),
        seconds_second_num = document.querySelector('.seconds .second');

    hours = checkNums(hours);
    minutes = checkNums(minutes);
    seconds = checkNums(seconds);

    hours += "";
    minutes += "";
    seconds += "";

    hours_first_num.dataset.num = hours[0];
    hours_second_num.dataset.num = hours[1];
    minutes_first_num.dataset.num = minutes[0];
    minutes_second_num.dataset.num = minutes[1];
    seconds_first_num.dataset.num = seconds[0];
    seconds_second_num.dataset.num = seconds[1];
    
    setTimeout(getTime, 500);
}   

function checkNums(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}























