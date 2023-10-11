const firstPage = document.getElementById('FirstContent');
const buttonSelect = document.getElementById('buttonselect')
const element0 = document.getElementById('RoundDiv');
const element1 = document.getElementById('RoundDiv1');
const element2 = document.getElementById('RoundDiv2');
const element3 = document.getElementById('RoundDiv3');
const element4 = document.getElementById('RoundDiv4');
const element5 = document.getElementById('RoundDiv5');
const element6 = document.getElementById('RoundDiv6');

const arr = [element0, element1, element2, element3, element4, element5, element6];


buttonSelect.addEventListener('mouseover', MouseEvent => {
    for (let i = 0; i <= 6; i++) {
        arr[i].style.animationPlayState = "paused";
    }
})
buttonSelect.addEventListener('mouseout', MouseEvent => {
    for (let i = 0; i <= 6; i++) {
        arr[i].style.animationPlayState = "running";
    }
})