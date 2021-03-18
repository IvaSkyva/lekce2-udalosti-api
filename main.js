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