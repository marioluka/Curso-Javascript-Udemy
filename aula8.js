const nome = "Mário Luka";
const sobrenome = "Braga da Costa";
const idade = 20;
const peso = 102;
const altura = 1.92;
const anoNascimento = 2002;
let imc;
imc = peso / (altura * altura);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${altura}m de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`);