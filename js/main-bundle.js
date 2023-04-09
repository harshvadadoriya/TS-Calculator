/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
// function to calculate factorial and normal calculation
function calculate(input) {
    let result = document.querySelector('#result');
    if (result) {
        // check if the input includes the "!" symbol then perform factorial function
        if (input.includes('!')) {
            const num = parseInt(input.slice(0, -1));
            // need for the type guard on resultFact, since we are immediately converting it to a string using the toString() method
            const resultFact = factorial(num).toString();
            // assign the calculated factorial value back to the input field
            const resultElem = document.querySelector('#result');
            if (resultElem) {
                resultElem.value = resultFact;
            }
        }
        // check if the input includes the "π" or "e" and calculate them
        else if (input.includes('π') || input.includes('e')) {
            // check if the input string ends with 'π' or 'e'
            if (input.endsWith('π') || input.endsWith('e')) {
                // if it does, add a '*' character to the end to multiply with the next number
                input = input.slice(0, -1) + '*' + input.slice(-1);
            }
            input = input.replaceAll(/π/g, '3.1415');
            input = input.replaceAll(/e/g, '2.7182');
            let resultPieEuler = eval(input);
            if (result)
                result.value = resultPieEuler.toFixed(4).toString();
        }
        // check if input includes log
        else if (input.includes('log')) {
            const logResult = evaluateLog(input);
            if (typeof logResult === 'number') {
                result.value = logResult.toString();
            }
            else {
                result.value = logResult;
            }
        }
        // check and evaluate if input includes ln
        else if (input.includes('ln')) {
            let naturalLogResult = evaluateNaturalLog(input);
            // used type guard
            if (typeof naturalLogResult === 'number') {
                naturalLogResult = naturalLogResult.toString();
            }
            result.value = naturalLogResult;
        }
        // check and evaluate root
        else if (input.includes('√')) {
            let rootResult = calculateRoot(input);
            if (typeof rootResult === 'number') {
                rootResult = rootResult.toString();
                result.value = rootResult;
            }
        }
        // evaluate the input using the eval function
        else {
            // if input doesn't include any special functions, evaluate expression using eval()
            try {
                const exprResult = eval(input);
                result.value = exprResult.toString();
            }
            catch (_a) {
                result.value = 'Invalid input';
            }
        }
    }
}
exports.calculate = calculate;
// factorial function
function factorial(num) {
    if (typeof num !== 'number' || num < 0 || Math.floor(num) !== num) {
        return 'Malformed Expression';
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
// function to calculate log
function evaluateLog(input) {
    // split the input value into the number before and after 'log'
    const [base, number] = input.split('log');
    // convert the base and number to numbers using the Number() method
    const baseNum = Number(base) || 10;
    const numberNum = Number(number);
    // calculate the logarithm with the specified base using the Math.log() method and display the result
    const tempAnswer = Math.log(numberNum) / Math.log(baseNum);
    const resultLog = tempAnswer.toString();
    const decimalIndex = resultLog.indexOf('.');
    const multipliedNum = decimalIndex > 0 && resultLog[decimalIndex - 1] === '0'
        ? Number(resultLog)
        : tempAnswer;
    return multipliedNum;
}
// function to calculate Natural Log
function evaluateNaturalLog(input) {
    const match = input.match(/^(\d*)ln(.+)$/);
    let coefficient = 1;
    let x = parseFloat(input);
    if (!match) {
        let resultNaturalLog = 'Invalid input';
        return resultNaturalLog;
    }
    coefficient = match[1] ? parseInt(match[1]) : 1;
    // add null check and default value of 0
    x = parseFloat(match[2] || '0');
    let resultNaturalLog = coefficient * Math.log(x);
    return resultNaturalLog;
}
// function to calculate root
function calculateRoot(input) {
    const parts = input.split('√');
    // add null check and default value of 0
    const x = parseFloat(parts[1] || '0');
    if (isNaN(x)) {
        return 'Invalid input';
    }
    else if (parts.length === 1) {
        return Math.sqrt(x);
    }
    else if (parts.length === 2) {
        // add null check and default value of 0
        const y = parseFloat(parts[0] || '0');
        if (isNaN(y)) {
            return 'Invalid input';
        }
        else {
            return Math.pow(x, 1 / y);
        }
    }
    else {
        return 'Invalid input';
    }
}
// function to calculate Square root
function calculateSqrt(input) {
    if (isNaN(input)) {
        return '';
    }
    else {
        return Math.sqrt(input).toString();
    }
}
exports.calculateSqrt = calculateSqrt;
// function to calculate cube root
function calculateCubeSqrt(input) {
    if (isNaN(input)) {
        return '';
    }
    else {
        return Math.cbrt(input).toString();
    }
}
exports.calculateCubeSqrt = calculateCubeSqrt;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
// toggle button
const toggleButton = document.querySelector('#toggle-button');
const buttons1 = document.querySelectorAll('.button1');
const buttons2 = document.querySelectorAll('.button2');
// toggle button event listener
toggleButton.addEventListener('click', () => {
    buttons1.forEach((button1) => {
        button1.classList.toggle('hidden');
    });
    buttons2.forEach((button2) => {
        button2.classList.toggle('hidden');
    });
});
// show dropdown menu on Trigonimetry button click
const dropbtnTrig = document.querySelector('#dropdownBtnTrig');
const dropdownContentTrig = document.querySelector('#myDropdownTrig');
// show dropdown menu on Function button click
const dropbtnFunc = document.querySelector('#dropdownBtnFunc');
const dropdownContentFunc = document.querySelector('#myDropdownFunc');
if (dropbtnTrig && dropdownContentTrig) {
    dropbtnTrig.addEventListener('click', () => {
        dropdownContentTrig.style.display =
            dropdownContentTrig.style.display === 'none' ? 'block' : 'none';
    });
    if (dropbtnFunc && dropdownContentFunc) {
        dropbtnFunc.addEventListener('click', () => {
            dropdownContentFunc.style.display =
                dropdownContentFunc.style.display === 'none' ? 'block' : 'none';
        });
        // Event listener for both dropdown, display none when user clicks outside dropdown buttons
        document.addEventListener('click', (event) => {
            if (!dropbtnTrig.contains(event.target) &&
                !dropdownContentTrig.contains(event.target)) {
                dropdownContentTrig.style.display = 'none';
            }
            if (!dropbtnFunc.contains(event.target) &&
                !dropdownContentFunc.contains(event.target)) {
                dropdownContentFunc.style.display = 'none';
            }
        });
    }
}
const arr = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '/',
    '*',
    '%',
    '(',
    ')',
    '.',
    'π',
    'e',
    '!',
];
// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener('keydown', (event) => {
    // console.log(event);
    if (arr.includes(event.key)) {
        const result = document.getElementById('result');
        result.value += event.key;
    }
    if (event.key === '=') {
        try {
            const result = document.getElementById('result');
            (0, utils_1.calculate)(result.value);
            if (result.value === '') {
                result.value = '';
            }
        }
        catch (error) {
            const result = document.getElementById('result');
            result.value = 'Malformed Expression';
        }
    }
    if (event.key === 'Backspace') {
        const result = document.getElementById('result');
        result.value = result.value.slice(0, -1);
    }
    // prevent from Enter key pressing
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
// Get all the number buttons
let numberButtons = document.getElementsByClassName('calcBtn');
// Add a click event listener to each button
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function () {
        // Get the value of the clicked button
        const buttonValue = this.getAttribute('value');
        // Get the current value of the input field
        const result = document.getElementById('result')
            .value;
        // Add the button value to the input field
        document.getElementById('result').value =
            result + buttonValue;
    });
}
// to get result on screen when equal button pressed by user
const equalBtn = document.getElementById('eval');
if (equalBtn) {
    equalBtn.addEventListener('click', () => {
        try {
            const result = document.getElementById('result')
                .value;
            (0, utils_1.calculate)(result);
            if (result === '') {
                document.getElementById('result').value = '';
            }
        }
        catch (error) {
            document.getElementById('result').value =
                'Malformed Expression';
        }
    });
}
const result = document.querySelector('#result');
// event listener to solve two power x
const twoPowx = document.querySelector('#two_power_X');
twoPowx.addEventListener('click', function () {
    const userIp = document.getElementById('result').value;
    const output = `2**${userIp}`;
    result.value = output;
});
// event listener to solve ten power x
const tenPowx = document.querySelector('#ten_power_x');
tenPowx.addEventListener('click', function () {
    const userIp = document.getElementById('result').value;
    const output = `10**${userIp}`;
    result.value = output;
});
// add event listener to solve square root of x
const rootXbtn = document.querySelector('#root_x');
rootXbtn.addEventListener('click', () => {
    const userInput = parseFloat(result.value);
    const calculatedValue = (0, utils_1.calculateSqrt)(userInput);
    result.value = calculatedValue;
});
// add event listener to solve cube root of x
const threeRootXbtn = document.querySelector('#cube_root_x');
threeRootXbtn.addEventListener('click', () => {
    const userInput = parseFloat(result.value);
    const calculatedValue = (0, utils_1.calculateCubeSqrt)(userInput);
    result.value = calculatedValue;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLWNhbGMvLi9zcmMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdHMtY2FsYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy1jYWxjLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jYWxjdWxhdGVDdWJlU3FydCA9IGV4cG9ydHMuY2FsY3VsYXRlU3FydCA9IGV4cG9ydHMuY2FsY3VsYXRlID0gdm9pZCAwO1xuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGZhY3RvcmlhbCBhbmQgbm9ybWFsIGNhbGN1bGF0aW9uXG5mdW5jdGlvbiBjYWxjdWxhdGUoaW5wdXQpIHtcbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdCcpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGluY2x1ZGVzIHRoZSBcIiFcIiBzeW1ib2wgdGhlbiBwZXJmb3JtIGZhY3RvcmlhbCBmdW5jdGlvblxuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoJyEnKSkge1xuICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQoaW5wdXQuc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgICAgIC8vIG5lZWQgZm9yIHRoZSB0eXBlIGd1YXJkIG9uIHJlc3VsdEZhY3QsIHNpbmNlIHdlIGFyZSBpbW1lZGlhdGVseSBjb252ZXJ0aW5nIGl0IHRvIGEgc3RyaW5nIHVzaW5nIHRoZSB0b1N0cmluZygpIG1ldGhvZFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0RmFjdCA9IGZhY3RvcmlhbChudW0pLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBhc3NpZ24gdGhlIGNhbGN1bGF0ZWQgZmFjdG9yaWFsIHZhbHVlIGJhY2sgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgICAgICBjb25zdCByZXN1bHRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdCcpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdEVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHRFbGVtLnZhbHVlID0gcmVzdWx0RmFjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaW5jbHVkZXMgdGhlIFwiz4BcIiBvciBcImVcIiBhbmQgY2FsY3VsYXRlIHRoZW1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoJ8+AJykgfHwgaW5wdXQuaW5jbHVkZXMoJ2UnKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IHN0cmluZyBlbmRzIHdpdGggJ8+AJyBvciAnZSdcbiAgICAgICAgICAgIGlmIChpbnB1dC5lbmRzV2l0aCgnz4AnKSB8fCBpbnB1dC5lbmRzV2l0aCgnZScpKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgZG9lcywgYWRkIGEgJyonIGNoYXJhY3RlciB0byB0aGUgZW5kIHRvIG11bHRpcGx5IHdpdGggdGhlIG5leHQgbnVtYmVyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZSgwLCAtMSkgKyAnKicgKyBpbnB1dC5zbGljZSgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AL2csICczLjE0MTUnKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZS9nLCAnMi43MTgyJyk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0UGllRXVsZXIgPSBldmFsKGlucHV0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0UGllRXVsZXIudG9GaXhlZCg0KS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIGlucHV0IGluY2x1ZGVzIGxvZ1xuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcygnbG9nJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ1Jlc3VsdCA9IGV2YWx1YXRlTG9nKGlucHV0KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9nUmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IGxvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGFuZCBldmFsdWF0ZSBpZiBpbnB1dCBpbmNsdWRlcyBsblxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcygnbG4nKSkge1xuICAgICAgICAgICAgbGV0IG5hdHVyYWxMb2dSZXN1bHQgPSBldmFsdWF0ZU5hdHVyYWxMb2coaW5wdXQpO1xuICAgICAgICAgICAgLy8gdXNlZCB0eXBlIGd1YXJkXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5hdHVyYWxMb2dSZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgbmF0dXJhbExvZ1Jlc3VsdCA9IG5hdHVyYWxMb2dSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IG5hdHVyYWxMb2dSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYW5kIGV2YWx1YXRlIHJvb3RcbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoJ+KImicpKSB7XG4gICAgICAgICAgICBsZXQgcm9vdFJlc3VsdCA9IGNhbGN1bGF0ZVJvb3QoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290UmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJvb3RSZXN1bHQgPSByb290UmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcm9vdFJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBldmFsdWF0ZSB0aGUgaW5wdXQgdXNpbmcgdGhlIGV2YWwgZnVuY3Rpb25cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBpbnB1dCBkb2Vzbid0IGluY2x1ZGUgYW55IHNwZWNpYWwgZnVuY3Rpb25zLCBldmFsdWF0ZSBleHByZXNzaW9uIHVzaW5nIGV2YWwoKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHByUmVzdWx0ID0gZXZhbChpbnB1dCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gZXhwclJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gJ0ludmFsaWQgaW5wdXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGUgPSBjYWxjdWxhdGU7XG4vLyBmYWN0b3JpYWwgZnVuY3Rpb25cbmZ1bmN0aW9uIGZhY3RvcmlhbChudW0pIHtcbiAgICBpZiAodHlwZW9mIG51bSAhPT0gJ251bWJlcicgfHwgbnVtIDwgMCB8fCBNYXRoLmZsb29yKG51bSkgIT09IG51bSkge1xuICAgICAgICByZXR1cm4gJ01hbGZvcm1lZCBFeHByZXNzaW9uJztcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICo9IGk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgbG9nXG5mdW5jdGlvbiBldmFsdWF0ZUxvZyhpbnB1dCkge1xuICAgIC8vIHNwbGl0IHRoZSBpbnB1dCB2YWx1ZSBpbnRvIHRoZSBudW1iZXIgYmVmb3JlIGFuZCBhZnRlciAnbG9nJ1xuICAgIGNvbnN0IFtiYXNlLCBudW1iZXJdID0gaW5wdXQuc3BsaXQoJ2xvZycpO1xuICAgIC8vIGNvbnZlcnQgdGhlIGJhc2UgYW5kIG51bWJlciB0byBudW1iZXJzIHVzaW5nIHRoZSBOdW1iZXIoKSBtZXRob2RcbiAgICBjb25zdCBiYXNlTnVtID0gTnVtYmVyKGJhc2UpIHx8IDEwO1xuICAgIGNvbnN0IG51bWJlck51bSA9IE51bWJlcihudW1iZXIpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbG9nYXJpdGhtIHdpdGggdGhlIHNwZWNpZmllZCBiYXNlIHVzaW5nIHRoZSBNYXRoLmxvZygpIG1ldGhvZCBhbmQgZGlzcGxheSB0aGUgcmVzdWx0XG4gICAgY29uc3QgdGVtcEFuc3dlciA9IE1hdGgubG9nKG51bWJlck51bSkgLyBNYXRoLmxvZyhiYXNlTnVtKTtcbiAgICBjb25zdCByZXN1bHRMb2cgPSB0ZW1wQW5zd2VyLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZGVjaW1hbEluZGV4ID0gcmVzdWx0TG9nLmluZGV4T2YoJy4nKTtcbiAgICBjb25zdCBtdWx0aXBsaWVkTnVtID0gZGVjaW1hbEluZGV4ID4gMCAmJiByZXN1bHRMb2dbZGVjaW1hbEluZGV4IC0gMV0gPT09ICcwJ1xuICAgICAgICA/IE51bWJlcihyZXN1bHRMb2cpXG4gICAgICAgIDogdGVtcEFuc3dlcjtcbiAgICByZXR1cm4gbXVsdGlwbGllZE51bTtcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBOYXR1cmFsIExvZ1xuZnVuY3Rpb24gZXZhbHVhdGVOYXR1cmFsTG9nKGlucHV0KSB7XG4gICAgY29uc3QgbWF0Y2ggPSBpbnB1dC5tYXRjaCgvXihcXGQqKWxuKC4rKSQvKTtcbiAgICBsZXQgY29lZmZpY2llbnQgPSAxO1xuICAgIGxldCB4ID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBsZXQgcmVzdWx0TmF0dXJhbExvZyA9ICdJbnZhbGlkIGlucHV0JztcbiAgICAgICAgcmV0dXJuIHJlc3VsdE5hdHVyYWxMb2c7XG4gICAgfVxuICAgIGNvZWZmaWNpZW50ID0gbWF0Y2hbMV0gPyBwYXJzZUludChtYXRjaFsxXSkgOiAxO1xuICAgIC8vIGFkZCBudWxsIGNoZWNrIGFuZCBkZWZhdWx0IHZhbHVlIG9mIDBcbiAgICB4ID0gcGFyc2VGbG9hdChtYXRjaFsyXSB8fCAnMCcpO1xuICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gY29lZmZpY2llbnQgKiBNYXRoLmxvZyh4KTtcbiAgICByZXR1cm4gcmVzdWx0TmF0dXJhbExvZztcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVSb290KGlucHV0KSB7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdCgn4oiaJyk7XG4gICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgIGNvbnN0IHggPSBwYXJzZUZsb2F0KHBhcnRzWzFdIHx8ICcwJyk7XG4gICAgaWYgKGlzTmFOKHgpKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBpbnB1dCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgICAgICBjb25zdCB5ID0gcGFyc2VGbG9hdChwYXJ0c1swXSB8fCAnMCcpO1xuICAgICAgICBpZiAoaXNOYU4oeSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnSW52YWxpZCBpbnB1dCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coeCwgMSAvIHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgaW5wdXQnO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBTcXVhcmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlU3FydChpbnB1dCkge1xuICAgIGlmIChpc05hTihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChpbnB1dCkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBjYWxjdWxhdGVTcXJ0O1xuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGN1YmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlQ3ViZVNxcnQoaW5wdXQpIHtcbiAgICBpZiAoaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNicnQoaW5wdXQpLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVDdWJlU3FydCA9IGNhbGN1bGF0ZUN1YmVTcXJ0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWxzXCIpO1xuLy8gdG9nZ2xlIGJ1dHRvblxuY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZ2dsZS1idXR0b24nKTtcbmNvbnN0IGJ1dHRvbnMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbjEnKTtcbmNvbnN0IGJ1dHRvbnMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbjInKTtcbi8vIHRvZ2dsZSBidXR0b24gZXZlbnQgbGlzdGVuZXJcbnRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXR0b25zMS5mb3JFYWNoKChidXR0b24xKSA9PiB7XG4gICAgICAgIGJ1dHRvbjEuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG4gICAgYnV0dG9uczIuZm9yRWFjaCgoYnV0dG9uMikgPT4ge1xuICAgICAgICBidXR0b24yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xufSk7XG4vLyBzaG93IGRyb3Bkb3duIG1lbnUgb24gVHJpZ29uaW1ldHJ5IGJ1dHRvbiBjbGlja1xuY29uc3QgZHJvcGJ0blRyaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd25CdG5UcmlnJyk7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRUcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RHJvcGRvd25UcmlnJyk7XG4vLyBzaG93IGRyb3Bkb3duIG1lbnUgb24gRnVuY3Rpb24gYnV0dG9uIGNsaWNrXG5jb25zdCBkcm9wYnRuRnVuYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bkJ0bkZ1bmMnKTtcbmNvbnN0IGRyb3Bkb3duQ29udGVudEZ1bmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlEcm9wZG93bkZ1bmMnKTtcbmlmIChkcm9wYnRuVHJpZyAmJiBkcm9wZG93bkNvbnRlbnRUcmlnKSB7XG4gICAgZHJvcGJ0blRyaWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgfSk7XG4gICAgaWYgKGRyb3BidG5GdW5jICYmIGRyb3Bkb3duQ29udGVudEZ1bmMpIHtcbiAgICAgICAgZHJvcGJ0bkZ1bmMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBib3RoIGRyb3Bkb3duLCBkaXNwbGF5IG5vbmUgd2hlbiB1c2VyIGNsaWNrcyBvdXRzaWRlIGRyb3Bkb3duIGJ1dHRvbnNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZHJvcGJ0blRyaWcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRUcmlnLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWRyb3BidG5GdW5jLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAhZHJvcGRvd25Db250ZW50RnVuYy5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBhcnIgPSBbXG4gICAgJzAnLFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJzMnLFxuICAgICc0JyxcbiAgICAnNScsXG4gICAgJzYnLFxuICAgICc3JyxcbiAgICAnOCcsXG4gICAgJzknLFxuICAgICcrJyxcbiAgICAnLScsXG4gICAgJy8nLFxuICAgICcqJyxcbiAgICAnJScsXG4gICAgJygnLFxuICAgICcpJyxcbiAgICAnLicsXG4gICAgJ8+AJyxcbiAgICAnZScsXG4gICAgJyEnLFxuXTtcbi8vIGRpc3BsYXkga2V5Ym9hcmQga2V5IG9uIHNjcmVlbiB3aGVuIGtleWJvYXJkIG51bWJlcnMgb3Igb3BlcmF0b3JzIGNsaWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGlmIChhcnIuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSArPSBldmVudC5rZXk7XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09ICc9Jykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FsY3VsYXRlKShyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9ICdNYWxmb3JtZWQgRXhwcmVzc2lvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgIH1cbiAgICAvLyBwcmV2ZW50IGZyb20gRW50ZXIga2V5IHByZXNzaW5nXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbn0pO1xuLy8gR2V0IGFsbCB0aGUgbnVtYmVyIGJ1dHRvbnNcbmxldCBudW1iZXJCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FsY0J0bicpO1xuLy8gQWRkIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbmZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIG51bWJlckJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGNsaWNrZWQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ1dHRvblZhbHVlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpXG4gICAgICAgICAgICAudmFsdWU7XG4gICAgICAgIC8vIEFkZCB0aGUgYnV0dG9uIHZhbHVlIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWUgPVxuICAgICAgICAgICAgcmVzdWx0ICsgYnV0dG9uVmFsdWU7XG4gICAgfSk7XG59XG4vLyB0byBnZXQgcmVzdWx0IG9uIHNjcmVlbiB3aGVuIGVxdWFsIGJ1dHRvbiBwcmVzc2VkIGJ5IHVzZXJcbmNvbnN0IGVxdWFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2YWwnKTtcbmlmIChlcXVhbEJ0bikge1xuICAgIGVxdWFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpXG4gICAgICAgICAgICAgICAgLnZhbHVlO1xuICAgICAgICAgICAgKDAsIHV0aWxzXzEuY2FsY3VsYXRlKShyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZSA9XG4gICAgICAgICAgICAgICAgJ01hbGZvcm1lZCBFeHByZXNzaW9uJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdCcpO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgdHdvIHBvd2VyIHhcbmNvbnN0IHR3b1Bvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHdvX3Bvd2VyX1gnKTtcbnR3b1Bvd3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAyKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgdGVuIHBvd2VyIHhcbmNvbnN0IHRlblBvd3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVuX3Bvd2VyX3gnKTtcbnRlblBvd3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGAxMCoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSBzcXVhcmUgcm9vdCBvZiB4XG5jb25zdCByb290WGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290X3gnKTtcbnJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHBhcnNlRmxvYXQocmVzdWx0LnZhbHVlKTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVTcXJ0KSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGN1YmUgcm9vdCBvZiB4XG5jb25zdCB0aHJlZVJvb3RYYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1YmVfcm9vdF94Jyk7XG50aHJlZVJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHBhcnNlRmxvYXQocmVzdWx0LnZhbHVlKTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVDdWJlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==