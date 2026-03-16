let hour=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let clock=document.getElementById('clock');
const body =document.querySelector('body');
var all = document.getElementsByTagName("*");
const mode_switch =document.querySelector('.mode_switch');
const clock_digital =document.querySelector('.clock_digital');
const title =document.querySelector('.title');
const b =document.querySelectorAll('b');
// console.log(b);
let array=Array.from(b);
// console.log(array);
const clock_digital_value =document.querySelector('.clock_digital_value');


function modeswitch(){
    const isLightMode= body.classList.contains('Light');
    mode_switch.innerHTML=isLightMode?'Dark Mode':"Light Mode";

    body.classList.toggle('Light');
    clock.classList.toggle('Light');
    clock_digital.classList.toggle('Light');
    mode_switch.classList.toggle('Light');
    title.classList.toggle("Light");
    clock_digital_value.classList.toggle("Light");
    
    const light=isLightMode?'white':'black';
    clock.style.setProperty('--boxAfterBackColor',`${light}`);
    for(i=0;i<12;i++){
        b[i].classList.toggle("Light");
    }

    

    
    // for (var i=0, max=all.length; i < max; i++) {
    //     // all[i].style.color = "black";
    //     all[i].classList.toggle('Light');
    //    }
    
}

function dispalytime(){

    // let x=Math.floor(Math.random() * 255);
    // let y=Math.floor(Math.random() * 255);
    // let z=Math.floor(Math.random() * 255);
    // // console.log(x,y,z);
    
    // clock.style.backgroundColor=`rgb(${x},${y},${z})`;

    let date= new Date();
    
    let hh= date.getHours();
    let mm= date.getMinutes();
    let ss= date.getSeconds();

    // console.log(hh,mm,ss);

    document.getElementById("hour_digital").innerHTML=hh;
    document.getElementById("min_digital").innerHTML=mm;
    document.getElementById("sec_digital").innerHTML=ss;

    let hrotation=30*hh;
    let mrotation=6*mm;
    let srotation=6*ss;

    // console.log(hrotation,mrotation,srotation);

    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    sec.style.transform=`rotate(${srotation}deg)`;

}

setInterval(dispalytime,1000);
