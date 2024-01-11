function maFonction() {
  var x = 1;
  if (x > 0) {
    console.log("x est positif");
  } else {
    console.log("x est négatif");
  }
  for (var i = 0; i < 5; i++) {
    console.log("Itération " + i);
  }
  var y = x + 2;
  if (y < 10) {
    console.log("y est inférieur à 10");
  } else {
    console.log("y est supérieur ou égal à 10");
  }
  function uneAutreFonction() {
    console.log("Ceci est une autre fonction");
  }
  if (x === 1) {
    console.log("x est égal à 1");
  } else {
    console.log("x n'est pas égal à 1");
  }
  console.log("Fin de maFonction");
}
