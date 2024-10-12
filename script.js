// let left=730 
// let top1=522
// let rotate=90
// let btc=0

// let car = document.querySelector('.car1')
// let btc1 = document.querySelector('.btc')
// let btc2 = document.querySelector('.btc1')
// let coins = document.querySelector('.coins')
// let btc3 = document.querySelector('.btc2')
// let btc4 = document.querySelector('.btc3')
// let btc5 = document.querySelector('.btc4')
// let btc6 = document.querySelector('.btc5')


// document.addEventListener('keydown', function (e) {
//     // alert(e.key)
//     if (e.key == 'ArrowRight') {
//         left+=10
//         car.style.left = left + 'px'
//         if(rotate<90) {
//          top1-=5
//         car.style.top = top1 + 'px'
//         } 
//     }
//     if (e.key == 'ArrowLeft') {
//         left-=10
//         car.style.left = left + 'px'
//         if(rotate > 90) {
//             top1-=5
//            car.style.top = top1 + 'px'
//            } 
//     }
//     if (e.key == 'ArrowUp') {
//         top1-=10
//         rotate -= 10
//         car.style.top = top1 + 'px'
//          car.style.transform = 'rotate(' + rotate + 'deg)'
//     }
//     if (e.key == 'ArrowDown') {
//         top1+=10
//         rotate += 10

//         car.style.top = top1 + 'px'
//          car.style.transform = 'rotate(' + rotate + 'deg)'
//     }

//     checkBtc()
// }) 

// let btc1Left = 750;
// let btc1Top = 120;

// let btc2Left = 890;
// let btc2Top = 560;

// let btc3Left = 600;
// let btc3Top = 560;

// let btc4Left = 1330;
// let btc4Top = 330;

// let btc5Left = 230;
// let btc5Top = 350;



// let sizeCoin = 40;


// function checkBtc() {
//     if (document.querySelector('.btc') && 
//     left + sizeCoin * 2 > btc1Left  && 
//     left < btc1Left + sizeCoin * 2 && 
//     top1 +  sizeCoin * 2 > btc1Top &&
//     top1 < btc1Top + sizeCoin * 2 
// ) {
//     btc1.remove()
//     coins.textContent = Number(coins.textContent)+1
// }
//     if (document.querySelector('.btc1') && 
//         left + sizeCoin * 2 > btc2Left  && 
//         left < btc2Left + sizeCoin * 2 && 
//         top1 +  sizeCoin * 2 > btc2Top &&
//         top1 < btc2Top + sizeCoin * 2 
//     ) {
//         btc2.remove()
//         coins.textContent = Number(coins.textContent)+1
//     }

//     if (document.querySelector('.btc2') && 
//         left + sizeCoin * 2 > btc3Left  && 
//         left < btc3Left + sizeCoin * 2 && 
//         top1 +  sizeCoin * 2 > btc3Top &&
//         top1 < btc3Top + sizeCoin * 2 
//     ) {
//         btc3.remove()
//         coins.textContent = Number(coins.textContent)+1
//     }
    
//     if (document.querySelector('.btc3') && 
//         left + sizeCoin * 2 > btc4Left  && 
//         left < btc4Left + sizeCoin * 2 && 
//         top1 +  sizeCoin * 2 > btc4Top &&
//         top1 < btc4Top + sizeCoin * 2 
//     ) {
//         btc4.remove()
//         coins.textContent = Number(coins.textContent)+1
//     }

//     if (document.querySelector('.btc4') && 
//         left + sizeCoin * 2 > btc5Left  && 
//         left < btc5Left + sizeCoin * 2 && 
//         top1 +  sizeCoin * 2 > btc5Top &&
//         top1 < btc5Top + sizeCoin * 2 
//     ) {
//         btc5.remove()
//         coins.textContent = Number(coins.textContent)+1
//     }

//     // if (document.querySelector('.btc5') && 
//     //     left + sizeCoin * 2 > btc6Left  && 
//     //     left < btc6Left + sizeCoin * 2 && 
//     //     top1 +  sizeCoin * 2 > btc6Top &&
//     //     top1 < btc6Top + sizeCoin * 2 
//     // ) {
//     //     btc6.remove()
//     //     coins.textContent = Number(coins.textContent)+1
//     // }
    
// }

let gra = false


let left = 730;
let top1 = 522;
let rotate = 90;

let car = document.querySelector('.car1');
let btc1 = document.querySelector('.btc');
let btc2 = document.querySelector('.btc1');
let btc3 = document.querySelector('.btc2');
let btc4 = document.querySelector('.btc3');
let btc5 = document.querySelector('.btc4');
let coins = document.querySelector('.coins');
let time = document.querySelector ('.time')
let result = document.querySelector ('.result')
let pochatok = document.querySelector ('.pochatok')
let timer = document.querySelector ('.timer')


let timeInterval;

let btc1Left = 750;
let btc1Top = 120;

let btc2Left = 890;
let btc2Top = 560;

let btc3Left = 600;
let btc3Top = 560;

let btc4Left = 1330;
let btc4Top = 330;

let btc5Left = 230;
let btc5Top = 350;

let sizeCoin = 40;
let keysPressed = {};



document.addEventListener('keydown', function (e) {
    if (gra == false) {
        return;
    }
    keysPressed[e.key] = true;
});

document.addEventListener('keyup', function (e) {
    if (gra == false) {
        return;
    }
    keysPressed[e.key] = false;
});


function gameLoop() {
   
    if (keysPressed['ArrowRight']) {
        left += 2; 
        car.style.left = left + 'px';
    }
    if (keysPressed['ArrowLeft']) {
        left -= 2;
        car.style.left = left + 'px';
    }
    if (keysPressed['ArrowUp']) {
        top1 -= 2;
        rotate = Math.max(rotate - 2, -90); 
        car.style.top = top1 + 'px';
        car.style.transform = 'rotate(' + rotate + 'deg)';
    }
    if (keysPressed['ArrowDown']) {
        top1 += 2;
        rotate = Math.min(rotate + 2, 90);
        car.style.top = top1 + 'px';
        car.style.transform = 'rotate(' + rotate + 'deg)';
    }

    
    if (left < 0) left = 0;
    if (left > window.innerWidth - car.offsetWidth) left = window.innerWidth - car.offsetWidth;
    if (top1 < 0) top1 = 0;
    if (top1 > window.innerHeight - car.offsetHeight) top1 = window.innerHeight - car.offsetHeight;

    checkBtc();

    requestAnimationFrame(gameLoop); 
}


function checkBtc() {
    let carRect = car.getBoundingClientRect();

    if (btc1 && collision(carRect, btc1.getBoundingClientRect())) {
        btc1.remove();
        coins.textContent = Number(coins.textContent) + 1;
    }
    if (btc2 && collision(carRect, btc2.getBoundingClientRect())) {
        btc2.remove();
        coins.textContent = Number(coins.textContent) + 1;
    }
    if (btc3 && collision(carRect, btc3.getBoundingClientRect())) {
        btc3.remove();
        coins.textContent = Number(coins.textContent) + 1;
    }
    if (btc4 && collision(carRect, btc4.getBoundingClientRect())) {
        btc4.remove();
        coins.textContent = Number(coins.textContent) + 1;
    }
    if (btc5 && collision(carRect, btc5.getBoundingClientRect())) {
        btc5.remove();
        coins.textContent = Number(coins.textContent) + 1;
    }

    if (coins.textContent == 5) {
        result.style.display = 'block'
        time.textContent = seconds
        clearInterval(timeInterval)
        gra = false
        keysPressed = {}
    }
}



function collision(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

gameLoop(); 

let seconds = 0

document.body.addEventListener('keyup' , function (event) {
    console.log (event.key)
    if (event.key == ' ') {
        pochatok.style.display = 'none' 
        gra = true
        timeInterval = setInterval (function() {
            seconds++
            timer.textContent = seconds
        }, 1000)  
    }
} )
const width = document.body.getBoundingClientRect().width
// alert (width)

if (width < 600) {
    document.body.innerHTML = '<h1 class="mobile">Зайдіть з комп\'ютера </h1>'
}







