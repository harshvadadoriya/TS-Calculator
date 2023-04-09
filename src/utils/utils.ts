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
export function calculateSqrt(input: number): string {
	if (isNaN(input)) {
		return '';
	} else {
		return Math.sqrt(input).toString();
	}
}

// function to calculate cube root
export function calculateCubeSqrt(input: number): string {
	if (isNaN(input)) {
		return '';
	} else {
		return Math.cbrt(input).toString();
	}
}
