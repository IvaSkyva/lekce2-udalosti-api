// tady je místo pro náš program
function cerveny() {
    let napis = document.querySelector('p');
    napis.classList.toggle("cerveny");
}

function tucne() {
    let napis = document.querySelector('.textlev');
    napis.style.fontWeight = 'bold';
}