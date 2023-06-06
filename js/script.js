// PALINDROMA


// function isPalindrome ()



// PARI E DISPARI

// raccolgo i dati dell'utente e li stampo
const userChoise = 'Scelta Utente:' + ' ' + (prompt('Pari o Dispari?'));
console.log(userChoise);
const userNumber = parseInt(prompt('Scegli un numero da 1 a 5?'));
console.log(userNumber);

// creo una funzione per generare un numero random da 1 a 5
function getRandomNumber (){
    const number = Math.floor(Math.random() * 5) + 1;
    return number;
}

// stampo il numero random della cpu
const cpuNumber = getRandomNumber();
console.log ('Numero Cpu:' + ' ' + cpuNumber);

// creo una funzione per fare la somma tra il numero dell'utente e quello della cpu
function getSum (num1 , num2){
    const sum = num1 + num2;
    return sum;
}

// stampo il risultato della somma
const sumResult = getSum(userNumber , cpuNumber);
console.log ('La somma è:' + ' ' + sumResult);

// creo una funzione per stabilire se la somma è pari o dispari
function isEven(number){
    if ( number % 2 === 0){
        const even = 'Il risultato è:' + ' ' + 'Pari';
        return even;
    } else{
        const odd = 'Il risultato è:' + ' ' + 'Dispari';
        return odd;
    }
    
}

// stampo il risultato
const result = isEven(sumResult);
console.log(result);

