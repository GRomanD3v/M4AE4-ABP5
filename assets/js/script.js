// --- Funciones de los ejercicios (se mantienen iguales) ---
function valorEntrada(n) {
    if (Number.isNaN(n) || !Number.isInteger(n) || n >= 100) {
        return "Error: debe ser número entero y debe ser un número menor que 100"
    }
    let acumulador = 0;
    for (let i = 1; i <= n; i++) {
        acumulador += i;
    }
    return acumulador;
}

function verificarPrimo(n) {
    if (Number.isNaN(n) || !Number.isInteger(n) || n <= 1) {
        return 'Error: Debes escoger un número entero y que sea mayor a 1';
    }
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
    return esPrimo ? 'Tu número es primo' : 'Tu número no es primo';
}

function cuentaRegresiva(n) {
    if (Number.isNaN(n) || !Number.isInteger(n) || n >= 100 || n <= 0) {
        return 'Error: El número debe ser un entero, menor que 100 y mayor que 0.';
    }
    let texto = "";
    for (let i = n; i >= 1; i--) {
        texto += i + " ";
    }
    return texto;
}

function sumarPares(n) {
    if (Number.isNaN(n) || !Number.isInteger(n) || n <= 10 || n >= 1000) {
        return 'Error: Debes ingresar un número entero mayor que 10 y menor que 1000.';
    }
    let sumatoria = 0;
    for (let i = 2; i <= n; i += 2) {
        sumatoria += i;
    }
    return sumatoria;
}

function tablaMultiplicar(n) {
    if (Number.isNaN(n)) {
        return ' Error: Debe ser un número';
    }
    let tablaHTML = "";
    for (let i = 1; i <= 12; i++) {
        tablaHTML += `<div>${n} x ${i} = ${n * i}</div>`;
    }
    return tablaHTML;
}

function ordenNumerosAscendente(arr) {
    const arrCopia = [...arr];
    for (let i = 0; i < arrCopia.length; i++) {
        for (let j = 0; j < arrCopia.length - 1; j++) {
            if (arrCopia[j] > arrCopia[j + 1]) {
                let temp = arrCopia[j];
                arrCopia[j] = arrCopia[j + 1];
                arrCopia[j + 1] = temp;
            }
        }
    }
    return arrCopia.join(', ');
}

// --- Lógica interactiva para cada ejercicio ---
function manejarResultado(resultado, elemento) {
    if (String(resultado).startsWith('Error:')) {
        elemento.classList.add('error');
    } else {
        elemento.classList.remove('error');
    }
    elemento.textContent = resultado;
}

// Ejercicio 1
document.getElementById('btn-ej1').addEventListener('click', () => {
    const n = Number(document.getElementById('input-ej1').value);
    const resultado = valorEntrada(n);
    manejarResultado(resultado, document.getElementById('resultado-ej1'));
});

// Ejercicio 2
document.getElementById('btn-ej2').addEventListener('click', () => {
    const n = Number(document.getElementById('input-ej2').value);
    const resultado = verificarPrimo(n);
    manejarResultado(resultado, document.getElementById('resultado-ej2'));
});

// Ejercicio 3
document.getElementById('btn-ej3').addEventListener('click', () => {
    const n = Number(document.getElementById('input-ej3').value);
    const resultado = cuentaRegresiva(n);
    manejarResultado(resultado, document.getElementById('resultado-ej3'));
});

// Ejercicio 4
document.getElementById('btn-ej4').addEventListener('click', () => {
    const n = Number(document.getElementById('input-ej4').value);
    const resultado = sumarPares(n);
    manejarResultado(resultado, document.getElementById('resultado-ej4'));
});

// Ejercicio 5
document.getElementById('btn-ej5').addEventListener('click', () => {
    const n = Number(document.getElementById('input-ej5').value);
    const resultadoDiv = document.getElementById('resultado-ej5');
    const resultado = tablaMultiplicar(n);

    if (String(resultado).startsWith('Error:')) {
        resultadoDiv.classList.add('error');
        resultadoDiv.textContent = resultado;
    } else {
        resultadoDiv.classList.remove('error');
        resultadoDiv.innerHTML = resultado;
    }
});

// Ejercicio 6
document.getElementById('btn-ej6').addEventListener('click', () => {
    const arrString = document.getElementById('input-ej6').value;
    const arrNumeros = arrString.split(',').map(item => Number(item.trim()));
    const resultado = ordenNumerosAscendente(arrNumeros);
    const resultadoDiv = document.getElementById('resultado-ej6');
    
    if (String(resultado).startsWith('Error:') || arrNumeros.some(isNaN)) {
        resultadoDiv.classList.add('error');
        resultadoDiv.textContent = "Error: La entrada debe ser una lista de números separados por comas.";
    } else {
        resultadoDiv.classList.remove('error');
        resultadoDiv.textContent = `[${resultado}]`;
    }
});