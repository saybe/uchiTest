button.disabled = true;

const optionsBox = document.getElementsByClassName('switch-options')[0],
      optionOne = document.getElementsByClassName('switch-options-one')[0],
      optionTwo = document.getElementsByClassName('switch-options-two')[0],
      hint = document.getElementsByClassName('hint_text')[0],
      leftMan = document.getElementsByClassName('axis-left-man')[0],
      rightMan = document.getElementsByClassName('axis-right-man')[0];

let count = 2;

function switcher() {
    optionOne.style.color = '#70c5e2';

    if(count % 2 != 0) {
        optionOne.style.transform = 'rotateX(360deg)';
        optionTwo.style.transform = 'rotateX(180deg)';
    }
    else {
        optionOne.style.transform = 'rotateX(180deg)';
        optionTwo.style.transform = 'rotateX(360deg)';
    }
    hint.style.opacity = 0;
    
    button.disabled = false;
    
    count += 1;
}

function check() {
    if(count % 2 != 0) {
        optionOne.style.color = 'black';
        optionTwo.style.color = 'black';
        optionsBox.removeEventListener('click', switcher);
        leftMan.style.left = 276 + 'px';
        rightMan.style.right = 217 + 'px';
        button.style.backgroundColor = '#8fbe83';
        setTimeout(() => {
            button.style.opacity = 0;
        },1000)
    }
    else {
        optionOne.style.color = 'red';
        button.style.backgroundColor = '#f05a69';
        setTimeout(() => {
            button.style.backgroundColor = '#70c5e2'
        },1000)
    }
}


optionsBox.addEventListener('click', switcher);
button.addEventListener('click', check);


