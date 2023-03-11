//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt("Introduzca un num"));
let num2 = parseInt(prompt("Introduzca otro num"));

if (num1 < num2) {
  document.write("El mayor es" + num2);
} else {
  document.write("El mayor es" + num1);
}
