import { Component, OnInit } from '@angular/core';
import { calcularArea, exibirMensagem, somarNumeros, verificarParidade } from './funcoes';

@Component({
  selector: 'app-aula02',
  imports: [],
  templateUrl: './aula02.html',
  styleUrl: './aula02.css'
})
export class Aula02 implements OnInit{

  ngOnInit(): void {
    this.exemploEstruturasDecisao();
    this.exemploSwitch();
    this.ternario();
    this.exercicios();
    this.exemploArrays();
    this.exemploFuncoes();
    this.exercicioArrays2();
    this.exercicioFuncoes2();
    this.exercicioCombinacao2();
  }

  // ==========================================================
  // 1️⃣ Estruturas de Decisão Complexas
  // ==========================================================
  exemploEstruturasDecisao(): void {
    console.log('--- Exemplo: Estruturas de Decisão Complexas ---');
  
    let nota: number = 85;
    if (nota >= 90) {
      console.log('Excelente - A');
    } else if (nota >= 80) {
    console.log('Muito Bom - B');
    } else if (nota >= 70) {
      console.log('Bom - C');
    } else if (nota >= 50) {
      console.log('Suficiente - D');
    } else {
      console.log('Insuficiente - F');
    }
  
    let classificacao =
      nota >= 90
        ? 'A'
        : nota >= 80
        ? 'B'
        : nota >= 70
        ? 'C'
        : nota >= 50
        ? 'D'
        : 'F';
    console.log('Classificação (ternário): ' + classificacao);
  
    let temperatura: number = 28;
    let estadoClima: string;
  
    if (temperatura > 35) {
      estadoClima = 'Extremamente quente';
    } else if (temperatura > 25) {
      estadoClima = 'Quente';
    } else if (temperatura > 15) {
      estadoClima = 'Ameno';
    } else if (temperatura > 5) {
      estadoClima = 'Frio';
    } else {
      estadoClima = 'Muito frio';
    }
    console.log('Estado do clima:', estadoClima);
  }


 // ==========================================================
  // 2️⃣ Estrutura Switch
  // ==========================================================
  exemploSwitch(): void {
    console.log('--- Exemplo: Estrutura Switch ---');
 
    let diaSemana: number = 3;
    let nomeDia: string;
 
    switch (diaSemana) {
      case 1:
        nomeDia = 'Segunda-feira';
        break;
      case 2:
        nomeDia = 'Terça-feira';
        break;
      case 3:
        nomeDia = 'Quarta-feira';
        break;
      case 4:
        nomeDia = 'Quinta-feira';
        break;
      case 5:
        nomeDia = 'Sexta-feira';
        break;
      case 6:
        nomeDia = 'Sábado';
        break;
      case 7:
        nomeDia = 'Domingo';
        break;
      default:
        nomeDia = 'Dia desconhecido';
    }
    console.log('Dia da semana:', nomeDia);
 
    let operacao: string = 'somar';
    let resultado: number;
 
    switch (operacao) {
      case 'somar':
        resultado = 10 + 5;
        break;
      case 'subtrair':
        resultado = 10 - 5;
        break;
      case 'multiplicar':
        resultado = 10 * 5;
        break;
      case 'dividir':
        resultado = 10 / 5;
        break;
      default:
        resultado = 0;
    }
    console.log('Resultado:', resultado);
  }
 
  ternario = () => {
    let nota: number = 85;
    let classificacao = nota >= 90 ? 'A' : 'B' ;
 
    console.log('Classificação: ' + classificacao);
  };
  
// ==========================================================
// 3️⃣ Arrays - Operações Básicas
// ==========================================================
exemploArrays(): void {
  console.log('--- Exemplo: Arrays ---');
 
  // Declaração e inicialização de um array de strings
  let frutas: string[] = ['maçã', 'banana', 'laranja'];
 
  // Acessando o primeiro elemento do array (índice 0)
  console.log(frutas[0]); // Output: 'maçã'
 
  // Modificando o segundo elemento do array (índice 1)
  frutas[1] = 'uva';
  console.log('Array atualizado:', frutas); // Output: ['maçã', 'uva', 'laranja']
 
  // Declaração e inicialização de um array de números
  let numeros: number[] = [1, 2, 3];
 
  // push(): Adiciona um elemento ao FINAL do array
  numeros.push(4); // Array fica: [1, 2, 3, 4]
 
  // unshift(): Adiciona um elemento no INÍCIO do array
  numeros.unshift(0); // Array fica: [0, 1, 2, 3, 4]
 
  // pop(): Remove o ÚLTIMO elemento do array
  numeros.pop(); // Array fica: [0, 1, 2, 3]
 
  // shift(): Remove o PRIMEIRO elemento do array
  numeros.shift(); // Array fica: [1, 2, 3]
 
  console.log('Array final:', numeros); // Output: [1, 2, 3]
 
  // Declaração de um array de cores
  let cores: string[] = ['vermelho', 'verde', 'azul', 'amarelo'];
 
  // Loop for tradicional para percorrer o array
  for (let i = 0; i < cores.length; i++) {
    console.log(`Cor ${i + 1}: ${cores[i]}`);
  }
 
}
 

  // ==========================================================
  // 4️⃣ Funções com Parâmetros e Retornos
  // ==========================================================
  exemploFuncoes(): void {
    console.log('--- Exemplo: Funções com Parâmetros e Retornos ---');
 
    console.log('Área:', calcularArea(5, 3));
 
    console.log('Soma total:', somarNumeros([10, 20, 30, 40]));
 
    console.log('4 é', verificarParidade(4));
    console.log('7 é', verificarParidade(7));
 
    exibirMensagem('Bem-vindo ao TypeScript!');
  }
 
 























  // ==========================================================
  //                  Exercicios
  // ==========================================================



exercicios = () => {
    console.log('--- Exercícios: Estruturas de Decisão If, Else IF e Else---');

    console.log(
      '1️ Faça um programa que receba uma nota (0–100) e exiba "Aprovado" se for >= 60, caso contrário "Reprovado".'
    );

    let nota: number = 55;

    if (nota >= 60) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado")
    }




    console.log(
      '2️ Crie um sistema que exiba mensagens diferentes conforme a faixa etária (criança, adolescente, adulto, idoso).'
    );

    let idade: number = 20;

    if (idade >= 65) {
      console.log("Idoso");
    } else if (idade >= 18) {
      console.log("Adulto");
    } else if (idade >= 12) {
      console.log ("Adolescente");
    } else {
      console.log("Criança")
    }

    console.log(
      '3️ Peça uma temperatura e mostre se está "frio", "agradável" ou "quente" usando operadores ternários.'
    );

    let tempgraus: number = 19;
    let tempatual = tempgraus <= 15 ? 'Frio' : tempgraus <= 25 ? 'Agradável' : 'Quente' ;
    console.log('Temperatura Atual: ' + tempatual);

 
    console.log('--- Exercícios: Estrutura Switch ---');
 
    console.log(
      '4 Peça um número de 1 a 7 e exiba o dia da semana correspondente.'
    );

    let diaDaSemana: number = 5;
    
    switch (diaDaSemana) {
      case 1:
        console.log('O Dia da semana é Segunda-feira');
      break;
      case 2:
        console.log('O Dia da semana é Terça-feira');
      break;
      case 3:
        console.log('O Dia da semana é Quarta-feira');
      break;
      case 4:
        console.log('O Dia da semana é Quinta-feira');
      break;
      case 5:
        console.log('O Dia da semana é Sexta-feira');
      break;
      case 6:
        console.log('O Dia da semana é Sábado');
      break;
      case 7:
        console.log('O Dia da semana é Domingo');
      break;
      default:
         console.log('O Numero inserido não corresponde a nenhum dia da semana');
      }
        


    console.log(
      '5 Crie um menu de operações matemáticas (somar, subtrair, multiplicar, dividir) com switch.'
    );

    let operacao: string = 'multiplicar';
    let resultado: number;
 
    switch (operacao) {
      case 'somar':
        resultado = 10 + 10;
        break;
      case 'subtrair':
        resultado = 10 - 10;
        break;
      case 'multiplicar':
        resultado = 10 * 10;
        break;
      case 'dividir':
        resultado = 10 / 10;
        break;
      default:
        resultado = 0;
    }
    console.log('Resultado:', resultado);





    console.log(
      '6 Use um switch para classificar uma cor (vermelho, verde, azul, outro).'
    );

    // Não entendi muito bem este Exercicio, não como fazer mas sim a logica.

    let cor: string = "azul";

    switch (cor) {
      case "vermelho":
        console.log("A cor é vermelha.");
        break;

      case "verde":
        console.log("A cor é verde.");
        break;

      case "azul":
        console.log("A cor é azul.");
        break;

      default:
        console.log("Cor não reconhecida.");
        break;
    }
    

 
    console.log('🎯 INICIANDO EXERCÍCIOS SOMENTE COM OPERADOR TERNÁRIO SIMPLES\n');
    console.log(
      '🎯  EXERCÍCIO 1: Verificador de Maioridade, DESCRIÇÃO: Verifica se uma pessoa é maior de idade usando ternário simples\n'
    );

    let idade2: number = 17;
    let resultado2: string = idade2 >= 18 ? "maior de idade." : "menor de idade.";
    console.log('É ', resultado2);



    console.log(
      '\n🔢 EXERCÍCIO 2: Verificador de Número Par/Ímpar, DESCRIÇÃO: Verifica se um número é par ou ímpar usando ternário simples, USO: Operação matemática dentro da condição'
    );
 
    let num: number = 12;

    let parimpar: string = num % 2 === 0 ? "O número é par." : "O número é ímpar.";
    console.log(parimpar);


    console.log(
      '\n🔐 EXERCÍCIO 3: Verificador de Login.  DESCRIÇÃO: Verifica se o usuário está logado e retorna mensagem apropriada   USO: Condição com valores booleanos'
    );

    let logado: boolean = true;

    let respostaLogin: string = logado ? "Utilizador está logado." : "Utilizador está deslogado.";

    console.log(respostaLogin);
  };









  

exercicioArrays2(): void {
    console.log('--- Exercícios: Arrays ---');
    console.log('1️⃣ Crie um array de 5 nomes e exiba cada um no console.');

    let nomes = ['Rodrigo', 'Joao', 'Margarida', 'Beatriz', 'Rafael'];

    console.log(" | ", nomes[0], " | ", nomes[1], " | ", nomes[2], " | ", nomes[3], " | ", nomes[4], " | ")

    console.log(
      '2️⃣ Peça ao utilizador para adicionar e remover elementos de um array.'
    );

    let lista = ["Ferrari", "Ford"];
    console.log("Lista inicial:", lista[0], lista [1]);

    lista.push("Renault");
    console.log("Lista atualizada:", lista[0], lista [1], lista[2]);

    lista.pop(); // remover último
    console.log("lista depois de remover último elemento:", lista[0], lista [1],);


    console.log(
      '3️⃣ Crie um array de números e imprima somente os números pares.'
    );

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
      }
    }
  }
 
 
 
  exercicioFuncoes2(): void {
      console.log('--- Exercícios: Funções ---');
    console.log(
      '1️⃣ Crie uma função que receba dois números e retorne o maior.'
    );

    function maiorNumero(num1: number, num2: number): number {
      if (num1 > num2) {
        return num1;
      } else {
        return num2;
      }
    }

    console.log("O maior numero é o: ", maiorNumero(10, 15));



    console.log(
      '2️⃣ Escreva uma função que calcule a média de um array de números.'
    );


    function calcularMedia(numeros: number[]): number {
      let resultado = 0;
      for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
      }
      return resultado / numeros.length;
    }

    let valores = [16, 8, 2, 3, 35];
    console.log('Média dos valores do Array:', calcularMedia(valores));


    console.log(
      '3️⃣ Crie uma função que receba um nome e exiba uma saudação personalizada.'
    );

    function saudacao(nome: string): void {
      nome = 'Rodrigo';

      console.log("Olá " + nome + "! Tudo bem?");
    }
    saudacao('Rodrigo');
   }






   
   
   exercicioCombinacao2(): void {  
   console.log('--- Exercícios: Combinação de Conceitos ---');
    console.log(
      '1️⃣ Crie uma função que receba um array de notas e mostre quantos alunos foram aprovados.'
    );

    function contarAprovados(notas: number[]): void {
      let alunosAprovados = 0;
      for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 10) {
          alunosAprovados++;
        }
      }
      console.log("Número de alunos aprovados: " + alunosAprovados);
    }

    let notas = [12, 7, 17, 9, 10, 14];
    contarAprovados(notas);



    console.log(
      '2️⃣ Desenvolva um sistema que calcule o total de uma compra com base em arrays de produtos e preços.'
    );


    function compraArray(): void {
      let produtos = ["telemovel", "carregador", "capa"];
      let precos = [1100, 25, 15];

      console.log('--- Lista de Produtos ---');
      for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i] + " - " + precos[i]+ "€"); 
      }

      let total = precos.reduce((soma, preco) => soma + preco, 0);
      console.log('-------------------------');
      console.log("Total da compra: " + total + "€");
    }

    compraArray();


    console.log(
      '3️⃣ Combine estruturas condicionais e arrays para exibir mensagens diferentes com base em resultados.'
    );

    function resultadosAlunos(): void {
      let alunos = ["Rodrigo", "Daniel", "Carlos", "Margarida"];
      let notas = [15, 9, 18, 7];

      for (let i = 0; i < alunos.length; i++) {
        if (notas[i] >= 10) {
          console.log(alunos[i] + " foi aprovado com a nota: " + notas[i]);
        } else {
          console.log(alunos[i] + " foi reprovado com a nota: " + notas[i]);
        }
      }
    }

    resultadosAlunos();
    }



}