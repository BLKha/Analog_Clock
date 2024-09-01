var hour =0;
var minute =0;
var second =0;

function clock(){
    
    setInterval(
        function(){
            var date =new Date();
            const h = document.getElementById("hours").innerHTML=(date.getHours()<10?'0':'') + date.getHours();
            const m = document.getElementById("minutes").innerHTML=(date.getMinutes()<10?'0':'')+date.getMinutes();
            const s = document.getElementById("seconds").innerHTML=(date.getSeconds()<10?'0':'')+date.getSeconds(); 
        },1000
    )

}
function time(){
    setInterval(
    function(){
        date = new Date();
        hour = date.getHours()*30;
        minute = date.getMinutes()*6;
        second = date.getSeconds()*6;
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)"
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)"
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)"

        
    },1000
)
}
clock();
time();

