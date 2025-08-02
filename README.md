# Ejercicio M4AE4 ABP5 Funciones en JavaScript

### Autor: Gonzalo Román Reyes
### Ruta de repositorio: https://github.com/GRomanD3v/M4AE4-ABP5.git

---
## Aprendizaje Esperado 
### Codificar un programa utilizando funciones para la reutilización de código acorde al lenguaje Javascript
---
#### Ejercicio 1: Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.
- Entrada: La función valorEntrada recibe 4.

- Validación: El if verifica que 4 sea un número entero y menor que 100. La condición es falsa, así que la validación pasa.

- Inicialización: let acumulador = 0; establece el acumulador en cero.

- Bucle: El for se ejecuta para i = 1, 2, 3 y 4.

- Cuando i = 1: acumulador se convierte en 0 + 1 = 1.

- Cuando i = 2: acumulador se convierte en 1 + 2 = 3.

- Cuando i = 3: acumulador se convierte en 3 + 3 = 6.

- Cuando i = 4: acumulador se convierte en 6 + 4 = 10.

- Retorno: El bucle termina, y la función devuelve el valor final de acumulador, que es 10.

- El console.log imprimirá 10 en la consola.
---

#### Ejercicio 2: Construya una función que imprima si un número es primo o no. Los números primos son aquellos que son divisibles solo por 1 y por sí mismos.

#### La función verificarPrimo recibe un número n y sigue estos pasos:

- Validación Inicial: Primero, verifica que el número sea un entero, mayor a 1, y no sea un valor no numérico (NaN). Si no cumple con estas reglas, devuelve un mensaje de error.

- Suposición: Declara una variable esPrimo y le asigna el valor true, asumiendo inicialmente que el número es primo.

- Búsqueda de Divisores: Inicia un bucle para buscar divisores. En lugar de revisar todos los números hasta n, se optimiza revisando solo hasta la raíz cuadrada de n.

- Verificación: Dentro del bucle, comprueba si el número n es divisible exactamente por algún número (i) sin dejar residuo.

#### Resultado:

- Si encuentra un divisor, la función inmediatamente cambia esPrimo a false y detiene el bucle.

- Si el bucle termina de revisar sin encontrar ningún divisor, esPrimo se mantiene como true.

Retorno Final: Finalmente, la función devuelve un mensaje que indica si el número es primo o no, basándose en el valor final de la variable esPrimo.

---
#### Ejercicio 3: Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1.

#### La función cuentaRegresiva recibe un número n y sigue estos pasos:

- Validación: Primero, verifica que el número n sea válido: que sea un número entero, mayor que 0 y menor que 100. Si no cumple con estas reglas, devuelve un mensaje de error.

- Bucle de Impresión: Si el número es válido, inicia un bucle que comienza en el valor de n y va disminuyendo de uno en uno en cada paso, hasta llegar a 1.

- Acción: En cada paso del bucle, la función imprime el número actual en la consola.

- Fin: La función termina una vez que el bucle ha completado la cuenta regresiva.

En resumen, la función imprime una cuenta de forma descendente, desde el número que le proporcionas hasta 1.

--- 

#### Ejercicio 4: Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango.

#### La función sumarPares recibe un número n y realiza los siguientes pasos:

- Validación de Entrada: Primero, comprueba si el número n es válido. Verifica que sea un  número entero, que no sea NaN, y que se encuentre en el rango correcto (mayor a 10 y  menor a 1000). Si alguna de estas condiciones falla, devuelve un mensaje de error.

- Inicialización: Crea una variable llamada sumatoria y la inicializa con el valor 0. Esta variable se usará para guardar el total de la suma.

- Recorrido de Pares: Utiliza un bucle que comienza en 2 y recorre todos los números pares hasta llegar a n.

- Acumulación: En cada paso del bucle, el valor del número par actual (i) se suma a la variable sumatoria.

- Resultado Final: Una vez que el bucle ha terminado de recorrer todos los pares, la función devuelve el valor final que se ha acumulado en la variable sumatoria.

En resumen, la función calcula y devuelve la suma de todos los números pares que hay entre 1 y el número que le proporcionas.

---

#### Ejercicio 5: Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12

#### La función tablaMultiplicar recibe un número n y sigue estos pasos:
- Validación: Primero, comprueba si el valor de n es un número. Si no lo es, detiene la ejecución y devuelve un mensaje de error.

- Bucle: Inicia un bucle que cuenta desde 1 hasta 12.

- Acción: En cada vuelta del bucle, la función multiplica n por el número actual del contador y luego imprime el resultado en la consola, mostrando la operación completa.

- Fin: El proceso se repite 12 veces y la función termina.

En resumen, tu función genera e imprime la tabla de multiplicar completa de cualquier número que le pases, desde el 1 hasta el 12.

---

#### Ejercicio 6: Cree un programa que dado un arreglo de números desordenados los ordene ascendentemente.

#### La función ordenNumerosAscendente recibe un arreglo de números y lo ordena de la siguiente manera:
- Copia del Arreglo: Crea una copia del arreglo original para no modificarlo.

- Bucle Exterior: Inicia un bucle principal que recorre el arreglo. Este bucle se encarga de asegurarse de que el proceso de ordenamiento se repita suficientes veces para que todos los elementos queden en su lugar.

- Bucle Interior: Dentro del bucle principal, otro bucle recorre el arreglo comparando cada elemento con su vecino.

- Comparación y Intercambio: Si un elemento es mayor que el siguiente, la función usa una variable temporal para intercambiar sus posiciones, colocándolos en el orden correcto.

- Devolución: Una vez que ambos bucles han terminado de ejecutarse (lo que significa que no se encontraron más elementos fuera de orden), la función devuelve el arreglo ya ordenado.

---