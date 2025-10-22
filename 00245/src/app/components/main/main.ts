import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {

  /* Global */
  aluno: string = "Rodrigo Freitas";


  ngOnInit(): void {
    this.definirProblemas()

  }


  definirProblemas():void {
    this.aluno;
    let aluno: string = "Miguel";
    console.log("this.aluno ", this.aluno);
    console.log("this.aluno ", aluno);


    


  }



}
