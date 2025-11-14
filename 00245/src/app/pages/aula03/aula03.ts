import { Component, OnInit } from '@angular/core';
import { analisarTexto, calcularTotal, criarUsuario } from './funcoes';

@Component({
  selector: 'app-aula03',
  imports: [],
  templateUrl: './aula03.html',
  styleUrl: './aula03.css'
})
export class Aula03 implements OnInit{

  ngOnInit(): void {
    this.exemplosEstruturasRepeticao();
    this.exemplosMetodosArray();
    this.exemplosFuncoesAvancadas();
    this.exemplosControleLoops();
    this.exercicioAvalicao();
  }






  // ======================================================
  // 1️⃣ ESTRUTURAS DE REPETIÇÃO
  // ======================================================
  exemplosEstruturasRepeticao(): void {
    console.log('--- Estruturas de Repetição ---');
 
    // FOR (para)
    // Estrutura: for(inicialização; condição; incremento)
    // Ideal quando se sabe antecipadamente quantas iterações serão necessárias
    for (let i = 0; i < 3; i++) {
      console.log(`for → Iteração: ${i}`);
    }
    // Funcionamento:
    // 1. let i = 0 → Executa UMA vez no início
    // 2. i < 3 → Verifica ANTES de cada iteração
    // 3. console.log(...) → Executa o bloco de código
    // 4. i++ → Executa APÓS cada iteração
    // 5. Repete passos 2-4 até a condição ser falsa
 
    // WHILE (enquanto)
    // Estrutura: while(condição)
    // Ideal quando NÃO se sabe quantas iterações serão necessárias
    let contador = 0;
    while (contador < 3) {
      console.log(`while → Contador: ${contador}`);
      contador++; // Importante: incrementar manualmente para evitar loop infinito
    }
    // Funcionamento:
    // 1. Verifica condição ANTES de executar o bloco
    // 2. Se verdadeira, executa bloco de código
    // 3. Repete até condição ser falsa
    // CUIDADO: Se esquecer do contador++, entra em loop infinito!
 
    // DO-WHILE (faça-enquanto)
    // Estrutura: do { código } while(condição)
    // Garante que o bloco execute PELO MENOS UMA VEZ
    let x = 0;
    do {
      console.log(`do-while → Passo: ${x}`);
      x++;
    } while (x < 2);
    // Funcionamento:
    // 1. Executa o bloco de código PRIMEIRO
    // 2. DEPOIS verifica a condição
    // 3. Se verdadeira, repete o processo
    // Útil quando o código precisa executar pelo menos uma vez
  }







  // ======================================================
  // 2 ESTRUTURAS Exemploas Metodos e Arrays
  // ======================================================
  exemplosMetodosArray(): void {
    console.log('--- Métodos de Array ---');
 
    const produtos = ['telemóvel', 'tablet', 'portátil'];
 
    // forEach: Executa uma função para cada elemento do array
    // Não retorna um novo array, apenas itera sobre os elementos
    // p = elemento atual, i = índice do elemento
    produtos.forEach((p, i) => console.log(`forEach → ${i + 1}: ${p}`));
 
    const precos = [100, 200, 300];
 
    // map: Cria um NOVO array com os resultados da função aplicada a cada elemento
    // Transforma cada elemento do array original
    // Neste caso: aplica 10% de desconto em cada preço
    const desconto = precos.map((p) => p * 0.9);
    console.log('map → Preços com desconto:', desconto);
 
    // filter: Cria um NOVO array apenas com os elementos que passam no teste
    // Retorna apenas os elementos onde a condição retorna true
    // Neste caso: preços maiores que 150
    const filtrados = precos.filter((p) => p > 150);
    console.log('filter → Maiores que 150:', filtrados);
 
    // find: Retorna o PRIMEIRO elemento que satisfaz a condição
    // Se nenhum elemento for encontrado, retorna undefined
    // Neste caso: primeiro preço acima de 250
    const encontrado = precos.find((p) => p > 250);
    console.log('find → Primeiro acima de 250:', encontrado);
 
    // reduce: Executa uma função redutora em cada elemento, resultando em um único valor
    // acc = acumulador (valor anterior), val = valor atual
    // 0 = valor inicial do acumulador
    // Neste caso: soma todos os preços começando de 0
    const soma = precos.reduce((acc, val) => acc + val, 0);
    console.log('reduce → Soma total:', soma);
  }





   // ======================================================
  // 3️⃣ FUNÇÕES AVANÇADAS
  // ======================================================
  exemplosFuncoesAvancadas(): void {
    console.log('--- Funções Avançadas ---');
 
    console.log('criarUsuario("Ana", 25):', criarUsuario('Ana', 25)); // Com idade
    console.log('criarUsuario("João"):', criarUsuario('João')); // Sem idade (usa padrão)
 
    /************************************ */
 
    console.log('calcularTotal(10):', calcularTotal(10)); // Usa qtd padrão = 1
    console.log('calcularTotal(10, 3):', calcularTotal(10, 3)); // Usa qtd fornecida = 3
 
    /************************************ */
    console.log(
      'analisarTexto("Olá Mundo TypeScript"):',
      analisarTexto('Olá Mundo TypeScript') // Retorna [3, 20] (3 palavras, 20 caracteres)
    );
  }
 
 


  // ======================================================
  // 4️⃣ CONTROLE DE LOOPS
  // ======================================================
  exemplosControleLoops(): void {
    console.log('--- Controle de Loops ---');
 
    // Loop for tradicional:
    // let i = 0 → inicialização (executa uma vez no início)
    // i < 5 → condição (verificada antes de cada iteração)
    // i++ → expressão de incremento (executa após cada iteração)
    for (let i = 0; i < 5; i++) {
      // CONTINUE: Pula para a próxima iteração do loop
      // Quando i === 2, o código abaixo do 'continue' não é executado
      // O loop continua com a próxima iteração (i = 3)
      if (i === 2) {
       
        continue
     
     
      };
 
      // BREAK: Interrompe completamente o loop
      // Quando i === 4, o loop é finalizado imediatamente
      // Nenhuma iteração adicional será executada
      if (i === 4) break;
 
      // Este console.log só será executado quando:
      // i !== 2 (por causa do continue) E i < 4 (por causa do break)
      console.log(`Processando número: ${i}`);
    }
  }



 exercicioAvalicao = () => {
    // ======================================================
    // 1️⃣ EXERCÍCIOS - ESTRUTURAS DE REPETIÇÃO
    // ======================================================
    console.log('🧠 Exercícios — Estruturas de Repetição');
 
    console.log(
      '1️ Faça um loop for que mostre todos os números pares de 0 a 10.'
    );

    for (let i = 0; i <= 10; i++) {
      if (i % 2 == 0) {
        console.log("O numero " + i + " é par")
      }
    }
      

    console.log(
      '2️ Crie um loop while que conte de 5 até 0 e exiba "Contagem regressiva: X".'
    );

    let i=5;
    while (i >= 0) {
      console.log('Contagem regressiva: ' + i);
      i--;
    }

    console.log(
      '3️ Escreva um loop do-while que simule 3 tentativas de login.'
    );
 
    let tentativas = 0;
    const maximoTentativas = 3;
    do {
      tentativas++;
      console.log("Falha no login. " + tentativas + " tentativas restantes");
    } while (tentativas < maximoTentativas);

    console.log('Limite de tentativas atingido.');



    console.log('🧠 Exercícios — Métodos de Array');
 
    console.log(
      '4 Crie um array de nomes e use forEach para exibir cada nome em maiúsculas.'
    );

    let nomes: string[] = ['Ana', 'Bruno', 'Carla', 'Diego'];
    nomes.forEach(nome => console.log(nome.toUpperCase()));


    console.log(
      '5 Crie um array de idades e use filter para retornar apenas as idades acima de 18.'
    );

    let idades: number[] = [8, 14, 20, 31, 47, 24];
    let maioresDeIdade = idades.filter(idade => idade >= 18);
    console.log(maioresDeIdade);


    console.log(
      '6 Crie um array de números e use reduce para calcular a média.'
    );

    let numeros: number[] = [18, 75, 8, 16, 46];
    let soma = numeros.reduce((acc, num) => acc + num, 0);  
    let media = soma / numeros.length;
    console.log(`Média = ${media}`);


 



    console.log('🧠 Exercícios — Funções Avançadas');
 
    console.log(
      '7 Crie uma função que receba dois números e retorne a soma e o produto (usando tupla).'
    );

    function calcular(n1: number, n2: number): [number, number] {
    let soma2 = n1 + n2;
    let produto = n1 * n2;
    return [soma2, produto];
    }

    let [soma2, produto] = calcular(10, 7);
    console.log("Soma: " + soma2 + "\nProduto: " + produto);



    console.log(
      '8 Crie uma função com valor padrão para calcular o preço total com desconto.'
    );

    function calcularDesconto(preco: number, desconto: number = 0.25): number {
    return preco - preco * desconto;
    }

    console.log("Preço final (25% desconto): € " + calcularDesconto(100));


    console.log(
      '9 Crie uma função que receba uma frase e retorne um objeto com quantidade de palavras e caracteres.'
    );
 
    function analisarFrase(frase: string) {
      let palavras = frase.trim().split(/\s+/);

      return {
        palavras: palavras.length,
        caracteres: frase.replace(/\s+/g, '').length 
      }
    }

    let resultado = analisarFrase('Bom dia José, tudo bem?');
    console.log(resultado);




   console.log('🧠 Exercícios — Controle de Loops');
 
    console.log('1️0 Use "continue" para pular números pares de 0 a 10.');

    for (let i = 0; i <= 10; i++) {
      if (i % 2 === 0) {
        continue;
      }
      console.log(i);
    }



    console.log(
      '11 Use "break" para interromper um loop quando o número for maior que 7.'
    );

    for (let i = 0; i <= 10; i++) {
      if (i > 7) {
        break; // interrompe o loop
      }
    console.log(i);
    }


    console.log(
      '12 Crie um loop que pare quando encontrar um número negativo em um array.'
    );
 
    let num = [3, 5, 7, 2, -4, 10, 12];

    for (let i = 0; i < num.length; i++) {
      if (num[i] < 0) {
        console.log("Um número negativo foi encontrado: " + num[i]);
        break;
      }
      console.log(num[i]);
    };
  }
}

