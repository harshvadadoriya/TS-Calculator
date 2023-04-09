// function to calculate factorial and normal calculation
export function calculate(input: string): void {
	let result: HTMLInputElement | null = document.querySelector('#result');
	if (result) {
		// check if the input includes the "!" symbol then perform factorial function
		if (input.includes('!')) {
			const num: number = parseInt(input.slice(0, -1));
			// need for the type guard on resultFact, since we are immediately converting it to a string using the toString() method
			const resultFact = factorial(num).toString();
			// assign the calculated factorial value back to the input field
			const resultElem: HTMLInputElement | null =
				document.querySelector('#result');
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
			let resultPieEuler: number = eval(input);
			if (result) result.value = resultPieEuler.toFixed(4).toString();
		}
		// check if input includes log
		else if (input.includes('log')) {
			const logResult = evaluateLog(input);

			if (typeof logResult === 'number') {
				result.value = logResult.toString();
			} else {
				result.value = logResult;
			}
		}

		// check and evaluate if input includes ln
		else if (input.includes('ln')) {
			let naturalLogResult: number | string = evaluateNaturalLog(input);
			// used type guard
			if (typeof naturalLogResult === 'number') {
				naturalLogResult = naturalLogResult.toString();
			}
			result.value = naturalLogResult;
		}
		// check and evaluate root
		else if (input.includes('√')) {
			let rootResult: number | string = calculateRoot(input);
			if (typeof rootResult === 'number') {
				rootResult = rootResult.toString();
				result.value = rootResult;
			}
		}
		// evaluate the input using the eval function
		else {
			// if input doesn't include any special functions, evaluate expression using eval()
			try {
				const exprResult: number = eval(input);
				result.value = exprResult.toString();
			} catch {
				result.value = 'Invalid input';
			}
		}
	}
}

// factorial function
function factorial(num: number): number | string {
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
function evaluateLog(input: string): number | string {
	// split the input value into the number before and after 'log'
	const [base, number] = input.split('log');

	// convert the base and number to numbers using the Number() method
	const baseNum = Number(base) || 10;
	const numberNum = Number(number);

	// calculate the logarithm with the specified base using the Math.log() method and display the result
	const tempAnswer = Math.log(numberNum) / Math.log(baseNum);
	const resultLog = tempAnswer.toString();
	const decimalIndex = resultLog.indexOf('.');
	const multipliedNum =
		decimalIndex > 0 && resultLog[decimalIndex - 1] === '0'
			? Number(resultLog)
			: tempAnswer;
	return multipliedNum;
}

// function to calculate Natural Log
function evaluateNaturalLog(input: string): number | string {
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
function calculateRoot(input: string): number | string {
	const parts: string[] = input.split('√');
	// add null check and default value of 0
	const x: number = parseFloat(parts[1] || '0');

	if (isNaN(x)) {
		return 'Invalid input';
	} else if (parts.length === 1) {
		return Math.sqrt(x);
	} else if (parts.length === 2) {
		// add null check and default value of 0
		const y: number = parseFloat(parts[0] || '0');
		if (isNaN(y)) {
			return 'Invalid input';
		} else {
			return Math.pow(x, 1 / y);
		}
	} else {
		return 'Invalid input';
	}
}

// function to calculate Square root
export function calculateSqrt(input: string): string {
	const num = parseFloat(input);
	if (isNaN(num)) {
		return '';
	} else {
		return Math.sqrt(num).toString();
	}
}

// function to calculate cube root
export function calculateCubeSqrt(input: string): string {
	const num = parseFloat(input);
	if (isNaN(num)) {
		return '';
	} else {
		return Math.cbrt(num).toString();
	}
}

// function to generate absolute value
export function getAbsolute(input: string): string {
	const num = parseFloat(input);
	if (isNaN(num)) {
		return '';
	} else {
		return Math.abs(num).toString();
	}
}

// function to generate Floor value
export function getFloor(input: string): string {
	const num = parseFloat(input);
	if (isNaN(num)) {
		return '';
	} else {
		return Math.floor(num).toString();
	}
}

// function to generate Ceil value
export function getCeil(input: string): string {
	const num = parseFloat(input);
	if (isNaN(num)) {
		return '';
	} else {
		return Math.ceil(num).toString();
	}
}

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
export function toggleLastOperandSign(input: string): string {
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
		} else if (i === nums.length - 1 && num < 0) {
			newString += `${num * -1}`;
		} else {
			newString += `${num}`;
		}
		let opRegex = /[-+/*]/g;
		let opMatch = opRegex.exec(input);
		while (
			opMatch !== null &&
			opMatch.index < input.indexOf(nums[i + 1] || '')
		) {
			newString += `${opMatch[0]}`;
			opMatch = opRegex.exec(input);
		}
	}
	return newString;
}

// check which unit of angle is selected by user
let unitOfAngle: string = 'DEG';
const buttonOfUnit = document.getElementById('deg')!;
buttonOfUnit.addEventListener('click', () => {
	unitOfAngle = unitOfAngle === 'DEG' ? 'RAD' : 'DEG';
	buttonOfUnit.innerHTML = unitOfAngle;
});

// common function to calculate all Trigonometry functions
const result: HTMLInputElement = document.querySelector('#result')!;
function calculateTrigValue(input: string, trigFunc: (x: number) => number) {
	if (unitOfAngle === 'RAD') {
		let radians = parseFloat(input);
		result.value = trigFunc(radians).toString();
	} else if (unitOfAngle === 'DEG') {
		let degree = parseFloat(input) * (Math.PI / 180);
		result.value = trigFunc(degree).toString();
	}
}

// function for get sine value
export function getSine(input: string) {
	calculateTrigValue(input, Math.sin);
}

// function for get cos value
export function getCos(input: string) {
	calculateTrigValue(input, Math.cos);
}

// function for get tan value
export function getTan(input: string) {
	calculateTrigValue(input, Math.tan);
}

// function for get sec value
export function getSec(input: string) {
	calculateTrigValue(input, (radians) => 1 / Math.cos(radians));
}

// function for get cosec value
export function getCsc(input: string) {
	calculateTrigValue(input, (radians) => 1 / Math.sin(radians));
}

// function for get cot value
export function getCot(input: string) {
	calculateTrigValue(input, (radians) => 1 / Math.tan(radians));
}

// function to generate random numbers
export function getRand(input: HTMLInputElement) {
	input.value = Math.random().toString();
}

// function to get degree
export function getDeg(input: string) {
	if (unitOfAngle === 'RAD') {
		let deg = Number(input) * (180 / Math.PI);
		result.value = deg.toString();
	} else {
		result.value = (Number(result.value) / 0.0147).toString();
	}
}

// function to get Degree to DMS
export function getDegreesToDMS(input: string) {
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
	} else {
		alert('Please select DEG option first');
		result.value = '';
	}
}

// function to get fixed to exponent
export function getFe(input: string) {
	if (input == '' || input == '0') {
		input = '0';
	} else {
		input = `${input}e+0`;
	}
	result.value = input;
}

// function to store memory
export function memoryStore(input: HTMLInputElement) {
	document.getElementById('memoryShow')!.innerHTML = input.value || '0';
}

// function to clear memory
export function memoryClear() {
	document.getElementById('memoryShow')!.innerHTML = '' || '0';
}

function getMemoryValue() {
	return parseInt(document.getElementById('memoryShow')!.innerHTML);
}

// function for memory addition
export function memoryAddition(input: HTMLInputElement) {
	input.value = (getMemoryValue() + parseInt(input.value)).toString();
}

// function for memory subtraction
export function memorySubtraction(input: HTMLInputElement) {
	input.value = (getMemoryValue() - parseInt(input.value)).toString();
}

// function for memory recall
export function memoryRecall(input: HTMLInputElement) {
	input.value = document.getElementById('memoryShow')!.innerHTML;
}
