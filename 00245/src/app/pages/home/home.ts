import { Component, OnInit } from '@angular/core';

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
    this.exemploOperadoresAritmeticos()
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
    this.varriavelGlobal = 'São as que começam dom THIS.';      // AS VARIAVEIS GLOBAIS
    this.varriavelGlobal3 = undefined                           // A dupla tipagem serve para definir por exemplo que a variavel é indefinida até certa linha e dps mais tarde tem valor 

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
  



  // -------------------------------------------------------------------
  //                   Exercicio Feitos em Aula
  // -------------------------------------------------------------------


  




}
