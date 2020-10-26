// ________________________1,2,3,4,5,10_____________________________
document.getElementById('button').onclick = showInputValue;
let inputEl = document.getElementById('input');

function showInputValue() {
    if (inputEl.value === 'google') {
        setTimeout(() => alert('Yandex круче. Но это не точно'), 3000);
        alert(arrObjects[0].name);

    } else {
        setTimeout(() => alert(inputEl.value), 3000);
        alert(arrObjects[0].name);
    }
}

// ___________________________5_____________________________________
let arrObjects = [
    {
        age: "1",
        name: "firstArrElement"
    },
    {
        age: "2",
        name: "secondArrElement"
    },
    {
        age: "3",
        name: "thirdArrElement"
    }
];

// _____________________________6________________________________
function superSum(a, b) {
    alert(a + b);
}

// _______________________________7______________________________
let arrayOfNumbers = [8, 19, 34, 5, 6, 23, 708, 904, 1, 0, 65, 38, 6, 2, 1, 33];

function findMinNumber() {
    let minNumber = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] < minNumber) {
            minNumber = arrayOfNumbers[i];
        }
    }
    alert("MinNumber is: " + minNumber);
}

function findMaxNumber() {
    let maxNumber = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        }
    }
    alert("MaxNumber is: " + maxNumber);
}

// _________________________8_______________________________________
let a = "XXX";
let b = "YYY";

function changeValue(a, b) {
    let c = a;
    a = b;
    b = c;
    console.log('Было a = \"XXX\", стало: ' + a);
    console.log('Было b = \"YYY\", стало: ' + b);
}

changeValue(a, b);

// __________________________9_________________________________________
function findMax(arrayOfNumbers) {
    let maxNumber = arrayOfNumbers[0];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i];
        }
    }
    console.log("MaxNumber is: " + maxNumber);
}