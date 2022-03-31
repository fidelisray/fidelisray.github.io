'use strict';

// Fidelis Raymond Jose Airudin
// 149173029100-1273

const calcScreen = document.querySelector('.calculator-screen');
const numberButtons = document.getElementsByClassName('number');
const operationButtons = document.getElementsByClassName('operator');
const decimal = document.getElementsByClassName('decimal')[0];
const percentage = document.getElementsByClassName('percentage')[0];
const equalsButton = document.querySelector('.equal-sign');
const allClearButton = document.querySelector('.all-clear');

calcScreen.disabled = true;

let previousNumber;
let currentNumber;
let calculationOperator;


const defaultCondition = function () {
  calcScreen.value = 0;
  previousNumber = '0';
  currentNumber = '';
  calculationOperator = undefined;
}


const inputNumber = function (number) {
  // console.log(`Previous Number: ${previousNumber}`);
  // console.log(`Current Number: ${currentNumber}`);
  currentNumber += number;
  // console.log(`Current Number: ${currentNumber}`);
  // console.log('');
}

const inputOperator = function (operator) {
  if (calculationOperator === undefined) {
    previousNumber = currentNumber;
    calculationOperator = operator;
    currentNumber = '';
    // console.log(`Previous Number: ${previousNumber}`);
    // console.log(`Calculation Op: ${calculationOperator}`);
    // console.log(`Current Number: ${currentNumber}`);
  } else if (calculationOperator === '%' && operator !== '%') {
    // previousNumber = currentNumber;
    calculationOperator += operator;
    currentNumber = '';
    // console.log(`Previous Number: ${previousNumber}`);
    // console.log(`Calculation Op: ${calculationOperator}`);
    // console.log(`Current Number: ${currentNumber}`);
  } else {
    alert(`Anda sudah menekan tombol ${calculationOperator} sebelumnya..`);
  }
}

const inputDecimal = function (dot) {
  currentNumber += dot;
}

const tampilLayar = function (number) {
  // currentNumber = number;
  // if (currentNumber !== ) {
  //   previousNumber += currentNumber;
  // }

  calcScreen.value = number
}

const tambah = function (prevNumber, currNumber) {
  return prevNumber + currNumber;
};

const kurang = function (prevNumber, currNumber) {
  return prevNumber - currNumber;
};
const bagi = function (prevNumber, currNumber) {
  return prevNumber / currNumber;
};
const kali = function (prevNumber, currNumber) {
  return prevNumber * currNumber;
};
const persen = function (prevNumber) {
  // if (prevNumber !== 0) {
  //   return (prevNumber / 100) currNumber;
  // }
  return prevNumber * 1 / 100;
};

const hitung = function () {
  switch (calculationOperator) {
    case '+':
      tampilLayar(tambah(Number(previousNumber), Number(currentNumber)));
      break;
    case '-':
      tampilLayar(kurang(Number(previousNumber), Number(currentNumber)));
      break;
    case '/':
      tampilLayar(bagi(Number(previousNumber), Number(currentNumber)));
      break;
    case '*':
      tampilLayar(kali(Number(previousNumber), Number(currentNumber)));
      break;
    case '%':
      tampilLayar(persen(Number(previousNumber)));
      break;
    case '%+':
      tampilLayar(persen(Number(previousNumber)) + Number(currentNumber));
      break;
    case '%-':
      tampilLayar(persen(Number(previousNumber)) - Number(currentNumber));
      break;
    case '%*':
      tampilLayar(persen(Number(previousNumber)) * Number(currentNumber));
      break;
    case '%/':
      tampilLayar(persen(Number(previousNumber)) / Number(currentNumber));
      break;
    default:
      break;
  }

}

// set to default
defaultCondition();


for(let number of numberButtons) {
  // console.log(number);
  number.addEventListener('click', function () {
    // console.log(number.value);
    // tampilLayar(number.value);

    inputNumber(number.value);
    tampilLayar(currentNumber);

    // console.log(typeof currentNumber);
  });
}

for(let operator of operationButtons) {
  // console.log(operator);
  operator.addEventListener('click', function () {
    // console.log(operator.value);

    inputOperator(operator.value);
  });
}

equalsButton.addEventListener('click', function () {
  if(calculationOperator !== undefined) {
    hitung();
  } else {
    alert(`Silahkan pilih operasi yang ingin anda laukan`);
  }
});

percentage.addEventListener('click', function () {
  inputOperator(percentage.value);
})

decimal.addEventListener('click', function () {
  inputDecimal(decimal.value);
});

allClearButton.addEventListener('click', defaultCondition);
