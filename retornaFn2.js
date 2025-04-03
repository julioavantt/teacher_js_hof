function operaciones(op) {
 const suma = (a, b) => a + b;
 const resta = (a, b) => a - b;

 switch (op) {
  case "suma":
   return suma;
  case "resta":
   return resta;
  default:
   return "ARGUMENTO INVÁLIDO";
 }
}

console.log(operaciones("resta")(12, 6));


