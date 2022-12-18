
// hamburgerLines click

let menuBnt = document.querySelector('#hamburgerLines');
let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
let hamburgerMenu = document.querySelector('#hamburgerMenu');

menuBnt.addEventListener('click', lineClickFn);

function lineClickFn()
{
    line1.classList.toggle('line1rotate');
    line2.classList.toggle('line2none');
    line3.classList.toggle('line3rotate');
    hamburgerMenu.classList.toggle('translate');
}



// hamburgerMenu click

let buttons = document.querySelectorAll('.hamburgerItems');
let cards = document.querySelectorAll(".cards"); // array 0: A, 1: B, 2: C, 3: F
let subTitles = document.querySelectorAll(".subTitles");
let icons = document.querySelectorAll(".icons");

//console.log(cards);

for(let k = 0; k < buttons.length; k++)
{
    buttons[k].addEventListener('click', clickFn);
}

function closeCards()
{
    for(let i = 0; i<cards.length; i++)
    {
        cards[i].classList.add('none-card');
        subTitles[i].classList.add('none-name');
        icons[i].classList.add('none-icon');
    }
}

function clickFn(e)
{
    //console.log(e);
    console.log(e.srcElement.parentElement.getAttribute('val'));

    closeCards();

    //cards[e.path[1].getAttribute('val')].classList.remove('none-card');
    //subTitles[e.path[1].getAttribute('val')].classList.remove('none-name');
    //icons[e.path[1].getAttribute('val')].classList.remove('none-icon');

    cards[e.srcElement.parentElement.getAttribute('val')].classList.remove('none-card');
    subTitles[e.srcElement.parentElement.getAttribute('val')].classList.remove('none-name');
    icons[e.srcElement.parentElement.getAttribute('val')].classList.remove('none-icon');

    line1.classList.remove('line1rotate');
    line2.classList.remove('line2none');
    line3.classList.remove('line3rotate');
    hamburgerMenu.classList.remove('translate');

}

