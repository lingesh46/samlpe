function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');

    if(display.value.trim()==""){
        display.value=''

    }
    else{
        display.value = eval(display.value);

 
    }
       
    
       
}
