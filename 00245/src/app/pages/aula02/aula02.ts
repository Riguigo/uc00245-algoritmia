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
    this.exerciciosIfeSwitch()
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
    let classificacao = nota >= 90 ? 'A' : nota >= 80 ? 'B' : nota >= 70 ? 'C' : nota >= 50 ? 'D' : 'F';
 
    console.log('Classificação: ' + classificacao);
  }
 




































































  // ==========================================================
  //                  Exercicios
  // ==========================================================

  exerciciosIfeSwitch(): void {
    
  }





















}