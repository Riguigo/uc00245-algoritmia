import { Component, OnInit } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  varriavelGlobal: string = ''; // Variavél inicializada mas vazia
  varriavelGlobal2!: string; // Variavél não inicializada
  varriavelGlobal3?: string; // Variavél não inicializada
  varriavelGlobal4: number = 0;

  arrayGlobal: string[] = [];

  ngOnInit(): void {
    let test = '';
    const nome = '';

    // chamar as funções
    this.exemploVariaveisETipos();
    this.exemploVariaveisETipos2();
    this.exemploOperadoresAritmeticos();
    this.exemploOperadoresComparacao();
    this.exerciciosParaFazer();
    this.exerciciosParaFazer2();
  }

  // criar as funções

  // ======================================================
  // 🔹 1. VARIÁVEIS E TIPOS DE DADOS
  // ======================================================
  exemploVariaveisETipos(): void {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.varriavelGlobal = 'São as que começam dom THIS.'; // AS VARIAVEIS GLOBAIS
    this.varriavelGlobal3 = undefined; // A dupla tipagem serve para definir por exemplo que a variavel é indefinida até certa linha e dps mais tarde tem valor

    console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  }

  exemploVariaveisETipos2 = () => {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.varriavelGlobal = 'São as que começam dom THIS.'; // AS VARIAVEIS GLOBAIS

    console.log(nome1, idade1, ativo1, valor, this.varriavelGlobal);
  };

  // ======================================================
  // 🔹 2. OPERADORES ARITMÉTICOS
  // ======================================================
  exemploOperadoresAritmeticos(): void {
    console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let num1 = 10;
    let num2 = 3;

    console.log(num1 + num2); // Adição
    console.log(num1 - num2); // Subtração
    console.log(num1 * num2); // Multiplicação
    console.log(num1 / num2); // Divisão

    // diferente do normal!!
    console.log(num1 % num2); // Resto da divisão !!!!!!
  }

  /***Operadores de  comparação */

  exemploOperadoresComparacao(): void {
    console.log('\n🧩 3️⃣ OPERADORES DE COMPARAÇÃO');
    console.log('--------------------------------');

    // 📘 Exemplo de código:

    let x = 5;
    let y = 10;

    console.log(x == y); // Igualdade
    console.log(x != y); // Diferença
    console.log(x > y); // Maior que
    console.log(x < y); // Menor que
    console.log(x >= y); // Maior ou igual
    console.log(x <= y); // Menor ou igual
  }

























































  // -------------------------------------------------------------------
  //                   Exercicio Feitos em Aula
  // -------------------------------------------------------------------

  exerciciosParaFazer = () => {
    // 💪 Exercício 1
    console.log(
      '👉 Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.'
    );

    let name: string = 'Rodrigo Freitas';
    let idade: number = 20;
    let ativo: boolean = true;

    console.log('Nome: ' + name + '\nIdade: ' + idade + '\nAtivo: ' + ativo);

    // 💪 Exercício 2
    console.log('👉 Exercício 2: Crie uma variável cidade e depois altere seu valor.');

    let name2: string = 'Rodrigo Freitas';
    console.log(name2);
    name2 = 'João Carlos';
    console.log(name2);

    // 💪 Exercício 3
    console.log('👉 Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');

    let variavel: any = 'Texto';
    console.log('String:', variavel);
    variavel = 42;
    console.log('Number:', variavel);
    variavel = true;
    console.log('Boolean:', variavel);

    // 💪 Exercício 4
    console.log(
      '👉 Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.'
    );

    let n1: number = 10;
    let n2: number = 5;
    console.log('Soma:' + (n1 + n2));
    console.log('Subtração: ' + (n1 - n2));

    // 💪 Exercício 5
    console.log('👉 Exercício 5: Calcule a área de um retângulo (largura * altura).');

    let largura: number = 8;
    let altura: number = 6;
    let area: number = largura * altura;
    console.log('Área do retângulo:' + area);

    // 💪 Exercício 6
    console.log('👉 Exercício 6: Mostre o resto da divisão de 20 por 6.');

    let resto: number = 20 % 6;
    console.log('Resto da divisão: ' + resto);
  };

  exerciciosParaFazer2 = () => {
    console.log('-------------------------------------------------------------------');
    console.log('                   Exercicios operadores compraração               ');
    console.log('-------------------------------------------------------------------');

    console.log('👉 Exercício 7: Compare dois números e diga se são iguais.');

    let num1 = 10;
    let num2 = 10;

    if (num1 == num2) {
      console.log('Os numeros são iguais');
    } else {
      console.log('Os numeros são diferentes');
    }

    console.log('👉 Exercício 8: Compare se um número é maior que o outro.');

    let n1 = 20;
    let n2 = 10;

    if (n1 > n2) {
      console.log('O numero 1 é maior que o numero 2.');
    } else if (n1 < n2) {
      console.log('O numero 2 é maior que o numero 1.');
    } else {
      console.log('Os numeros são iguais.');
    }

    console.log('👉 Exercício 9: Compare se dois textos são diferentes.');

    let name1: string = 'Rodrigo';
    let name2: string = 'João';

    if (name1 == name2) {
      console.log('Os nomes são iguais');
    } else {
      console.log('Os nomes são diferentes');
    }


    console.log('👉 Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');

    let idade = 20;
    let temCarta = true;
    let temIdade = null;


    if (idade >= 18) {
      temIdade = true;
    } else if (idade < 18) {
      temIdade = false;
    }

    if (temIdade && temCarta) {
      console.log("Pode Conduzir.");
    } else {
      console.log("Não pode Conduzir.");
    }


    console.log('👉 Exercício 11: Verifique se o acesso é permitido (logado || admin).');

    let user = "admin";

    if (user == "admin") {
      console.log("Access Granted");
    } else {
      console.log("Access Denied");
    }




    console.log('👉 Exercício 12: Inverta o valor de uma variável booleana.');

    let status = true;
    status = !status;
    console.log("status value: " + status);

    
  };
}
