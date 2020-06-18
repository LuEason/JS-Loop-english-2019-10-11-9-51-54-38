for (let i = 1; i < 10; i++) {
  let output = '';
  for (let j = 1; j <= i; j++) {
    output = output + i + '*' + j + '=' + (i*j) + '  ';
  }
  console.log(output);
}
