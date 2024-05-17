const text = document.querySelector('p');
const fontChange = document.querySelector('.font');
const fontText = document.querySelector('.font h1');
const fonts = document.querySelector('.fonts');
const headingText = document.querySelector('.heading');
const fontWhole = document.querySelector('.font-change');


let bold = false;
function boldText(){
    if (bold){
        text.style.fontWeight = '300';
        headingText.style.fontWeight = '300';
        bold = false;
    } else {
        text.style.fontWeight = '900';
        headingText.style.fontWeight = '900';
        bold = true;
    }
}

let italic = false;
function italicText(){
    if (italic){
        text.innerHTML = `${text.innerText}`;
        headingText.innerHTML = `${headingText.innerText}`;
        italic = false;
    } else {
        text.innerHTML = `<i>${text.innerText}</i>`;
        headingText.innerHTML = `<i>${headingText.innerText}</i>`;
        italic = true;
    }
}

let underline = false;
function underlineText(){
    if (underline){
        text.innerHTML = `${text.innerText}`;
        headingText.innerHTML = `${headingText.innerText}`;
        underline = false;
    } else {
        text.innerHTML = `<u>${text.innerText}</u>`;
        headingText.innerHTML = `<u>${headingText.innerText}</u>`;
        underline = true;
    }
}



function alignRight(){
    text.style.textAlign = 'right';
    headingText.style.textAlign = 'right';
}

function alignLeft(){
    text.style.textAlign = 'left';
    headingText.style.textAlign = 'left';
}

function alignCenter(){
    text.style.textAlign = 'center';
    headingText.style.textAlign = 'center';
}


fontChange.addEventListener('mouseenter', function(){
    fonts.style.display = 'block';
});

fontWhole.addEventListener('mouseleave', function(){
    fonts.style.display = 'none';
});



function fontSansSerif(){
    headingText.style.fontFamily = 'sans-serif';
    text.style.fontFamily = 'sans-serif';
}

function fontArial(){
    headingText.style.fontFamily = 'arial';
    text.style.fontFamily = 'arial';
}

function fontCursive(){
    headingText.style.fontFamily = 'cursive';
    text.style.fontFamily = 'cursive';
}
