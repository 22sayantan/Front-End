var deadline = new Date("aug 11, 2022 12:42:00").getTime();

var x = setInterval(
    function() {
        var now = new Date().getTime();
        var t = deadline - now ;
        
        var days = Math.floor(t/ (1000 * 60 * 60 * 24));
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        var minute = Math.floor((t% (1000 * 60 * 60))/(1000 * 60));
        var seconds = Math.floor((t%(1000 * 60))/(1000));


        if (t>0){
        var x = document.querySelector('.body1');
            x.innerHTML = days;

        var x = document.querySelector('.body2');
            x.innerHTML = hours;

        var x = document.querySelector('.body3');
            x.innerHTML = minute;

        var x = document.querySelector('.body4');
            x.innerHTML = seconds;
        }
        else{
            // clearInterval(x);
        var x = document.querySelector('#demo');
            x.innerHTML = 'EXPIRED';
            x.style.color = 'white';
            x.style.fontSize = '50px';
        }
    }
,1000);