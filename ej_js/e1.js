//1
function esPar(n) {
  if (n % 2 === 0) console.log(`${n} es par`);
  else console.log(`${n} no es par`);
}

//2
function mayor(a, b) {
  if (a > b) {
    console.log(`${a} es mayor`);
  } else if (a < b) {
    console.log(`${b} es mayor`);
  } else {
    console.log(`Son iguales`);
  }
}

//3
function divisiblePor5(n) {
  if (n % 5 === 0) console.log(`${n} es divisible por 5`);
  else console.log(`${n} no es divisible por 5`);
}

//4
function contarHastaCero(n) {
  if (n > 0 || n === 0) {
    for (let i = 0; i <= n; i++) {
      console.log(i);
    }
  } else {
    for (let i = n; i <= 0; i++) {
      console.log(i);
    }
  }
}

//5
function repetirCadena(str, n) {
  console.log(str.repeat(n));
}

//6
function mostrarArray(arr) {
  for (const e of arr) {
    console.log(e);
  }
}

//7
function mostrarArrayMenos5to(arr) {
  for (const i in arr) {
    if (i == 4) {
      continue;
    }
    console.log(arr[i]);
  }
}

//8
function multiplicarArrayPor5(arr, n) {
  for (const i of arr) {
    console.log(i * n);
  }
}
