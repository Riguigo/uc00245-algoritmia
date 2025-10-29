import { Component, OnInit } from '@angular/core';

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
}
 

 


























