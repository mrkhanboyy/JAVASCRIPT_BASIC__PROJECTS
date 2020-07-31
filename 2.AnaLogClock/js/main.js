window.onload = function(){
        let hourHand = document.querySelector('.hour');
        let minHand = document.querySelector('.min');
        let secHand = document.querySelector('.sec');
    
        setInterval(setTime,1000);

        // setting hands at proper position
        function setTime(){
            const date = new Date();
            const hourDeg = date.getHours()*30;
            const minDeg = date.getMinutes()*6;
            const secDeg = date.getSeconds()*6+360;

            hourHand.style.transform = `rotate(${hourDeg}deg)`;
            minHand.style.transform = `rotate(${minDeg}deg)`;
            secHand.style.transform = `rotate(${secDeg}deg)`;
 
        }
        
    };