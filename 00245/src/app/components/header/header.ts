import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
