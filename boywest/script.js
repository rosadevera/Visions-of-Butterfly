$(document).ready(function(){

    // COUNTDOWN TIMER
    var deadline = new Date("March 19, 2024 20:06:00 GMT-0700"); // Set the deadline to March 19th, 8:06 PM PST

    var x = setInterval(function() {
        var now = new Date().getTime();
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;

        if (t < 0) {
            clearInterval(x);
            document.getElementById("day").innerHTML = '0';
            document.getElementById("hour").innerHTML = '0';
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("second").innerHTML = '0';
        }
    }, 1000);

    // COUNTDOWN BAR
    function progress(timeleft, timetotal, $element) {
        var progressBarWidth = timeleft * $element.width() / timetotal;
        $element.find('div').animate({ width: progressBarWidth }, timeleft == timetotal ? 0 : 1000, 'linear');
        if(timeleft > 0) {
            setTimeout(function() {
                progress(timeleft - 1, timetotal, $element);
            }, 1000);
        }
    };

    // Calculate the time remaining in seconds until the deadline
    var now = new Date().getTime();
    var timeleft = Math.floor((deadline - now) / 1000);
    
    // Adjust the numbers to match the time until the deadline
    progress(timeleft, timeleft, $('#progressBar'));

});


document.addEventListener('DOMContentLoaded', function() {
    // Get the #tag section
    const tagSection = document.querySelector('#tag');
    
    // Get the button
    const button = document.querySelector('.pricecontainer button');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        if (isInViewport(tagSection)) {
            tagSection.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
        if (isInViewport(button)) {
            button.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
