/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.memoryRecall = exports.memorySubtraction = exports.memoryAddition = exports.memoryClear = exports.memoryStore = exports.getFe = exports.getDegreesToDMS = exports.getDeg = exports.getRand = exports.getCot = exports.getCsc = exports.getSec = exports.getTan = exports.getCos = exports.getSine = exports.toggleLastOperandSign = exports.getCeil = exports.getFloor = exports.getAbsolute = exports.calculateCubeSqrt = exports.calculateSqrt = exports.calculate = void 0;
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
// function to get positive or negative numbers '+/-'
// export function toggleLastOperandSign(input: string): string {
// 	// const num = parseFloat(input);
// 	// if (isNaN(num)) {
// 	// 	return '';
// 	// }
// 	// Remove all white spaces from the input
// 	input = input.replace(/\s/g, '');
// 	// Find the index of the last operator outside of brackets
// 	let lastIndex = -1;
// 	let depth = 0; // Keep track of bracket depth
// 	for (let i = input.length - 1; i >= 0; i--) {
// 		const char = input[i];
// 		if (char === ')') {
// 			depth++;
// 		} else if (char === '(') {
// 			depth--;
// 		} else if (depth === 0 && (char === '+' || char === '-')) {
// 			lastIndex = i;
// 			break;
// 		}
// 	}
// 	// If no operator was found and input is not empty, toggle the sign of the entire input
// 	if (lastIndex === -1) {
// 		if (input.startsWith('-')) {
// 			return input.substring(1);
// 		} else if (input.startsWith('+')) {
// 			return `-${input.substring(1)}`;
// 		} else if (input === '') {
// 			return '';
// 		} else {
// 			return `-${input}`;
// 		}
// 	}
// 	// Split the input into the parts before and after the last operator
// 	const leftOperand = input.substring(0, lastIndex + 1);
// 	const rightOperand = input.substring(lastIndex + 1);
// 	// Toggle the sign of the right operand
// 	if (rightOperand.startsWith('-')) {
// 		return `${leftOperand}${rightOperand.substring(1)}`;
// 	} else if (rightOperand.startsWith('+')) {
// 		return `${leftOperand}-${rightOperand.substring(1)}`;
// 	} else {
// 		// If the right operand contains brackets, toggle the sign of the last operand within the brackets
// 		const rightOperandWithSign = toggleLastOperandSign(rightOperand);
// 		const lastBracketIndex = rightOperandWithSign.lastIndexOf(')');
// 		if (lastBracketIndex === -1) {
// 			return `${leftOperand}-${rightOperandWithSign}`;
// 		} else {
// 			const firstBracketIndex = rightOperandWithSign.lastIndexOf(
// 				'(',
// 				lastBracketIndex
// 			);
// 			const operandAfterBracket = rightOperandWithSign.substring(
// 				lastBracketIndex + 1
// 			);
// 			const operandBeforeBracket = rightOperandWithSign.substring(
// 				firstBracketIndex + 1,
// 				lastBracketIndex
// 			);
// 			return `${leftOperand}${rightOperandWithSign.substring(
// 				0,
// 				firstBracketIndex + 1
// 			)}${toggleLastOperandSign(operandBeforeBracket)}${operandAfterBracket}`;
// 		}
// 	}
// }
function toggleLastOperandSign(input) {
    let numRegex = /[-]?\d+/g;
    let nums = input.match(numRegex);
    if (nums === null) {
        return '';
    }
    let newString = '';
    for (let i = 0; i < nums.length; i++) {
        let num = parseInt(nums[i] || '');
        if (i === nums.length - 1 && num > 0) {
            newString += `-${num}`;
        }
        else if (i === nums.length - 1 && num < 0) {
            newString += `${num * -1}`;
        }
        else {
            newString += `${num}`;
        }
        let opRegex = /[-+/*]/g;
        let opMatch = opRegex.exec(input);
        while (opMatch !== null &&
            opMatch.index < input.indexOf(nums[i + 1] || '')) {
            newString += `${opMatch[0]}`;
            opMatch = opRegex.exec(input);
        }
    }
    return newString;
}
exports.toggleLastOperandSign = toggleLastOperandSign;
// check which unit of angle is selected by user
let unitOfAngle = 'DEG';
const buttonOfUnit = document.getElementById('deg');
buttonOfUnit.addEventListener('click', () => {
    unitOfAngle = unitOfAngle === 'DEG' ? 'RAD' : 'DEG';
    buttonOfUnit.innerHTML = unitOfAngle;
});
// common function to calculate all Trigonometry functions
const result = document.querySelector('#result');
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
    calculateTrigValue(input, Math.sin);
}
exports.getSine = getSine;
// function for get cos value
function getCos(input) {
    calculateTrigValue(input, Math.cos);
}
exports.getCos = getCos;
// function for get tan value
function getTan(input) {
    calculateTrigValue(input, Math.tan);
}
exports.getTan = getTan;
// function for get sec value
function getSec(input) {
    calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}
exports.getSec = getSec;
// function for get cosec value
function getCsc(input) {
    calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}
exports.getCsc = getCsc;
// function for get cot value
function getCot(input) {
    calculateTrigValue(input, (radians) => 1 / Math.tan(radians));
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
    input.value = (getMemoryValue() + parseInt(input.value)).toString();
}
exports.memoryAddition = memoryAddition;
// function for memory subtraction
function memorySubtraction(input) {
    input.value = (getMemoryValue() - parseInt(input.value)).toString();
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
    const calculatedValue = Math.round(parseFloat(userInput)).toString();
    result.value = calculatedValue;
});
// add Eventlistener to solve '+/-'
// const PlusbyMinus: HTMLButtonElement = document.querySelector(
// 	'#addition_by_subtraction'
// )!;
// PlusbyMinus.addEventListener('click', () => {
// 	const userInput = result.value;
// 	const calculatedValue = getPlusbyMinus(userInput);
// 	result.value = calculatedValue;
// });
const utils_2 = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
const PlusbyMinus = document.querySelector('#addition_by_subtraction');
PlusbyMinus.addEventListener('click', () => {
    const userInput = result.value;
    const calculatedValue = (0, utils_2.toggleLastOperandSign)(userInput);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE9BQU87QUFDaEM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGdCQUFnQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1jYWxjLy4vc3JjL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL3RzLWNhbGMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHMtY2FsYy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVtb3J5UmVjYWxsID0gZXhwb3J0cy5tZW1vcnlTdWJ0cmFjdGlvbiA9IGV4cG9ydHMubWVtb3J5QWRkaXRpb24gPSBleHBvcnRzLm1lbW9yeUNsZWFyID0gZXhwb3J0cy5tZW1vcnlTdG9yZSA9IGV4cG9ydHMuZ2V0RmUgPSBleHBvcnRzLmdldERlZ3JlZXNUb0RNUyA9IGV4cG9ydHMuZ2V0RGVnID0gZXhwb3J0cy5nZXRSYW5kID0gZXhwb3J0cy5nZXRDb3QgPSBleHBvcnRzLmdldENzYyA9IGV4cG9ydHMuZ2V0U2VjID0gZXhwb3J0cy5nZXRUYW4gPSBleHBvcnRzLmdldENvcyA9IGV4cG9ydHMuZ2V0U2luZSA9IGV4cG9ydHMudG9nZ2xlTGFzdE9wZXJhbmRTaWduID0gZXhwb3J0cy5nZXRDZWlsID0gZXhwb3J0cy5nZXRGbG9vciA9IGV4cG9ydHMuZ2V0QWJzb2x1dGUgPSBleHBvcnRzLmNhbGN1bGF0ZUN1YmVTcXJ0ID0gZXhwb3J0cy5jYWxjdWxhdGVTcXJ0ID0gZXhwb3J0cy5jYWxjdWxhdGUgPSB2b2lkIDA7XG4vLyBmdW5jdGlvbiB0byBjYWxjdWxhdGUgZmFjdG9yaWFsIGFuZCBub3JtYWwgY2FsY3VsYXRpb25cbmZ1bmN0aW9uIGNhbGN1bGF0ZShpbnB1dCkge1xuICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0Jyk7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaW5jbHVkZXMgdGhlIFwiIVwiIHN5bWJvbCB0aGVuIHBlcmZvcm0gZmFjdG9yaWFsIGZ1bmN0aW9uXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnIScpKSB7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludChpbnB1dC5zbGljZSgwLCAtMSkpO1xuICAgICAgICAgICAgLy8gbmVlZCBmb3IgdGhlIHR5cGUgZ3VhcmQgb24gcmVzdWx0RmFjdCwgc2luY2Ugd2UgYXJlIGltbWVkaWF0ZWx5IGNvbnZlcnRpbmcgaXQgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kXG4gICAgICAgICAgICBjb25zdCByZXN1bHRGYWN0ID0gZmFjdG9yaWFsKG51bSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIC8vIGFzc2lnbiB0aGUgY2FsY3VsYXRlZCBmYWN0b3JpYWwgdmFsdWUgYmFjayB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0Jyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0RWxlbSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdEVsZW0udmFsdWUgPSByZXN1bHRGYWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBpbnB1dCBpbmNsdWRlcyB0aGUgXCLPgFwiIG9yIFwiZVwiIGFuZCBjYWxjdWxhdGUgdGhlbVxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcygnz4AnKSB8fCBpbnB1dC5pbmNsdWRlcygnZScpKSB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgc3RyaW5nIGVuZHMgd2l0aCAnz4AnIG9yICdlJ1xuICAgICAgICAgICAgaWYgKGlucHV0LmVuZHNXaXRoKCfPgCcpIHx8IGlucHV0LmVuZHNXaXRoKCdlJykpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBpdCBkb2VzLCBhZGQgYSAnKicgY2hhcmFjdGVyIHRvIHRoZSBlbmQgdG8gbXVsdGlwbHkgd2l0aCB0aGUgbmV4dCBudW1iZXJcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDAsIC0xKSArICcqJyArIGlucHV0LnNsaWNlKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZUFsbCgvz4AvZywgJzMuMTQxNScpO1xuICAgICAgICAgICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlQWxsKC9lL2csICcyLjcxODInKTtcbiAgICAgICAgICAgIGxldCByZXN1bHRQaWVFdWxlciA9IGV2YWwoaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHRQaWVFdWxlci50b0ZpeGVkKDQpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgaW5wdXQgaW5jbHVkZXMgbG9nXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKCdsb2cnKSkge1xuICAgICAgICAgICAgY29uc3QgbG9nUmVzdWx0ID0gZXZhbHVhdGVMb2coaW5wdXQpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBsb2dSZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbG9nUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBsb2dSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgYW5kIGV2YWx1YXRlIGlmIGlucHV0IGluY2x1ZGVzIGxuXG4gICAgICAgIGVsc2UgaWYgKGlucHV0LmluY2x1ZGVzKCdsbicpKSB7XG4gICAgICAgICAgICBsZXQgbmF0dXJhbExvZ1Jlc3VsdCA9IGV2YWx1YXRlTmF0dXJhbExvZyhpbnB1dCk7XG4gICAgICAgICAgICAvLyB1c2VkIHR5cGUgZ3VhcmRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmF0dXJhbExvZ1Jlc3VsdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBuYXR1cmFsTG9nUmVzdWx0ID0gbmF0dXJhbExvZ1Jlc3VsdC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gbmF0dXJhbExvZ1Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBhbmQgZXZhbHVhdGUgcm9vdFxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pbmNsdWRlcygn4oiaJykpIHtcbiAgICAgICAgICAgIGxldCByb290UmVzdWx0ID0gY2FsY3VsYXRlUm9vdChpbnB1dCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3RSZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcm9vdFJlc3VsdCA9IHJvb3RSZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSByb290UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGV2YWx1YXRlIHRoZSBpbnB1dCB1c2luZyB0aGUgZXZhbCBmdW5jdGlvblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIGlucHV0IGRvZXNuJ3QgaW5jbHVkZSBhbnkgc3BlY2lhbCBmdW5jdGlvbnMsIGV2YWx1YXRlIGV4cHJlc3Npb24gdXNpbmcgZXZhbCgpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cHJSZXN1bHQgPSBldmFsKGlucHV0KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSBleHByUmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgPSAnSW52YWxpZCBpbnB1dCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcbi8vIGZhY3RvcmlhbCBmdW5jdGlvblxuZnVuY3Rpb24gZmFjdG9yaWFsKG51bSkge1xuICAgIGlmICh0eXBlb2YgbnVtICE9PSAnbnVtYmVyJyB8fCBudW0gPCAwIHx8IE1hdGguZmxvb3IobnVtKSAhPT0gbnVtKSB7XG4gICAgICAgIHJldHVybiAnTWFsZm9ybWVkIEV4cHJlc3Npb24nO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gMTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW07IGkrKykge1xuICAgICAgICByZXN1bHQgKj0gaTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBsb2dcbmZ1bmN0aW9uIGV2YWx1YXRlTG9nKGlucHV0KSB7XG4gICAgLy8gc3BsaXQgdGhlIGlucHV0IHZhbHVlIGludG8gdGhlIG51bWJlciBiZWZvcmUgYW5kIGFmdGVyICdsb2cnXG4gICAgY29uc3QgW2Jhc2UsIG51bWJlcl0gPSBpbnB1dC5zcGxpdCgnbG9nJyk7XG4gICAgLy8gY29udmVydCB0aGUgYmFzZSBhbmQgbnVtYmVyIHRvIG51bWJlcnMgdXNpbmcgdGhlIE51bWJlcigpIG1ldGhvZFxuICAgIGNvbnN0IGJhc2VOdW0gPSBOdW1iZXIoYmFzZSkgfHwgMTA7XG4gICAgY29uc3QgbnVtYmVyTnVtID0gTnVtYmVyKG51bWJlcik7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBsb2dhcml0aG0gd2l0aCB0aGUgc3BlY2lmaWVkIGJhc2UgdXNpbmcgdGhlIE1hdGgubG9nKCkgbWV0aG9kIGFuZCBkaXNwbGF5IHRoZSByZXN1bHRcbiAgICBjb25zdCB0ZW1wQW5zd2VyID0gTWF0aC5sb2cobnVtYmVyTnVtKSAvIE1hdGgubG9nKGJhc2VOdW0pO1xuICAgIGNvbnN0IHJlc3VsdExvZyA9IHRlbXBBbnN3ZXIudG9TdHJpbmcoKTtcbiAgICBjb25zdCBkZWNpbWFsSW5kZXggPSByZXN1bHRMb2cuaW5kZXhPZignLicpO1xuICAgIGNvbnN0IG11bHRpcGxpZWROdW0gPSBkZWNpbWFsSW5kZXggPiAwICYmIHJlc3VsdExvZ1tkZWNpbWFsSW5kZXggLSAxXSA9PT0gJzAnXG4gICAgICAgID8gTnVtYmVyKHJlc3VsdExvZylcbiAgICAgICAgOiB0ZW1wQW5zd2VyO1xuICAgIHJldHVybiBtdWx0aXBsaWVkTnVtO1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIE5hdHVyYWwgTG9nXG5mdW5jdGlvbiBldmFsdWF0ZU5hdHVyYWxMb2coaW5wdXQpIHtcbiAgICBjb25zdCBtYXRjaCA9IGlucHV0Lm1hdGNoKC9eKFxcZCopbG4oLispJC8pO1xuICAgIGxldCBjb2VmZmljaWVudCA9IDE7XG4gICAgbGV0IHggPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgIGxldCByZXN1bHROYXR1cmFsTG9nID0gJ0ludmFsaWQgaW5wdXQnO1xuICAgICAgICByZXR1cm4gcmVzdWx0TmF0dXJhbExvZztcbiAgICB9XG4gICAgY29lZmZpY2llbnQgPSBtYXRjaFsxXSA/IHBhcnNlSW50KG1hdGNoWzFdKSA6IDE7XG4gICAgLy8gYWRkIG51bGwgY2hlY2sgYW5kIGRlZmF1bHQgdmFsdWUgb2YgMFxuICAgIHggPSBwYXJzZUZsb2F0KG1hdGNoWzJdIHx8ICcwJyk7XG4gICAgbGV0IHJlc3VsdE5hdHVyYWxMb2cgPSBjb2VmZmljaWVudCAqIE1hdGgubG9nKHgpO1xuICAgIHJldHVybiByZXN1bHROYXR1cmFsTG9nO1xufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZVJvb3QoaW5wdXQpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNwbGl0KCfiiJonKTtcbiAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgY29uc3QgeCA9IHBhcnNlRmxvYXQocGFydHNbMV0gfHwgJzAnKTtcbiAgICBpZiAoaXNOYU4oeCkpIHtcbiAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICB9XG4gICAgZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAvLyBhZGQgbnVsbCBjaGVjayBhbmQgZGVmYXVsdCB2YWx1ZSBvZiAwXG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHBhcnRzWzBdIHx8ICcwJyk7XG4gICAgICAgIGlmIChpc05hTih5KSkge1xuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIGlucHV0JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyh4LCAxIC8geSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBpbnB1dCc7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gdG8gY2FsY3VsYXRlIFNxdWFyZSByb290XG5mdW5jdGlvbiBjYWxjdWxhdGVTcXJ0KGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVTcXJ0ID0gY2FsY3VsYXRlU3FydDtcbi8vIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBjdWJlIHJvb3RcbmZ1bmN0aW9uIGNhbGN1bGF0ZUN1YmVTcXJ0KGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2JydChudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5jYWxjdWxhdGVDdWJlU3FydCA9IGNhbGN1bGF0ZUN1YmVTcXJ0O1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYWJzb2x1dGUgdmFsdWVcbmZ1bmN0aW9uIGdldEFic29sdXRlKGlucHV0KSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG51bSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5leHBvcnRzLmdldEFic29sdXRlID0gZ2V0QWJzb2x1dGU7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSBGbG9vciB2YWx1ZVxuZnVuY3Rpb24gZ2V0Rmxvb3IoaW5wdXQpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGlucHV0KTtcbiAgICBpZiAoaXNOYU4obnVtKSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRGbG9vciA9IGdldEZsb29yO1xuLy8gZnVuY3Rpb24gdG8gZ2VuZXJhdGUgQ2VpbCB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q2VpbChpbnB1dCkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoaW5wdXQpO1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobnVtKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0Q2VpbCA9IGdldENlaWw7XG4vLyBmdW5jdGlvbiB0byBnZXQgcG9zaXRpdmUgb3IgbmVnYXRpdmUgbnVtYmVycyAnKy8tJ1xuLy8gZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxhc3RPcGVyYW5kU2lnbihpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbi8vIFx0Ly8gY29uc3QgbnVtID0gcGFyc2VGbG9hdChpbnB1dCk7XG4vLyBcdC8vIGlmIChpc05hTihudW0pKSB7XG4vLyBcdC8vIFx0cmV0dXJuICcnO1xuLy8gXHQvLyB9XG4vLyBcdC8vIFJlbW92ZSBhbGwgd2hpdGUgc3BhY2VzIGZyb20gdGhlIGlucHV0XG4vLyBcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXFxzL2csICcnKTtcbi8vIFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgb3BlcmF0b3Igb3V0c2lkZSBvZiBicmFja2V0c1xuLy8gXHRsZXQgbGFzdEluZGV4ID0gLTE7XG4vLyBcdGxldCBkZXB0aCA9IDA7IC8vIEtlZXAgdHJhY2sgb2YgYnJhY2tldCBkZXB0aFxuLy8gXHRmb3IgKGxldCBpID0gaW5wdXQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbi8vIFx0XHRjb25zdCBjaGFyID0gaW5wdXRbaV07XG4vLyBcdFx0aWYgKGNoYXIgPT09ICcpJykge1xuLy8gXHRcdFx0ZGVwdGgrKztcbi8vIFx0XHR9IGVsc2UgaWYgKGNoYXIgPT09ICcoJykge1xuLy8gXHRcdFx0ZGVwdGgtLTtcbi8vIFx0XHR9IGVsc2UgaWYgKGRlcHRoID09PSAwICYmIChjaGFyID09PSAnKycgfHwgY2hhciA9PT0gJy0nKSkge1xuLy8gXHRcdFx0bGFzdEluZGV4ID0gaTtcbi8vIFx0XHRcdGJyZWFrO1xuLy8gXHRcdH1cbi8vIFx0fVxuLy8gXHQvLyBJZiBubyBvcGVyYXRvciB3YXMgZm91bmQgYW5kIGlucHV0IGlzIG5vdCBlbXB0eSwgdG9nZ2xlIHRoZSBzaWduIG9mIHRoZSBlbnRpcmUgaW5wdXRcbi8vIFx0aWYgKGxhc3RJbmRleCA9PT0gLTEpIHtcbi8vIFx0XHRpZiAoaW5wdXQuc3RhcnRzV2l0aCgnLScpKSB7XG4vLyBcdFx0XHRyZXR1cm4gaW5wdXQuc3Vic3RyaW5nKDEpO1xuLy8gXHRcdH0gZWxzZSBpZiAoaW5wdXQuc3RhcnRzV2l0aCgnKycpKSB7XG4vLyBcdFx0XHRyZXR1cm4gYC0ke2lucHV0LnN1YnN0cmluZygxKX1gO1xuLy8gXHRcdH0gZWxzZSBpZiAoaW5wdXQgPT09ICcnKSB7XG4vLyBcdFx0XHRyZXR1cm4gJyc7XG4vLyBcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdHJldHVybiBgLSR7aW5wdXR9YDtcbi8vIFx0XHR9XG4vLyBcdH1cbi8vIFx0Ly8gU3BsaXQgdGhlIGlucHV0IGludG8gdGhlIHBhcnRzIGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGxhc3Qgb3BlcmF0b3Jcbi8vIFx0Y29uc3QgbGVmdE9wZXJhbmQgPSBpbnB1dC5zdWJzdHJpbmcoMCwgbGFzdEluZGV4ICsgMSk7XG4vLyBcdGNvbnN0IHJpZ2h0T3BlcmFuZCA9IGlucHV0LnN1YnN0cmluZyhsYXN0SW5kZXggKyAxKTtcbi8vIFx0Ly8gVG9nZ2xlIHRoZSBzaWduIG9mIHRoZSByaWdodCBvcGVyYW5kXG4vLyBcdGlmIChyaWdodE9wZXJhbmQuc3RhcnRzV2l0aCgnLScpKSB7XG4vLyBcdFx0cmV0dXJuIGAke2xlZnRPcGVyYW5kfSR7cmlnaHRPcGVyYW5kLnN1YnN0cmluZygxKX1gO1xuLy8gXHR9IGVsc2UgaWYgKHJpZ2h0T3BlcmFuZC5zdGFydHNXaXRoKCcrJykpIHtcbi8vIFx0XHRyZXR1cm4gYCR7bGVmdE9wZXJhbmR9LSR7cmlnaHRPcGVyYW5kLnN1YnN0cmluZygxKX1gO1xuLy8gXHR9IGVsc2Uge1xuLy8gXHRcdC8vIElmIHRoZSByaWdodCBvcGVyYW5kIGNvbnRhaW5zIGJyYWNrZXRzLCB0b2dnbGUgdGhlIHNpZ24gb2YgdGhlIGxhc3Qgb3BlcmFuZCB3aXRoaW4gdGhlIGJyYWNrZXRzXG4vLyBcdFx0Y29uc3QgcmlnaHRPcGVyYW5kV2l0aFNpZ24gPSB0b2dnbGVMYXN0T3BlcmFuZFNpZ24ocmlnaHRPcGVyYW5kKTtcbi8vIFx0XHRjb25zdCBsYXN0QnJhY2tldEluZGV4ID0gcmlnaHRPcGVyYW5kV2l0aFNpZ24ubGFzdEluZGV4T2YoJyknKTtcbi8vIFx0XHRpZiAobGFzdEJyYWNrZXRJbmRleCA9PT0gLTEpIHtcbi8vIFx0XHRcdHJldHVybiBgJHtsZWZ0T3BlcmFuZH0tJHtyaWdodE9wZXJhbmRXaXRoU2lnbn1gO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRjb25zdCBmaXJzdEJyYWNrZXRJbmRleCA9IHJpZ2h0T3BlcmFuZFdpdGhTaWduLmxhc3RJbmRleE9mKFxuLy8gXHRcdFx0XHQnKCcsXG4vLyBcdFx0XHRcdGxhc3RCcmFja2V0SW5kZXhcbi8vIFx0XHRcdCk7XG4vLyBcdFx0XHRjb25zdCBvcGVyYW5kQWZ0ZXJCcmFja2V0ID0gcmlnaHRPcGVyYW5kV2l0aFNpZ24uc3Vic3RyaW5nKFxuLy8gXHRcdFx0XHRsYXN0QnJhY2tldEluZGV4ICsgMVxuLy8gXHRcdFx0KTtcbi8vIFx0XHRcdGNvbnN0IG9wZXJhbmRCZWZvcmVCcmFja2V0ID0gcmlnaHRPcGVyYW5kV2l0aFNpZ24uc3Vic3RyaW5nKFxuLy8gXHRcdFx0XHRmaXJzdEJyYWNrZXRJbmRleCArIDEsXG4vLyBcdFx0XHRcdGxhc3RCcmFja2V0SW5kZXhcbi8vIFx0XHRcdCk7XG4vLyBcdFx0XHRyZXR1cm4gYCR7bGVmdE9wZXJhbmR9JHtyaWdodE9wZXJhbmRXaXRoU2lnbi5zdWJzdHJpbmcoXG4vLyBcdFx0XHRcdDAsXG4vLyBcdFx0XHRcdGZpcnN0QnJhY2tldEluZGV4ICsgMVxuLy8gXHRcdFx0KX0ke3RvZ2dsZUxhc3RPcGVyYW5kU2lnbihvcGVyYW5kQmVmb3JlQnJhY2tldCl9JHtvcGVyYW5kQWZ0ZXJCcmFja2V0fWA7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9XG5mdW5jdGlvbiB0b2dnbGVMYXN0T3BlcmFuZFNpZ24oaW5wdXQpIHtcbiAgICBsZXQgbnVtUmVnZXggPSAvWy1dP1xcZCsvZztcbiAgICBsZXQgbnVtcyA9IGlucHV0Lm1hdGNoKG51bVJlZ2V4KTtcbiAgICBpZiAobnVtcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBuZXdTdHJpbmcgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG51bSA9IHBhcnNlSW50KG51bXNbaV0gfHwgJycpO1xuICAgICAgICBpZiAoaSA9PT0gbnVtcy5sZW5ndGggLSAxICYmIG51bSA+IDApIHtcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBgLSR7bnVtfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA9PT0gbnVtcy5sZW5ndGggLSAxICYmIG51bSA8IDApIHtcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBgJHtudW0gKiAtMX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3U3RyaW5nICs9IGAke251bX1gO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcFJlZ2V4ID0gL1stKy8qXS9nO1xuICAgICAgICBsZXQgb3BNYXRjaCA9IG9wUmVnZXguZXhlYyhpbnB1dCk7XG4gICAgICAgIHdoaWxlIChvcE1hdGNoICE9PSBudWxsICYmXG4gICAgICAgICAgICBvcE1hdGNoLmluZGV4IDwgaW5wdXQuaW5kZXhPZihudW1zW2kgKyAxXSB8fCAnJykpIHtcbiAgICAgICAgICAgIG5ld1N0cmluZyArPSBgJHtvcE1hdGNoWzBdfWA7XG4gICAgICAgICAgICBvcE1hdGNoID0gb3BSZWdleC5leGVjKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3U3RyaW5nO1xufVxuZXhwb3J0cy50b2dnbGVMYXN0T3BlcmFuZFNpZ24gPSB0b2dnbGVMYXN0T3BlcmFuZFNpZ247XG4vLyBjaGVjayB3aGljaCB1bml0IG9mIGFuZ2xlIGlzIHNlbGVjdGVkIGJ5IHVzZXJcbmxldCB1bml0T2ZBbmdsZSA9ICdERUcnO1xuY29uc3QgYnV0dG9uT2ZVbml0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZycpO1xuYnV0dG9uT2ZVbml0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHVuaXRPZkFuZ2xlID0gdW5pdE9mQW5nbGUgPT09ICdERUcnID8gJ1JBRCcgOiAnREVHJztcbiAgICBidXR0b25PZlVuaXQuaW5uZXJIVE1MID0gdW5pdE9mQW5nbGU7XG59KTtcbi8vIGNvbW1vbiBmdW5jdGlvbiB0byBjYWxjdWxhdGUgYWxsIFRyaWdvbm9tZXRyeSBmdW5jdGlvbnNcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKTtcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgdHJpZ0Z1bmMpIHtcbiAgICBpZiAodW5pdE9mQW5nbGUgPT09ICdSQUQnKSB7XG4gICAgICAgIGxldCByYWRpYW5zID0gcGFyc2VGbG9hdChpbnB1dCk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHRyaWdGdW5jKHJhZGlhbnMpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVuaXRPZkFuZ2xlID09PSAnREVHJykge1xuICAgICAgICBsZXQgZGVncmVlID0gcGFyc2VGbG9hdChpbnB1dCkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IHRyaWdGdW5jKGRlZ3JlZSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IHNpbmUgdmFsdWVcbmZ1bmN0aW9uIGdldFNpbmUoaW5wdXQpIHtcbiAgICBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGguc2luKTtcbn1cbmV4cG9ydHMuZ2V0U2luZSA9IGdldFNpbmU7XG4vLyBmdW5jdGlvbiBmb3IgZ2V0IGNvcyB2YWx1ZVxuZnVuY3Rpb24gZ2V0Q29zKGlucHV0KSB7XG4gICAgY2FsY3VsYXRlVHJpZ1ZhbHVlKGlucHV0LCBNYXRoLmNvcyk7XG59XG5leHBvcnRzLmdldENvcyA9IGdldENvcztcbi8vIGZ1bmN0aW9uIGZvciBnZXQgdGFuIHZhbHVlXG5mdW5jdGlvbiBnZXRUYW4oaW5wdXQpIHtcbiAgICBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIE1hdGgudGFuKTtcbn1cbmV4cG9ydHMuZ2V0VGFuID0gZ2V0VGFuO1xuLy8gZnVuY3Rpb24gZm9yIGdldCBzZWMgdmFsdWVcbmZ1bmN0aW9uIGdldFNlYyhpbnB1dCkge1xuICAgIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLmNvcyhyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldFNlYyA9IGdldFNlYztcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY29zZWMgdmFsdWVcbmZ1bmN0aW9uIGdldENzYyhpbnB1dCkge1xuICAgIGNhbGN1bGF0ZVRyaWdWYWx1ZShpbnB1dCwgKHJhZGlhbnMpID0+IDEgLyBNYXRoLnNpbihyYWRpYW5zKSk7XG59XG5leHBvcnRzLmdldENzYyA9IGdldENzYztcbi8vIGZ1bmN0aW9uIGZvciBnZXQgY290IHZhbHVlXG5mdW5jdGlvbiBnZXRDb3QoaW5wdXQpIHtcbiAgICBjYWxjdWxhdGVUcmlnVmFsdWUoaW5wdXQsIChyYWRpYW5zKSA9PiAxIC8gTWF0aC50YW4ocmFkaWFucykpO1xufVxuZXhwb3J0cy5nZXRDb3QgPSBnZXRDb3Q7XG4vLyBmdW5jdGlvbiB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuZnVuY3Rpb24gZ2V0UmFuZChpbnB1dCkge1xuICAgIGlucHV0LnZhbHVlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xufVxuZXhwb3J0cy5nZXRSYW5kID0gZ2V0UmFuZDtcbi8vIGZ1bmN0aW9uIHRvIGdldCBkZWdyZWVcbmZ1bmN0aW9uIGdldERlZyhpbnB1dCkge1xuICAgIGlmICh1bml0T2ZBbmdsZSA9PT0gJ1JBRCcpIHtcbiAgICAgICAgbGV0IGRlZyA9IE51bWJlcihpbnB1dCkgKiAoMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGRlZy50b1N0cmluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gKE51bWJlcihyZXN1bHQudmFsdWUpIC8gMC4wMTQ3KS50b1N0cmluZygpO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RGVnID0gZ2V0RGVnO1xuLy8gZnVuY3Rpb24gdG8gZ2V0IERlZ3JlZSB0byBETVNcbmZ1bmN0aW9uIGdldERlZ3JlZXNUb0RNUyhpbnB1dCkge1xuICAgIGlmICh1bml0T2ZBbmdsZSA9PT0gJ0RFRycpIHtcbiAgICAgICAgbGV0IGQgPSBNYXRoLmZsb29yKE51bWJlcihpbnB1dCkpO1xuICAgICAgICBsZXQgbSA9IE1hdGguZmxvb3IoKE51bWJlcihpbnB1dCkgLSBkKSAqIDYwKTtcbiAgICAgICAgbGV0IHMgPSAoKE51bWJlcihpbnB1dCkgLSBkIC0gbSAvIDYwKSAqIDM2MDApLnRvRml4ZWQoMik7XG4gICAgICAgIGlmIChzID09ICc2MCcpIHtcbiAgICAgICAgICAgIG0rKztcbiAgICAgICAgICAgIHMgPSAnMCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG0gPT0gNjApIHtcbiAgICAgICAgICAgIGQrKztcbiAgICAgICAgICAgIG0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC52YWx1ZSA9IGAke2R9wrAgJHttfScgJHtzfVwiYDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IERFRyBvcHRpb24gZmlyc3QnKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gJyc7XG4gICAgfVxufVxuZXhwb3J0cy5nZXREZWdyZWVzVG9ETVMgPSBnZXREZWdyZWVzVG9ETVM7XG4vLyBmdW5jdGlvbiB0byBnZXQgZml4ZWQgdG8gZXhwb25lbnRcbmZ1bmN0aW9uIGdldEZlKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09ICcnIHx8IGlucHV0ID09ICcwJykge1xuICAgICAgICBpbnB1dCA9ICcwJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlucHV0ID0gYCR7aW5wdXR9ZSswYDtcbiAgICB9XG4gICAgcmVzdWx0LnZhbHVlID0gaW5wdXQ7XG59XG5leHBvcnRzLmdldEZlID0gZ2V0RmU7XG4vLyBmdW5jdGlvbiB0byBzdG9yZSBtZW1vcnlcbmZ1bmN0aW9uIG1lbW9yeVN0b3JlKGlucHV0KSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVNob3cnKS5pbm5lckhUTUwgPSBpbnB1dC52YWx1ZSB8fCAnMCc7XG59XG5leHBvcnRzLm1lbW9yeVN0b3JlID0gbWVtb3J5U3RvcmU7XG4vLyBmdW5jdGlvbiB0byBjbGVhciBtZW1vcnlcbmZ1bmN0aW9uIG1lbW9yeUNsZWFyKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlTaG93JykuaW5uZXJIVE1MID0gJycgfHwgJzAnO1xufVxuZXhwb3J0cy5tZW1vcnlDbGVhciA9IG1lbW9yeUNsZWFyO1xuZnVuY3Rpb24gZ2V0TWVtb3J5VmFsdWUoKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlTaG93JykuaW5uZXJIVE1MKTtcbn1cbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgYWRkaXRpb25cbmZ1bmN0aW9uIG1lbW9yeUFkZGl0aW9uKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSAoZ2V0TWVtb3J5VmFsdWUoKSArIHBhcnNlSW50KGlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMubWVtb3J5QWRkaXRpb24gPSBtZW1vcnlBZGRpdGlvbjtcbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgc3VidHJhY3Rpb25cbmZ1bmN0aW9uIG1lbW9yeVN1YnRyYWN0aW9uKGlucHV0KSB7XG4gICAgaW5wdXQudmFsdWUgPSAoZ2V0TWVtb3J5VmFsdWUoKSAtIHBhcnNlSW50KGlucHV0LnZhbHVlKSkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMubWVtb3J5U3VidHJhY3Rpb24gPSBtZW1vcnlTdWJ0cmFjdGlvbjtcbi8vIGZ1bmN0aW9uIGZvciBtZW1vcnkgcmVjYWxsXG5mdW5jdGlvbiBtZW1vcnlSZWNhbGwoaW5wdXQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlTaG93JykuaW5uZXJIVE1MO1xufVxuZXhwb3J0cy5tZW1vcnlSZWNhbGwgPSBtZW1vcnlSZWNhbGw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iLCBfYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlscy91dGlsc1wiKTtcbi8vIHRvZ2dsZSBidXR0b25cbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYnV0dG9uJyk7XG5jb25zdCBidXR0b25zMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24xJyk7XG5jb25zdCBidXR0b25zMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24yJyk7XG4vLyB0b2dnbGUgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uczEuZm9yRWFjaCgoYnV0dG9uMSkgPT4ge1xuICAgICAgICBidXR0b24xLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnMyLmZvckVhY2goKGJ1dHRvbjIpID0+IHtcbiAgICAgICAgYnV0dG9uMi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICB9KTtcbn0pO1xuLy8gc2hvdyBkcm9wZG93biBtZW51IG9uIFRyaWdvbmltZXRyeSBidXR0b24gY2xpY2tcbmNvbnN0IGRyb3BidG5UcmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duQnRuVHJpZycpO1xuY29uc3QgZHJvcGRvd25Db250ZW50VHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteURyb3Bkb3duVHJpZycpO1xuLy8gc2hvdyBkcm9wZG93biBtZW51IG9uIEZ1bmN0aW9uIGJ1dHRvbiBjbGlja1xuY29uc3QgZHJvcGJ0bkZ1bmMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd25CdG5GdW5jJyk7XG5jb25zdCBkcm9wZG93bkNvbnRlbnRGdW5jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RHJvcGRvd25GdW5jJyk7XG5pZiAoZHJvcGJ0blRyaWcgJiYgZHJvcGRvd25Db250ZW50VHJpZykge1xuICAgIGRyb3BidG5UcmlnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkcm9wZG93bkNvbnRlbnRUcmlnLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnYmxvY2snIDogJ25vbmUnO1xuICAgIH0pO1xuICAgIGlmIChkcm9wYnRuRnVuYyAmJiBkcm9wZG93bkNvbnRlbnRGdW5jKSB7XG4gICAgICAgIGRyb3BidG5GdW5jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50RnVuYy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnRGdW5jLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYm90aCBkcm9wZG93biwgZGlzcGxheSBub25lIHdoZW4gdXNlciBjbGlja3Mgb3V0c2lkZSBkcm9wZG93biBidXR0b25zXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRyb3BidG5UcmlnLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgICAgICAgICAhZHJvcGRvd25Db250ZW50VHJpZy5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50VHJpZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkcm9wYnRuRnVuYy5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgIWRyb3Bkb3duQ29udGVudEZ1bmMuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudEZ1bmMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuY29uc3QgYXJyID0gW1xuICAgICcwJyxcbiAgICAnMScsXG4gICAgJzInLFxuICAgICczJyxcbiAgICAnNCcsXG4gICAgJzUnLFxuICAgICc2JyxcbiAgICAnNycsXG4gICAgJzgnLFxuICAgICc5JyxcbiAgICAnKycsXG4gICAgJy0nLFxuICAgICcvJyxcbiAgICAnKicsXG4gICAgJyUnLFxuICAgICcoJyxcbiAgICAnKScsXG4gICAgJy4nLFxuICAgICfPgCcsXG4gICAgJ2UnLFxuICAgICchJyxcbl07XG4vLyBkaXNwbGF5IGtleWJvYXJkIGtleSBvbiBzY3JlZW4gd2hlbiBrZXlib2FyZCBudW1iZXJzIG9yIG9wZXJhdG9ycyBjbGlja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBpZiAoYXJyLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xuICAgICAgICByZXN1bHQudmFsdWUgKz0gZXZlbnQua2V5O1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnPScpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmNhbGN1bGF0ZSkocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSAnTWFsZm9ybWVkIEV4cHJlc3Npb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKTtcbiAgICAgICAgcmVzdWx0LnZhbHVlID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIC0xKTtcbiAgICB9XG4gICAgLy8gcHJldmVudCBmcm9tIEVudGVyIGtleSBwcmVzc2luZ1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcbi8vIEdldCBhbGwgdGhlIG51bWJlciBidXR0b25zXG5sZXQgbnVtYmVyQnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhbGNCdG4nKTtcbi8vIEFkZCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG5mb3IgKGxldCBpID0gMDsgaSA8IG51bWJlckJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBudW1iZXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBjbGlja2VkIGJ1dHRvblxuICAgICAgICBjb25zdCBidXR0b25WYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxuICAgICAgICAgICAgLnZhbHVlO1xuICAgICAgICAvLyBBZGQgdGhlIGJ1dHRvbiB2YWx1ZSB0byB0aGUgaW5wdXQgZmllbGRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlID1cbiAgICAgICAgICAgIHJlc3VsdCArIGJ1dHRvblZhbHVlO1xuICAgIH0pO1xufVxuLy8gdG8gZ2V0IHJlc3VsdCBvbiBzY3JlZW4gd2hlbiBlcXVhbCBidXR0b24gcHJlc3NlZCBieSB1c2VyXG5jb25zdCBlcXVhbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmFsJyk7XG5pZiAoZXF1YWxCdG4pIHtcbiAgICBlcXVhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKVxuICAgICAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgICAgICgwLCB1dGlsc18xLmNhbGN1bGF0ZSkocmVzdWx0KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykudmFsdWUgPVxuICAgICAgICAgICAgICAgICdNYWxmb3JtZWQgRXhwcmVzc2lvbic7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHR3byBwb3dlciB4XG5jb25zdCB0d29Qb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R3b19wb3dlcl9YJyk7XG50d29Qb3d4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMioqJHt1c2VySXB9YDtcbiAgICByZXN1bHQudmFsdWUgPSBvdXRwdXQ7XG59KTtcbi8vIGV2ZW50IGxpc3RlbmVyIHRvIHNvbHZlIHRlbiBwb3dlciB4XG5jb25zdCB0ZW5Qb3d4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlbl9wb3dlcl94Jyk7XG50ZW5Qb3d4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHVzZXJJcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS52YWx1ZTtcbiAgICBjb25zdCBvdXRwdXQgPSBgMTAqKiR7dXNlcklwfWA7XG4gICAgcmVzdWx0LnZhbHVlID0gb3V0cHV0O1xufSk7XG4vLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gc29sdmUgc3F1YXJlIHJvb3Qgb2YgeFxuY29uc3Qgcm9vdFhidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdF94Jyk7XG5yb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuY2FsY3VsYXRlU3FydCkodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBldmVudCBsaXN0ZW5lciB0byBzb2x2ZSBjdWJlIHJvb3Qgb2YgeFxuY29uc3QgdGhyZWVSb290WGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdWJlX3Jvb3RfeCcpO1xudGhyZWVSb290WGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuY2FsY3VsYXRlQ3ViZVNxcnQpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBhYnNvbHV0ZVxuKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3hfYWJzJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4gICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gKDAsIHV0aWxzXzEuZ2V0QWJzb2x1dGUpKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBmbG9vclxuKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3hfZmxvb3InKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRGbG9vcikodXNlcklucHV0KTtcbiAgICByZXN1bHQudmFsdWUgPSBjYWxjdWxhdGVkVmFsdWU7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIGNlaWxcbihfYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4X2NlaWwnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMS5nZXRDZWlsKSh1c2VySW5wdXQpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgcm91bmRcbmNvbnN0IHJvdW5keCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4X3JvdW5kJyk7XG5yb3VuZHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgdXNlcklucHV0ID0gcmVzdWx0LnZhbHVlO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQocGFyc2VGbG9hdCh1c2VySW5wdXQpKS50b1N0cmluZygpO1xuICAgIHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgJysvLSdcbi8vIGNvbnN0IFBsdXNieU1pbnVzOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4vLyBcdCcjYWRkaXRpb25fYnlfc3VidHJhY3Rpb24nXG4vLyApITtcbi8vIFBsdXNieU1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gXHRjb25zdCB1c2VySW5wdXQgPSByZXN1bHQudmFsdWU7XG4vLyBcdGNvbnN0IGNhbGN1bGF0ZWRWYWx1ZSA9IGdldFBsdXNieU1pbnVzKHVzZXJJbnB1dCk7XG4vLyBcdHJlc3VsdC52YWx1ZSA9IGNhbGN1bGF0ZWRWYWx1ZTtcbi8vIH0pO1xuY29uc3QgdXRpbHNfMiA9IHJlcXVpcmUoXCIuL3V0aWxzL3V0aWxzXCIpO1xuY29uc3QgUGx1c2J5TWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkaXRpb25fYnlfc3VidHJhY3Rpb24nKTtcblBsdXNieU1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IHJlc3VsdC52YWx1ZTtcbiAgICBjb25zdCBjYWxjdWxhdGVkVmFsdWUgPSAoMCwgdXRpbHNfMi50b2dnbGVMYXN0T3BlcmFuZFNpZ24pKHVzZXJJbnB1dCk7XG4gICAgcmVzdWx0LnZhbHVlID0gY2FsY3VsYXRlZFZhbHVlO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBzaW5cbmNvbnN0IHNpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW4nKTtcbnNpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRTaW5lKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NcbmNvbnN0IGNvc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3MnKTtcbmNvc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXRDb3MpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIHNvbHZlIHRhblxuY29uc3QgdGFuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhbicpO1xudGFuQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFRhbikocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgc2VjXG5jb25zdCBzZWNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjJyk7XG5zZWNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0U2VjKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBzb2x2ZSBjb3NlY1xuY29uc3QgY3NjQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzYycpO1xuY3NjQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldENzYykocmVzdWx0LnZhbHVlKTtcbn0pO1xuLy8gYWRkIEV2ZW50bGlzdGVuZXIgdG8gc29sdmUgY290XG5jb25zdCBjb3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY290Jyk7XG5jb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEuZ2V0Q290KShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBhZGQgRXZlbnRsaXN0ZW5lciB0byBnZW5lcmF0ZSByYW5kb20gbnVtYmVyc1xuY29uc3QgcmFuZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kJyk7XG5yYW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldFJhbmQpKHJlc3VsdCk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIHRvIGdldCBkZWdyZWVcbmNvbnN0IGRlZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EZWcnKTtcbmRlZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXREZWcpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudGxpc3RlbmVyIGZvciBkbXNcbmNvbnN0IGRtc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkbXMnKTtcbmRtc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5nZXREZWdyZWVzVG9ETVMpKHJlc3VsdC52YWx1ZSk7XG59KTtcbi8vIGFkZCBFdmVudExpc3RlbmVyIGZvciBmLWVcbmNvbnN0IGZpeGVkdG9FeHBvbmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZScpO1xuZml4ZWR0b0V4cG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLmdldEZlKShyZXN1bHQudmFsdWUpO1xufSk7XG4vLyBNZW1vcnkgYnV0dG9ucyBFdmVudGxpc3RlbmVyXG4vLyBNZW1vcnkgc3RvcmUgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeVN0b3JlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVN0b3JlJyk7XG5tZW1vcnlTdG9yZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9ICcnKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlDbGVhcicpLmRpc2FibGVkID1cbiAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5UmVjYWxsJykuZGlzYWJsZWQgPVxuICAgICAgICAgICAgZmFsc2U7XG4gICAgfVxuICAgICgwLCB1dGlsc18xLm1lbW9yeVN0b3JlKShyZXN1bHQpO1xufSk7XG4vLyBNZW1vcnkgY2xlYXIgZnVuY3Rpb25hbGl0eVxubGV0IG1lbW9yeUNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbW9yeUNsZWFyJyk7XG5tZW1vcnlDbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVtb3J5Q2xlYXInKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVJlY2FsbCcpLmRpc2FibGVkID1cbiAgICAgICAgdHJ1ZTtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlDbGVhcikoKTtcbn0pO1xuLy8gTWVtb3J5IHJlY2FsbCBmdW5jdGlvbmFsaXR5XG5sZXQgbWVtb3J5UmVjYWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbW9yeVJlY2FsbCcpO1xubWVtb3J5UmVjYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICgwLCB1dGlsc18xLm1lbW9yeVJlY2FsbCkocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IGFkZGl0aW9uIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlBZGRpdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlQbHVzJyk7XG5tZW1vcnlBZGRpdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAoMCwgdXRpbHNfMS5tZW1vcnlBZGRpdGlvbikocmVzdWx0KTtcbn0pO1xuLy8gTWVtb3J5IHN1YnRyYWN0aW9uIGZ1bmN0aW9uYWxpdHlcbmxldCBtZW1vcnlTdWJ0cmFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW1vcnlNaW51cycpO1xubWVtb3J5U3VidHJhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgKDAsIHV0aWxzXzEubWVtb3J5U3VidHJhY3Rpb24pKHJlc3VsdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==