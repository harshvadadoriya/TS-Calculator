/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoryRecall = exports.memorySubtraction = exports.memoryAddition = exports.memoryClear = exports.memoryStore = exports.getFe = exports.getDegreesToDMS = exports.getDeg = exports.getRand = exports.getCot = exports.getCsc = exports.getSec = exports.getTan = exports.getCos = exports.getSine = exports.getPlusbyMinus = exports.getCeil = exports.getFloor = exports.getAbsolute = exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
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
        else if (input.includes('π') || input.includes('e')) {
            // Replace 'π' and 'e' with their corresponding numerical values
            input = input.replaceAll(/(^|[-+*/])π/g, '$13.14159265359');
            input = input.replaceAll(/(^|[-+*/])e/g, '$12.71828182846');
            input = input.replaceAll(/π(?=\d)/g, '3.14159265359*');
            input = input.replaceAll(/e(?=\d)/g, '2.71828182846*');
            input = input.replaceAll(/(?<=\d|\.)π/g, '*3.14159265359');
            input = input.replaceAll(/(?<=\d|\.)e/g, '*2.71828182846');
            input = input.replaceAll(/π$/g, '*3.14159265359');
            input = input.replaceAll(/e$/g, '*2.71828182846');
            //---------------------------
            // input = input.replaceAll(/(^|[-+*/()])π/g, '$13.14159265359');
            // input = input.replaceAll(/(^|[-+*/()])e/g, '$12.71828182846');
            // input = input.replaceAll(/π(?=\d|\.|\()|π$/g, '3.14159265359*');
            // input = input.replaceAll(/e(?=\d|\.|\()|e$/g, '2.71828182846*');
            // input = input.replaceAll(/(?<=\d|\.)π|(?<=\))π/g, '*3.14159265359');
            // input = input.replaceAll(/(?<=\d|\.)e|(?<=\))e/g, '*2.71828182846');
            // Evaluate the expression
            try {
                const resultEval = eval(input);
                if (result)
                    result.value = resultEval.toFixed(11).toString();
            }
            catch (error) {
                if (result)
                    result.value = 'Invalid expression';
            }
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
        // else evaluate the input using the eval function
        else {
            // Replace double negative signs with a single positive sign
            //   input = input.replace(/--/g, "+");
            // Evaluate expression using eval()
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
const result = document.querySelector('#result');
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
    const num = parseFloat(input);
    if (isNaN(num)) {
        return '';
    }
    else {
        return Math.sqrt(num).toString();
    }
}
exports.calculateSqrt = calculateSqrt;
// function to calculate cube root
function calculateCubeSqrt(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return '';
    }
    else {
        return Math.cbrt(num).toString();
    }
}
exports.calculateCubeSqrt = calculateCubeSqrt;
// function to generate absolute value
function getAbsolute(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return '';
    }
    else {
        return Math.abs(num).toString();
    }
}
exports.getAbsolute = getAbsolute;
// function to generate Floor value
function getFloor(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return '';
    }
    else {
        return Math.floor(num).toString();
    }
}
exports.getFloor = getFloor;
// function to generate Ceil value
function getCeil(input) {
    const num = parseFloat(input);
    if (isNaN(num)) {
        return '';
    }
    else {
        return Math.ceil(num).toString();
    }
}
exports.getCeil = getCeil;
// function to toggle operand sign
function getPlusbyMinus(input) {
    let userStr = input.value.toString();
    if (userStr.charAt(0) === '-') {
        input.value = input.value.substring(1, input.value.length);
    }
    else {
        input.value = '-' + input.value;
    }
}
exports.getPlusbyMinus = getPlusbyMinus;
// check which unit of angle is selected by user
let unitOfAngle = 'DEG';
const buttonOfUnit = document.getElementById('deg');
buttonOfUnit.addEventListener('click', () => {
    unitOfAngle = unitOfAngle === 'DEG' ? 'RAD' : 'DEG';
    buttonOfUnit.innerHTML = unitOfAngle;
});
// common function to calculate all Trigonometry functions
function calculateTrigValue(input, trigFunc) {
    if (unitOfAngle === 'RAD') {
        let radians = parseFloat(input);
        result.value = trigFunc(radians).toString();
    }
    else if (unitOfAngle === 'DEG') {
        let degree = parseFloat(input) * (Math.PI / 180);
        result.value = trigFunc(degree).toString();
    }
}
// function for get sine value
function getSine(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, Math.sin);
}
exports.getSine = getSine;
// function for get cos value
function getCos(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, Math.cos);
}
exports.getCos = getCos;
// function for get tan value
function getTan(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, Math.tan);
}
exports.getTan = getTan;
// function for get sec value
function getSec(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}
exports.getSec = getSec;
// function for get cosec value
function getCsc(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}
exports.getCsc = getCsc;
// function for get cot value
function getCot(input) {
    if (!input) {
        return 'Invalid input';
    }
    return calculateTrigValue(input, (radians) => 1 / Math.tan(radians));
}
exports.getCot = getCot;
// function to generate random numbers
function getRand(input) {
    input.value = Math.random().toString();
}
exports.getRand = getRand;
// function to get degree
function getDeg(input) {
    if (unitOfAngle === 'RAD') {
        let deg = Number(input) * (180 / Math.PI);
        result.value = deg.toString();
    }
    else {
        result.value = (Number(result.value) / 0.0147).toString();
    }
}
exports.getDeg = getDeg;
// function to get Degree to DMS
function getDegreesToDMS(input) {
    if (unitOfAngle === 'DEG') {
        let d = Math.floor(Number(input));
        let m = Math.floor((Number(input) - d) * 60);
        let s = ((Number(input) - d - m / 60) * 3600).toFixed(2);
        if (s == '60') {
            m++;
            s = '0';
        }
        if (m == 60) {
            d++;
            m = 0;
        }
        result.value = `${d}° ${m}' ${s}"`;
    }
    else {
        alert('Please select DEG option first');
        result.value = '';
    }
}
exports.getDegreesToDMS = getDegreesToDMS;
// function to get fixed to exponent
function getFe(input) {
    if (input == '' || input == '0') {
        input = '0';
    }
    else {
        input = `${input}e+0`;
    }
    result.value = input;
}
exports.getFe = getFe;
// function to store memory
function memoryStore(input) {
    document.getElementById('memoryShow').innerHTML = input.value || '0';
}
exports.memoryStore = memoryStore;
// function to clear memory
function memoryClear() {
    document.getElementById('memoryShow').innerHTML =  false || '0';
}
exports.memoryClear = memoryClear;
function getMemoryValue() {
    return parseInt(document.getElementById('memoryShow').innerHTML);
}
// function for memory addition
function memoryAddition(input) {
    let showResult = (getMemoryValue() + parseInt(input.value)).toString();
    document.getElementById('memoryShow').innerHTML = showResult;
}
exports.memoryAddition = memoryAddition;
// function for memory subtraction
function memorySubtraction(input) {
    let showResult = (getMemoryValue() - parseInt(input.value)).toString();
    document.getElementById('memoryShow').innerHTML = showResult;
}
exports.memorySubtraction = memorySubtraction;
// function for memory recall
function memoryRecall(input) {
    input.value = document.getElementById('memoryShow').innerHTML;
}
exports.memoryRecall = memoryRecall;


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

var _a, _b, _c;
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
// event listener to solve e power x
const ePowx = document.querySelector('#e_power_x');
ePowx.addEventListener('click', function () {
    const userIp = document.getElementById('result').value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve exp
const ePow = document.querySelector('#exp');
ePow.addEventListener('click', function () {
    const userIp = document.getElementById('result').value;
    const output = `e**${userIp}`;
    result.value = output;
});
// event listener to solve 1/x
const oneByX = document.querySelector('#one_by_x');
oneByX.addEventListener('click', function () {
    const userIp = document.getElementById('result').value;
    const output = `1/${userIp}`;
    result.value = output;
});
// add event listener to solve square root of x
const rootXbtn = document.querySelector('#root_x');
rootXbtn.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.calculateSqrt)(userInput);
    result.value = calculatedValue;
});
// add event listener to solve cube root of x
const threeRootXbtn = document.querySelector('#cube_root_x');
threeRootXbtn.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.calculateCubeSqrt)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve '+/-'
const PlusbyMinus = document.querySelector('#addition_by_subtraction');
PlusbyMinus.addEventListener('click', () => {
    (0, utils_1.getPlusbyMinus)(result);
});
// add Eventlistener to solve absolute
(_a = document.querySelector('#x_abs')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getAbsolute)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve floor
(_b = document.querySelector('#x_floor')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getFloor)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve ceil
(_c = document.querySelector('#x_ceil')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getCeil)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve round
const roundx = document.querySelector('#x_round');
roundx.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_1.getAbsolute)(userInput);
    result.value = calculatedValue;
});
// add Eventlistener to solve sin
const sinBtn = document.getElementById('sin');
sinBtn.addEventListener('click', () => {
    (0, utils_1.getSine)(result.value);
});
// add Eventlistener to solve cos
const cosBtn = document.getElementById('cos');
cosBtn.addEventListener('click', () => {
    (0, utils_1.getCos)(result.value);
});
// add Eventlistener to solve tan
const tanBtn = document.getElementById('tan');
tanBtn.addEventListener('click', () => {
    (0, utils_1.getTan)(result.value);
});
// add Eventlistener to solve sec
const secBtn = document.getElementById('sec');
secBtn.addEventListener('click', () => {
    (0, utils_1.getSec)(result.value);
});
// add Eventlistener to solve cosec
const cscBtn = document.getElementById('csc');
cscBtn.addEventListener('click', () => {
    (0, utils_1.getCsc)(result.value);
});
// add Eventlistener to solve cot
const cotBtn = document.getElementById('cot');
cotBtn.addEventListener('click', () => {
    (0, utils_1.getCot)(result.value);
});
// add Eventlistener to generate random numbers
const randBtn = document.getElementById('rand');
randBtn.addEventListener('click', () => {
    (0, utils_1.getRand)(result);
});
// add Eventlistener to get degree
const degBtn = document.getElementById('btnDeg');
degBtn.addEventListener('click', () => {
    (0, utils_1.getDeg)(result.value);
});
// add Eventlistener for dms
const dmsBtn = document.getElementById('dms');
dmsBtn.addEventListener('click', () => {
    (0, utils_1.getDegreesToDMS)(result.value);
});
// add EventListener for f-e
const fixedtoExponent = document.getElementById('fe');
fixedtoExponent.addEventListener('click', () => {
    (0, utils_1.getFe)(result.value);
});
// Memory buttons Eventlistener
// Memory store functionality
let memoryStoreBtn = document.getElementById('memoryStore');
memoryStoreBtn.addEventListener('click', () => {
    if (result.value != '') {
        document.getElementById('memoryClear').disabled =
            false;
        document.getElementById('memoryRecall').disabled =
            false;
    }
    (0, utils_1.memoryStore)(result);
});
// Memory clear functionality
let memoryClearBtn = document.querySelector('#memoryClear');
memoryClearBtn.addEventListener('click', () => {
    document.getElementById('memoryClear').disabled = true;
    document.getElementById('memoryRecall').disabled =
        true;
    (0, utils_1.memoryClear)();
});
// Memory recall functionality
let memoryRecallBtn = document.getElementById('memoryRecall');
memoryRecallBtn.addEventListener('click', () => {
    (0, utils_1.memoryRecall)(result);
});
// Memory addition functionality
let memoryAdditionBtn = document.getElementById('memoryPlus');
memoryAdditionBtn.addEventListener('click', () => {
    (0, utils_1.memoryAddition)(result);
});
// Memory subtraction functionality
let memorySubtractBtn = document.getElementById('memoryMinus');
memorySubtractBtn.addEventListener('click', () => {
    (0, utils_1.memorySubtraction)(result);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQixHQUFHLHlCQUF5QixHQUFHLHNCQUFzQixHQUFHLG1CQUFtQixHQUFHLG1CQUFtQixHQUFHLGFBQWEsR0FBRyx1QkFBdUIsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsZUFBZSxHQUFHLHNCQUFzQixHQUFHLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxtQkFBbUIsR0FBRyx5QkFBeUIsR0FBRyxxQkFBcUIsR0FBRyxpQkFBaUI7QUFDcmM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLHNEQUFzRCxNQUFFO0FBQ3hEO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7OztVQy9XcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jYWxjLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RzLWNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtY2FsYy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVtb3J5UmVjYWxsID0gZXhwb3J0cy5tZW1vcnlTdWJ0cmFjdGlvbiA9IGV4cG9ydHMubWVtb3J5QWRkaXRpb24gPSBleHBvcnRzLm1lbW9yeUNsZWFyID0gZXhwb3J0cy5tZW1vcnlTdG9yZSA9IGV4cG9ydHMuZ2V0RmUgPSBleHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGV4cG9ydHMuZ2V0RGVnID0gZXhwb3J0cy5nZXRSYW5kID0gZXhwb3J0cy5nZXRDb3QgPSBleHBvcnRzLmdldENzYyA9IGV4cG9ydHMuZ2V0U2VjID0gZXhwb3J0cy5nZXRUYW4gPSBleHBvcnRzLmdldENvcyA9IGV4cG9ydHMuZ2V0U2luZSA9IGV4cG9ydHMuZ2V0UGx1c2J5TWludXMgPSBleHBvcnRzLmdldENlaWwgPSBleHBvcnRzLmdldEZsb29yID0gZXhwb3J0cy5nZXRBYnNvbHV0ZSA9IGV4cG9ydHMuY2FsY3VsYXRlQ3ViZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBleHBvcnRzLmNhbGN1bGF0ZSA9IHZvaWQgMDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBmYWN0b3JpYWwgYW5kIG5vcm1hbCBjYWxjdWxhdGlvblxuZnVuY3Rpb24gY2FsY3VsYXRlKGlucHV0KSB7XG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBpbmNsdWRlcyB0aGUgXCIhXCIgc3ltYm9sIHRoZW4gcGVyZm9ybSBmYWN0b3JpYWwgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlucHV0LmluY2x1ZGVzKCchJykpIHtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KGlucHV0LnNsaWNlKDAsIC0xKSk7XG4gICAgICAgICAgICAvLyBuZWVkIGZvciB0aGUgdHlwZSBndWFyZCBvbiByZXN1bHRGYWN0LCBzaW5jZSB3ZSBhcmUgaW1tZWRpYXRlbHkgY29udmVydGluZyBpdCB0byBhIHN0cmluZyB1c2luZyB0aGUgdG9TdHJpbmcoKSBtZXRob2RcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEZhY3QgPSBmYWN0b3JpYWwobnVtKS50b1N0cmluZygpO1xuICAgICAgICAgICAgLy8gYXNzaWduIHRoZSBjYWxjdWxhdGVkIGZhY3RvcmlhbCB2YWx1ZSBiYWNrIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRFbGVtKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0RWxlbS52YWx1ZSA9IHJlc3VsdEZhY3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXQuaW5jbHVkZXMoJ8+AJykgfHwgaW5wdXQuaW5jbHVkZXMoJ2UnKSkge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSAnz4AnIGFuZCAnZScgd2l0aCB0aGVpciBjb3JyZXNwb25kaW5nIG51bWVyaWNhbCB2YWx1ZXNcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi9dKc+AL2csICckMTMuMTQxNTkyNjUzNTknKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi9dKWUvZywgJyQxMi43MTgyODE4Mjg0NicpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC/PgCg/PVxcZCkvZywgJzMuMTQxNTkyNjUzNTkqJyk7XG4gICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL2UoPz1cXGQpL2csICcyLjcxODI4MTgyODQ2KicpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC8oPzw9XFxkfFxcLinPgC9nLCAnKjMuMTQxNTkyNjUzNTknKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pZS9nLCAnKjIuNzE4MjgxODI4NDYnKTtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvz4AkL2csICcqMy4xNDE1OTI2NTM1OScpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lJC9nLCAnKjIuNzE4MjgxODI4NDYnKTtcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvLyBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoLyhefFstKyovKCldKc+AL2csICckMTMuMTQxNTkyNjUzNTknKTtcbiAgICAgICAgICAgIC8vIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKF58Wy0rKi8oKV0pZS9nLCAnJDEyLjcxODI4MTgyODQ2Jyk7XG4gICAgICAgICAgICAvLyBpbnB1dCA9IGlucHV0LnJlcGxhY2VBbGwoL8+AKD89XFxkfFxcLnxcXCgpfM+AJC9nLCAnMy4xNDE1OTI2NTM1OSonKTtcbiAgICAgICAgICAgIC8vIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvZSg/PVxcZHxcXC58XFwoKXxlJC9nLCAnMi43MTgyODE4Mjg0NionKTtcbiAgICAgICAgICAgIC8vIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pz4B8KD88PVxcKSnPgC9nLCAnKjMuMTQxNTkyNjUzNTknKTtcbiAgICAgICAgICAgIC8vIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvKD88PVxcZHxcXC4pZXwoPzw9XFwpKWUvZywgJyoyLjcxODI4MTgyODQ2Jyk7XG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSB0aGUgZXhwcmVzc2lvblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHRFdmFsID0gZXZhbChpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0RXZhbC50b0ZpeGVkKDExKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gJ0ludmFsaWQgZXhwcmVzc2lvbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXQgaW5jbHVkZXMgbG9nXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKCdsb2cnKSkge1xuICAgICAgICAgICAgY29uc3QgbG9nUmVzdWx0ID0gZXZhbHVhdGVMb2coaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2dSZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBsb2dSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYW5kIGV2YWx1YXRlIGlmIGlucHV0IGluY2x1ZGVzIGxuXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKCdsbicpKSB7XG4gICAgICAgICAgICBsZXQgbmF0dXJhbExvZ1Jlc3VsdCA9IGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCk7XG4gICAgICAgICAgICAvLyB1c2VkIHR5cGUgZ3VhcmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmF0dXJhbExvZ1Jlc3VsdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsTG9nUmVzdWx0ID0gbmF0dXJhbExvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbmF0dXJhbExvZ1Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBhbmQgZXZhbHVhdGUgcm9vdFxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcygn4oiaJykpIHtcbiAgICAgICAgICAgIGxldCByb290UmVzdWx0ID0gY2FsY3VsYXRlUm9vdChpbnB1dCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3RSZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcm9vdFJlc3VsdCA9IHJvb3RSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByb290UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgZXZhbHVhdGUgdGhlIGlucHV0IHVzaW5nIHRoZSBldmFsIGZ1bmN0aW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVwbGFjZSBkb3VibGUgbmVnYXRpdmUgc2lnbnMgd2l0aCBhIHNpbmdsZSBwb3NpdGl2ZSBzaWduXG4gICAgICAgICAgICAvLyAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvLS0vZywgXCIrXCIpO1xuICAgICAgICAgICAgLy8gRXZhbHVhdGUgZXhwcmVzc2lvbiB1c2luZyBldmFsKClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwclJlc3VsdCA9IGV2YWwoaW5wdXQpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IGV4cHJSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9ICdJbnZhbGlkIGlucHV0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuY2FsY3VsYXRlID0gY2FsY3VsYXRlO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3VsdCcpO1xuLy8gZmFjdG9yaWFsIGZ1bmN0aW9uXG5mdW5jdGlvbiBmYWN0b3JpYWwobnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT09ICdudW1iZXInIHx8IG51bSA8IDAgfHwgTWF0aC5mbG9vcihudW0pICE9PSBudW0pIHtcbiAgICAgICAgcmV0dXJuICdNYWxmb3JtZWQgRXhwcmVzc2lvbic7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSAxO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bTsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCAqPSBpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGxvZ1xuZnVuY3Rpb24gZXZhbHVhdGVMb2coaW5wdXQpIHtcbiAgICAvLyBzcGxpdCB0aGUgaW5wdXQgdmFsdWUgaW50byB0aGUgbnVtYmVyIGJlZm9yZSBhbmQgYWZ0ZXIgJ2xvZydcbiAgICBjb25zdCBbYmFzZSwgbnVtYmVyXSA9IGlucHV0LnNwbGl0KCdsb2cnKTtcbiAgICAvLyBjb252ZXJ0IHRoZSBiYXNlIGFuZCBudW1iZXIgdG8gbnVtYmVycyB1c2luZyB0aGUgTnVtYmVyKCkgbWV0aG9kXG4gICAgY29uc3QgYmFzZU51bSA9IE51bWJlcihiYXNlKSB8fCAxMDtcbiAgICBjb25zdCBudW1iZXJOdW0gPSBOdW1iZXIobnVtYmVyKTtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGxvZ2FyaXRobSB3aXRoIHRoZSBzcGVjaWZpZWQgYmFzZSB1c2luZyB0aGUgTWF0aC5sb2coKSBtZXRob2QgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdFxuICAgIGNvbnN0IHRlbXBBbnN3ZXIgPSBNYXRoLmxvZyhudW1iZXJOdW0pIC8gTWF0aC5sb2coYmFzZU51bSk7XG4gICAgY29uc3QgcmVzdWx0TG9nID0gdGVtcEFuc3dlci50b1N0cmluZygpO1xuICAgIGNvbnN0IGRlY2ltYWxJbmRleCA9IHJlc3VsdExvZy5pbmRleE9mKCcuJyk7XG4gICAgY29uc3QgbXVsdGlwbGllZE51bSA9IGRlY2ltYWxJbmRleCA+IDAgJiYgcmVzdWx0TG9nW2RlY2ltYWxJbmRleCAtIDFdID09PSAnMCdcbiAgICAgICAgPyBOdW1iZXIocmVzdWx0TG9nKVxuICAgICAgICA6IHRlbXBBbnN3ZXI7XG4gICAgcmV0dXJuIG11bHRpcGxpZWROdW07XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgTmF0dXJhbCBMb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCkge1xuICAgIGNvbnN0IG1hdGNoID0gaW5wdXQubWF0Y2goL14oXFxkKilsbiguKykkLyk7XG4gICAgbGV0IGNvZWZmaWNpZW50ID0gMTtcbiAgICBsZXQgeCA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgbGV0IHJlc3VsdE5hdHVyYWxMb2cgPSAnSW52YWxpZCBpbnB1dCc7XG4gICAgICAgIHJldHVybiByZXN1bHROYXR1cmFsTG9nO1xuICAgIH1cbiAgICBjb2VmZmljaWVudCA9IG1hdGNoWzFdID8gcGFyc2VJbnQobWF0Y2hbMV0pIDogMTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgeCA9IHBhcnNlRmxvYXQobWF0Y2hbMl0gfHwgJzAnKTtcbiAgICBsZXQgcmVzdWx0TmF0dXJhbExvZyA9IGNvZWZmaWNpZW50ICogTWF0aC5sb2coeCk7XG4gICAgcmV0dXJuIHJlc3VsdE5hdHVyYWxMb2c7XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlUm9vdChpbnB1dCkge1xuICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc3BsaXQoJ+KImicpO1xuICAgIC8vIGFkZCBudWxsIGNoZWNrIGFuZCBkZWZhdWx0IHZhbHVlIG9mIDBcbiAgICBjb25zdCB4ID0gcGFyc2VGbG9hdChwYXJ0c1sxXSB8fCAnMCcpO1xuICAgIGlmIChpc05hTih4KSkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgaW5wdXQnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIGFkZCBudWxsIGNoZWNrIGFuZCBkZWZhdWx0IHZhbHVlIG9mIDBcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlRmxvYXQocGFydHNbMF0gfHwgJzAnKTtcbiAgICAgICAgaWYgKGlzTmFOKHkpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgaW5wdXQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHgsIDEgLyB5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICB9XG59XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgU3F1YXJlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZVNxcnQoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZVNxcnQgPSBjYWxjdWxhdGVTcXJ0O1xuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIGN1YmUgcm9vdFxuZnVuY3Rpb24gY2FsY3VsYXRlQ3ViZVNxcnQoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5jYnJ0KG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZUN1YmVTcXJ0ID0gY2FsY3VsYXRlQ3ViZVNxcnQ7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhYnNvbHV0ZSB2YWx1ZVxuZnVuY3Rpb24gZ2V0QWJzb2x1dGUoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5hYnMobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0QWJzb2x1dGUgPSBnZXRBYnNvbHV0ZTtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIEZsb29yIHZhbHVlXG5mdW5jdGlvbiBnZXRGbG9vcihpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldEZsb29yID0gZ2V0Rmxvb3I7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBDZWlsIHZhbHVlXG5mdW5jdGlvbiBnZXRDZWlsKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRDZWlsID0gZ2V0Q2VpbDtcbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBvcGVyYW5kIHNpZ25cbmZ1bmN0aW9uIGdldFBsdXNieU1pbnVzKGlucHV0KSB7XG4gICAgbGV0IHVzZXJTdHIgPSBpbnB1dC52YWx1ZS50b1N0cmluZygpO1xuICAgIGlmICh1c2VyU3RyLmNoYXJBdCgwKSA9PT0gJy0nKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDEsIGlucHV0LnZhbHVlLmxlbmd0aCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICctJyArIGlucHV0LnZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0UGx1c2J5TWludXMgPSBnZXRQbHVzYnlNaW51cztcbi8vIGNoZWNrIHdoaWNoIHVuaXQgb2YgYW5nbGUgaXMgc2VsZWN0ZWQgYnkgdXNlclxubGV0IHVuaXRPZkFuZ2xlID0gJ0RFRyc7XG5jb25zdCBidXR0b25PZlVuaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVnJyk7XG5idXR0b25PZlVuaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdW5pdE9mQW5nbGUgPSB1bml0T2ZBbmdsZSA9PT0gJ0RFRycgPyAnUkFEJyA6ICdERUcnO1xuICAgIGJ1dHRvbk9mVW5pdC5pbm5lckhUTUwgPSB1bml0T2ZBbmdsZTtcbn0pO1xuLy8gY29tbW9uIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBhbGwgVHJpZ29ub21ldHJ5IGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCB0cmlnRnVuYykge1xuICAgIGlmICh1bml0T2ZBbmdsZSA9PT0gJ1JBRCcpIHtcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gdHJpZ0Z1bmMocmFkaWFucykudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodW5pdE9mQW5nbGUgPT09ICdERUcnKSB7XG4gICAgICAgIGxldCBkZWdyZWUgPSBwYXJzZUZsb2F0KGlucHV0KSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gdHJpZ0Z1bmMoZGVncmVlKS50b1N0cmluZygpO1xuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIGZvciBnZXQgc2luZSB2YWx1ZVxuZnVuY3Rpb24gZ2V0U2luZShpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgTWF0aC5zaW4pO1xufVxuZXhwb3J0cy5nZXRTaW5lID0gZ2V0U2luZTtcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY29zIHZhbHVlXG5mdW5jdGlvbiBnZXRDb3MoaW5wdXQpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBpbnB1dCc7XG4gICAgfVxuICAgIHJldHVybiBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguY29zKTtcbn1cbmV4cG9ydHMuZ2V0Q29zID0gZ2V0Q29zO1xuLy8gZnVuY3Rpb24gZm9yIGdldCB0YW4gdmFsdWVcbmZ1bmN0aW9uIGdldFRhbihpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgTWF0aC50YW4pO1xufVxuZXhwb3J0cy5nZXRUYW4gPSBnZXRUYW47XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IHNlYyB2YWx1ZVxuZnVuY3Rpb24gZ2V0U2VjKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgaW5wdXQnO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguY29zKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0U2VjID0gZ2V0U2VjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3NlYyB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q3NjKGlucHV0KSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgaW5wdXQnO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCAocmFkaWFucykgPT4gMSAvIE1hdGguc2luKHJhZGlhbnMpKTtcbn1cbmV4cG9ydHMuZ2V0Q3NjID0gZ2V0Q3NjO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBjb3QgdmFsdWVcbmZ1bmN0aW9uIGdldENvdChpbnB1dCkge1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICB9XG4gICAgcmV0dXJuIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLnRhbihyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldENvdCA9IGdldENvdDtcbi8vIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHJhbmRvbSBudW1iZXJzXG5mdW5jdGlvbiBnZXRSYW5kKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCk7XG59XG5leHBvcnRzLmdldFJhbmQgPSBnZXRSYW5kO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IGRlZ3JlZVxuZnVuY3Rpb24gZ2V0RGVnKGlucHV0KSB7XG4gICAgaWYgKHVuaXRPZkFuZ2xlID09PSAnUkFEJykge1xuICAgICAgICBsZXQgZGVnID0gTnVtYmVyKGlucHV0KSAqICgxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gZGVnLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXN1bHQudmFsdWUgPSAoTnVtYmVyKHJlc3VsdC52YWx1ZSkgLyAwLjAxNDcpLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXREZWcgPSBnZXREZWc7XG4vLyBmdW5jdGlvbiB0byBnZXQgRGVncmVlIHRvIERNU1xuZnVuY3Rpb24gZ2V0RGVncmVlc1RvRE1TKGlucHV0KSB7XG4gICAgaWYgKHVuaXRPZkFuZ2xlID09PSAnREVHJykge1xuICAgICAgICBsZXQgZCA9IE1hdGguZmxvb3IoTnVtYmVyKGlucHV0KSk7XG4gICAgICAgIGxldCBtID0gTWF0aC5mbG9vcigoTnVtYmVyKGlucHV0KSAtIGQpICogNjApO1xuICAgICAgICBsZXQgcyA9ICgoTnVtYmVyKGlucHV0KSAtIGQgLSBtIC8gNjApICogMzYwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHMgPT0gJzYwJykge1xuICAgICAgICAgICAgbSsrO1xuICAgICAgICAgICAgcyA9ICcwJztcbiAgICAgICAgfVxuICAgICAgICBpZiAobSA9PSA2MCkge1xuICAgICAgICAgICAgZCsrO1xuICAgICAgICAgICAgbSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnZhbHVlID0gYCR7ZH3CsCAke219JyAke3N9XCJgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgREVHIG9wdGlvbiBmaXJzdCcpO1xuICAgICAgICByZXN1bHQudmFsdWUgPSAnJztcbiAgICB9XG59XG5leHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGdldERlZ3JlZXNUb0RNUztcbi8vIGZ1bmN0aW9uIHRvIGdldCBmaXhlZCB0byBleHBvbmVudFxuZnVuY3Rpb24gZ2V0RmUoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gJycgfHwgaW5wdXQgPT0gJzAnKSB7XG4gICAgICAgIGlucHV0ID0gJzAnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5wdXQgPSBgJHtpbnB1dH1lKzBgO1xuICAgIH1cbiAgICByZXN1bHQudmFsdWUgPSBpbnB1dDtcbn1cbmV4cG9ydHMuZ2V0RmUgPSBnZXRGZTtcbi8vIGZ1bmN0aW9uIHRvIHN0b3JlIG1lbW9yeVxuZnVuY3Rpb24gbWVtb3J5U3RvcmUoaW5wdXQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5U2hvdycpLmlubmVySFRNTCA9IGlucHV0LnZhbHVlIHx8ICcwJztcbn1cbmV4cG9ydHMubWVtb3J5U3RvcmUgPSBtZW1vcnlTdG9yZTtcbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIG1lbW9yeVxuZnVuY3Rpb24gbWVtb3J5Q2xlYXIoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVNob3cnKS5pbm5lckhUTUwgPSAnJyB8fCAnMCc7XG59XG5leHBvcnRzLm1lbW9yeUNsZWFyID0gbWVtb3J5Q2xlYXI7XG5mdW5jdGlvbiBnZXRNZW1vcnlWYWx1ZSgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVNob3cnKS5pbm5lckhUTUwpO1xufVxuLy8gZnVuY3Rpb24gZm9yIG1lbW9yeSBhZGRpdGlvblxuZnVuY3Rpb24gbWVtb3J5QWRkaXRpb24oaW5wdXQpIHtcbiAgICBsZXQgc2hvd1Jlc3VsdCA9IChnZXRNZW1vcnlWYWx1ZSgpICsgcGFyc2VJbnQoaW5wdXQudmFsdWUpKS50b1N0cmluZygpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlTaG93JykuaW5uZXJIVE1MID0gc2hvd1Jlc3VsdDtcbn1cbmV4cG9ydHMubWVtb3J5QWRkaXRpb24gPSBtZW1vcnlBZGRpdGlvbjtcbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgc3VidHJhY3Rpb25cbmZ1bmN0aW9uIG1lbW9yeVN1YnRyYWN0aW9uKGlucHV0KSB7XG4gICAgbGV0IHNob3dSZXN1bHQgPSAoZ2V0TWVtb3J5VmFsdWUoKSAtIHBhcnNlSW50KGlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5U2hvdycpLmlubmVySFRNTCA9IHNob3dSZXN1bHQ7XG59XG5leHBvcnRzLm1lbW9yeVN1YnRyYWN0aW9uID0gbWVtb3J5U3VidHJhY3Rpb247XG4vLyBmdW5jdGlvbiBmb3IgbWVtb3J5IHJlY2FsbFxuZnVuY3Rpb24gbWVtb3J5UmVjYWxsKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5U2hvdycpLmlubmVySFRNTDtcbn1cbmV4cG9ydHMubWVtb3J5UmVjYWxsID0gbWVtb3J5UmVjYWxsO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9hLCBfYiwgX2M7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdXRpbHNcIik7XG4vLyB0b2dnbGUgYnV0dG9uXG5jb25zdCB0b2dnbGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9nZ2xlLWJ1dHRvbicpO1xuY29uc3QgYnV0dG9uczEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uMScpO1xuY29uc3QgYnV0dG9uczIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uMicpO1xuLy8gdG9nZ2xlIGJ1dHRvbiBldmVudCBsaXN0ZW5lclxudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ1dHRvbnMxLmZvckVhY2goKGJ1dHRvbjEpID0+IHtcbiAgICAgICAgYnV0dG9uMS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbiAgICBidXR0b25zMi5mb3JFYWNoKChidXR0b24yKSA9PiB7XG4gICAgICAgIGJ1dHRvbjIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgfSk7XG59KTtcbi8vIHNob3cgZHJvcGRvd24gbWVudSBvbiBUcmlnb25pbWV0cnkgYnV0dG9uIGNsaWNrXG5jb25zdCBkcm9wYnRuVHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bkJ0blRyaWcnKTtcbmNvbnN0IGRyb3Bkb3duQ29udGVudFRyaWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlEcm9wZG93blRyaWcnKTtcbi8vIHNob3cgZHJvcGRvd24gbWVudSBvbiBGdW5jdGlvbiBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5GdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duQnRuRnVuYycpO1xuY29uc3QgZHJvcGRvd25Db250ZW50RnVuYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteURyb3Bkb3duRnVuYycpO1xuaWYgKGRyb3BidG5UcmlnICYmIGRyb3Bkb3duQ29udGVudFRyaWcpIHtcbiAgICBkcm9wYnRuVHJpZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICB9KTtcbiAgICBpZiAoZHJvcGJ0bkZ1bmMgJiYgZHJvcGRvd25Db250ZW50RnVuYykge1xuICAgICAgICBkcm9wYnRuRnVuYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGJvdGggZHJvcGRvd24sIGRpc3BsYXkgbm9uZSB3aGVuIHVzZXIgY2xpY2tzIG91dHNpZGUgZHJvcGRvd24gYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFkcm9wYnRuVHJpZy5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgIWRyb3Bkb3duQ29udGVudFRyaWcuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudFRyaWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZHJvcGJ0bkZ1bmMuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgICAgICFkcm9wZG93bkNvbnRlbnRGdW5jLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IGFyciA9IFtcbiAgICAnMCcsXG4gICAgJzEnLFxuICAgICcyJyxcbiAgICAnMycsXG4gICAgJzQnLFxuICAgICc1JyxcbiAgICAnNicsXG4gICAgJzcnLFxuICAgICc4JyxcbiAgICAnOScsXG4gICAgJysnLFxuICAgICctJyxcbiAgICAnLycsXG4gICAgJyonLFxuICAgICclJyxcbiAgICAnKCcsXG4gICAgJyknLFxuICAgICcuJyxcbiAgICAnz4AnLFxuICAgICdlJyxcbiAgICAnIScsXG5dO1xuLy8gZGlzcGxheSBrZXlib2FyZCBrZXkgb24gc2NyZWVuIHdoZW4ga2V5Ym9hcmQgbnVtYmVycyBvciBvcGVyYXRvcnMgY2xpY2tcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgaWYgKGFyci5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlICs9IGV2ZW50LmtleTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJz0nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYWxjdWxhdGUpKHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gJ01hbGZvcm1lZCBFeHByZXNzaW9uJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICAgIC8vIHByZXZlbnQgZnJvbSBFbnRlciBrZXkgcHJlc3NpbmdcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG4vLyBHZXQgYWxsIHRoZSBudW1iZXIgYnV0dG9uc1xubGV0IG51bWJlckJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYWxjQnRuJyk7XG4vLyBBZGQgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgbnVtYmVyQnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgY2xpY2tlZCBidXR0b25cbiAgICAgICAgY29uc3QgYnV0dG9uVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JylcbiAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgLy8gQWRkIHRoZSBidXR0b24gdmFsdWUgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZSA9XG4gICAgICAgICAgICByZXN1bHQgKyBidXR0b25WYWx1ZTtcbiAgICB9KTtcbn1cbi8vIHRvIGdldCByZXN1bHQgb24gc2NyZWVuIHdoZW4gZXF1YWwgYnV0dG9uIHByZXNzZWQgYnkgdXNlclxuY29uc3QgZXF1YWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZhbCcpO1xuaWYgKGVxdWFsQnRuKSB7XG4gICAgZXF1YWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JylcbiAgICAgICAgICAgICAgICAudmFsdWU7XG4gICAgICAgICAgICAoMCwgdXRpbHNfMS5jYWxjdWxhdGUpKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnJykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlID1cbiAgICAgICAgICAgICAgICAnTWFsZm9ybWVkIEV4cHJlc3Npb24nO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0Jyk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSB0d28gcG93ZXIgeFxuY29uc3QgdHdvUG93eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0d29fcG93ZXJfWCcpO1xudHdvUG93eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYDIqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSB0ZW4gcG93ZXIgeFxuY29uc3QgdGVuUG93eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW5fcG93ZXJfeCcpO1xudGVuUG93eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYDEwKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgZSBwb3dlciB4XG5jb25zdCBlUG93eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlX3Bvd2VyX3gnKTtcbmVQb3d4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgZSoqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGV4cFxuY29uc3QgZVBvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHAnKTtcbmVQb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdXNlcklwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlO1xuICAgIGNvbnN0IG91dHB1dCA9IGBlKioke3VzZXJJcH1gO1xuICAgIHJlc3VsdC52YWx1ZSA9IG91dHB1dDtcbn0pO1xuLy8gZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgMS94XG5jb25zdCBvbmVCeVggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb25lX2J5X3gnKTtcbm9uZUJ5WC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB1c2VySXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWU7XG4gICAgY29uc3Qgb3V0cHV0ID0gYDEvJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSBzcXVhcmUgcm9vdCBvZiB4XG5jb25zdCByb290WGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290X3gnKTtcbnJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVTcXJ0KSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIGN1YmUgcm9vdCBvZiB4XG5jb25zdCB0aHJlZVJvb3RYYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1YmVfcm9vdF94Jyk7XG50aHJlZVJvb3RYYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5jYWxjdWxhdGVDdWJlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlICcrLy0nXG5jb25zdCBQbHVzYnlNaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRpdGlvbl9ieV9zdWJ0cmFjdGlvbicpO1xuUGx1c2J5TWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0UGx1c2J5TWludXMpKHJlc3VsdCk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGFic29sdXRlXG4oX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeF9hYnMnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRBYnNvbHV0ZSkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGZsb29yXG4oX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeF9mbG9vcicpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldEZsb29yKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY2VpbFxuKF9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3hfY2VpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9ICgwLCB1dGlsc18xLmdldENlaWwpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSByb3VuZFxuY29uc3Qgcm91bmR4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3hfcm91bmQnKTtcbnJvdW5keC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0QWJzb2x1dGUpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBzaW5cbmNvbnN0IHNpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW4nKTtcbnNpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRTaW5lKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NcbmNvbnN0IGNvc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3MnKTtcbmNvc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDb3MpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIHRhblxuY29uc3QgdGFuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhbicpO1xudGFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFRhbikocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgc2VjXG5jb25zdCBzZWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjJyk7XG5zZWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0U2VjKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NlY1xuY29uc3QgY3NjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzYycpO1xuY3NjQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldENzYykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY290XG5jb25zdCBjb3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY290Jyk7XG5jb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q290KShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuY29uc3QgcmFuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kJyk7XG5yYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFJhbmQpKHJlc3VsdCk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdldCBkZWdyZWVcbmNvbnN0IGRlZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EZWcnKTtcbmRlZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXREZWcpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIGZvciBkbXNcbmNvbnN0IGRtc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkbXMnKTtcbmRtc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXREZWdyZWVzVG9ETVMpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudExpc3RlbmVyIGZvciBmLWVcbmNvbnN0IGZpeGVkdG9FeHBvbmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZScpO1xuZml4ZWR0b0V4cG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldEZlKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBNZW1vcnkgYnV0dG9ucyBFdmVudGxpc3RlbmVyXG4vLyBNZW1vcnkgc3RvcmUgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeVN0b3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVN0b3JlJyk7XG5tZW1vcnlTdG9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlDbGVhcicpLmRpc2FibGVkID1cbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5UmVjYWxsJykuZGlzYWJsZWQgPVxuICAgICAgICAgICAgZmFsc2U7XG4gICAgfVxuICAgICgwLCB1dGlsc18xLm1lbW9yeVN0b3JlKShyZXN1bHQpO1xufSk7XG4vLyBNZW1vcnkgY2xlYXIgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbW9yeUNsZWFyJyk7XG5tZW1vcnlDbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5Q2xlYXInKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVJlY2FsbCcpLmRpc2FibGVkID1cbiAgICAgICAgdHJ1ZTtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlDbGVhcikoKTtcbn0pO1xuLy8gTWVtb3J5IHJlY2FsbCBmdW5jdGlvbmFsaXR5XG5sZXQgbWVtb3J5UmVjYWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVJlY2FsbCcpO1xubWVtb3J5UmVjYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLm1lbW9yeVJlY2FsbCkocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IGFkZGl0aW9uIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlBZGRpdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlQbHVzJyk7XG5tZW1vcnlBZGRpdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlBZGRpdGlvbikocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IHN1YnRyYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlTdWJ0cmFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlNaW51cycpO1xubWVtb3J5U3VidHJhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5U3VidHJhY3Rpb24pKHJlc3VsdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==