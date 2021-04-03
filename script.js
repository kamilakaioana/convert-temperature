
const temperature = document.getElementById('temperature-value');

const from = document.getElementById('from-value');

const to = document.getElementById('to-value');

const resultElm = document.getElementById('result');

const convertBtn = document.getElementById('convert');

const clearBtn = document.getElementById('clear');

//calculator
convertBtn.addEventListener('click', event => {
    event.preventDefault();
    const tempValue = temperature.value;
    const fromValue = from.value;
    const toValue = to.value;
    let result = 0;
    if (!isNaN(parseFloat(tempValue))) {
        if(fromValue === 'c' && toValue === 'f') {
            result = parseFloat(tempValue)*1.8+32;
        } else if (fromValue === 'f' && toValue === 'c'){
            result = (parseFloat(tempValue)-32)/1.8;
        } else {
            result = parseFloat(tempValue);
    
        }
        resultElm.innerHTML =`Result: ${result.toFixed(1)} º${toValue.toUpperCase()}`;
    }
    
});
//clear
clearBtn.addEventListener('click', event => {
    event.preventDefault();
    temperature.value = '';
    
    resultElm.innerHTML =`Result:`;
});

