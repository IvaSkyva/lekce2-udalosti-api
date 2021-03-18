// tady je místo pro náš program
function cerveny() {
    let napis = document.querySelector('p');
    napis.classList.toggle("cerveny");
}

function tucne() {
    let napis = document.querySelector('.textlev');
    napis.style.fontWeight = 'bold';
}

fontSize=16;
function vetsi() {
    newfontSize=fontSize+(1);
    document.querySelector('.textlev').style.fontSize = newfontSize +'px';
    fontSize=newfontSize; 
}

function prehraj() {    
    let audio = document.querySelector('.zvuk');
    audio.play();
}

function prerus() {    
    let audio = document.querySelector('.zvuk');
    audio.pause();
}


function ztisit() {    
    let audio = document.querySelector('.zvuk');
    audio.volume = 0;
}

function hlasitost() {    
    let audio = document.querySelector('.zvuk');
    audio.volume = 0.5;
}

function zesilit() {    
    let audio = document.querySelector('.zvuk');
    audio.volume = 1;
}

function nazacatek() {    
    let audio = document.querySelector('.zvuk');
    audio.currentTime = 0;
}