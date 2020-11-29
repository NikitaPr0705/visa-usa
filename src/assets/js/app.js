$(document).ready(function(){
    // Добавить плавную прокрутку до всех ссылок
    $("a").on('click', function(event) {

        // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
        if (this.hash !== "") {
            // Запретить поведение щелчка якоря по умолчанию
            event.preventDefault();

            // Хранить хэш
            var hash = this.hash;

            // Использование метода animate() jQuery для добавления плавной прокрутки страницы
            // Необязательное число (800) указывает количество миллисекунд, необходимых для прокрутки до указанной области
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
                window.location.hash = hash;
            });
        } // Конец, если
    });
});



// let tabs = document.getElementById('tabs');
// if(document.URL === 'http://localhost:3000/index.html') {
//     window.onscroll = function() {myFunction()};
// } else if(document.URL === 'http://localhost:3000/ind-services.html') {
//     window.onscroll = function() {myFunctionInd()};
// } else if(document.URL === 'http://localhost:3000/ent-services.html') {
//     window.onscroll = function() {myFunctionEnt()};
// }

if(document.URL.includes('index.html')) {
    window.onscroll = function() {myFunction()};
} else if(document.URL.includes('ind-services.html')) {
    window.onscroll = function() {myFunctionInd()};
} else if(document.URL.includes('ent-services.html')) {
    window.onscroll = function() {myFunctionEnt()};
}

let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let line4 = document.getElementById('line4');


let line1Ind = document.getElementById('line1-ind');
let line2Ind =  document.getElementById('line2-ind');
let line3Ind = document.getElementById('line3-ind');
let line4Ind = document.getElementById('line4-ind');


let line1Ent = document.getElementById('line1-ent');
let line2Ent =  document.getElementById('line2-ent');
let line3Ent = document.getElementById('line3-ent');
let line4Ent = document.getElementById('line4-ent');




function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrolled = scrolled.toFixed(1);
    // console.log((scrolled))

    line2.classList.remove('filled-marked');
    line3.classList.remove('filled-marked');
    line4.classList.remove('filled-marked');


    if(scrolled < 28) {

        line1.style.width = '50px';
        line1.style.backgroundColor = '#DC0000';
        line2.style.backgroundColor = 'white';
        line2.style.width = '30px';
        line3.style.backgroundColor = 'white';
        line3.style.width = '30px';
        line4.style.backgroundColor = 'white';
        line4.style.width = '30px';
    } else
        if(scrolled > 28 && scrolled < 60) {


            line1.style.width = '30px';
            line1.style.backgroundColor = '#00297C';

            line2.style.width = '50px';
            line2.style.backgroundColor = '#DC0000';

            line3.style.width = '30px';
            line3.style.backgroundColor = '#00297C';

            line4.style.width = '30px';
            line4.style.backgroundColor = '#00297C';



    } else if(scrolled > 60 && scrolled < 82) {

            line1.style.width = '30px';
            line1.style.backgroundColor = 'white';

            line2.style.width = '30px';
            line2.style.backgroundColor = 'white';

            line3.style.width = '50px';
            line3.style.backgroundColor = '#DC0000';

            line4.style.width = '30px';
            line4.style.backgroundColor = 'white';

    } else if(scrolled > 82) {
            line1.style.width = '30px';
            line1.style.backgroundColor = '#00297C';

            line2.style.width = '30px';
            line2.style.backgroundColor = '#00297C';

            line3.style.width = '30px';
            line3.style.backgroundColor = '#00297C';

            line4.style.width = '50px';
            line4.style.backgroundColor = '#DC0000';
    }


}



function myFunctionInd() {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrolled = scrolled.toFixed(1);
    // console.log((scrolled))

    line2Ind.classList.remove('filled-marked');
    line3Ind.classList.remove('filled-marked');
    line4Ind.classList.remove('filled-marked');


    if(scrolled < 20) {

        line1Ind.style.width = '50px';
        line1Ind.style.backgroundColor = '#DC0000';

        line2Ind.style.width = '30px';
        line2Ind.style.backgroundColor = '#00297C';

        line3Ind.style.width = '30px';
        line3Ind.style.backgroundColor = '#00297C';

        line4Ind.style.width = '30px';
        line4Ind.style.backgroundColor = '#00297C';
    } else
    if(scrolled > 20 && scrolled < 73) {


        line1Ind.style.width = '30px';
        line1Ind.style.backgroundColor = '#00297C';

        line2Ind.style.width = '50px';
        line2Ind.style.backgroundColor = '#DC0000';

        line3Ind.style.width = '30px';
        line3Ind.style.backgroundColor = '#00297C';

        line4Ind.style.width = '30px';
        line4Ind.style.backgroundColor = '#00297C';



    } else if(scrolled > 73 && scrolled < 90) {

        line1Ind.style.width = '30px';
        line1Ind.style.backgroundColor = 'white';

        line2Ind.style.width = '30px';
        line2Ind.style.backgroundColor = 'white';

        line3Ind.style.width = '50px';
        line3Ind.style.backgroundColor = '#DC0000';

        line4Ind.style.width = '30px';
        line4Ind.style.backgroundColor = 'white';

    } else if(scrolled > 90) {
        line1Ind.style.width = '30px';
        line1Ind.style.backgroundColor = '#00297C';

        line2Ind.style.width = '30px';
        line2Ind.style.backgroundColor = '#00297C';

        line3Ind.style.width = '30px';
        line3Ind.style.backgroundColor = '#00297C';

        line4Ind.style.width = '50px';
        line4Ind.style.backgroundColor = '#DC0000';
    }
}




function myFunctionEnt() {

    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    scrolled = scrolled.toFixed(1);
    // console.log((scrolled))

    line2Ent.classList.remove('filled-marked');
    line3Ent.classList.remove('filled-marked');
    line4Ent.classList.remove('filled-marked');



    if(scrolled < 30) {


        line1Ent.style.width = '50px';
        line1Ent.style.backgroundColor = '#DC0000';

        line2Ent.style.width = '30px';
        line2Ent.style.backgroundColor = '#00297C';

        line3Ent.style.width = '30px';
        line3Ent.style.backgroundColor = '#00297C';

        line4Ent.style.width = '30px';
        line4Ent.style.backgroundColor = '#00297C';



    } else if(scrolled > 30 && scrolled < 82) {

        line1Ent.style.width = '30px';
        line1Ent.style.backgroundColor = 'white';

        line2Ent.style.width = '30px';
        line2Ent.style.backgroundColor = 'white';

        line3Ent.style.width = '50px';
        line3Ent.style.backgroundColor = '#DC0000';

        line4Ent.style.width = '30px';
        line4Ent.style.backgroundColor = 'white';

    } else if(scrolled > 82) {
        line1Ent.style.width = '30px';
        line1Ent.style.backgroundColor = '#00297C';

        line2Ent.style.width = '30px';
        line2Ent.style.backgroundColor = '#00297C';

        line3Ent.style.width = '30px';
        line3Ent.style.backgroundColor = '#00297C';

        line4Ent.style.width = '50px';
        line4Ent.style.backgroundColor = '#DC0000';
    }
}






document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.nav-mobile').classList.toggle("animate");
})


let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const navMobile = document.getElementById('nav-mobile');



navMobile.addEventListener('touchstart', function(event) {

    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;


}, false);

navMobile.addEventListener('touchmove', function(event) {
    event.preventDefault()
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;


}, false);

navMobile.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;

    handleGesture(event);
}, false);

function handleGesture(event) {
    if (touchendX <= touchstartX) {
        console.log('Swiped left');
    }

    if (touchendX >= touchstartX) {
        console.log('Swiped right');
    }

    if (touchendY <= touchstartY) {
        console.log('Swiped up');
        document.querySelector('.burger span').classList.remove('active');
        document.querySelector('.nav-mobile').classList.remove("animate");
    }

    if (touchendY >= touchstartY) {
        console.log('Swiped down');
    }

    if (touchendY === touchstartY) {
        if(event.preventDefault) {
            console.log('Default prevented')
        }
        console.log('Tap');
    }
}



let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



