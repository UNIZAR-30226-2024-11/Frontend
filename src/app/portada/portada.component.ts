import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      <div class="fade-in">
        <img src="assets/UnoGraham_LOGO.png" alt="Logo Uno Graham" class="logo">
        <button class="button" (click)="redireccionarALaInicio()">Acceder</button>
      </div>
    </div>
  `,
  styles: [`
    .container {
        background-color: #ffe9f8; 
        background: linear-gradient(to bottom, #f0a3d7, #ffe9f8);
        display: flex;
        padding: 0;
        margin: 0;
        overflow: hidden; 
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .fade-in {
        opacity: 0;
        animation: fadeIn 3s ease forwards;
        color: #300b24;
    }

    .logo {
        width: 1000px; 
        height: auto; 
        transform: translate(-45%, -50%); 
        position: absolute;
        top: 275px;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: scale(0.2);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    .button {
        opacity: 0;
        animation: fadeIn 3s ease forwards;
        background-color: #771d55; /* Color de fondo del botón */
        margin-top: 500px;
        border: none;
        color: white;
        padding: 15px 32px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        border-radius: 10px;
    }

    h1 {
        transition: font-size 4s ease; 
    }

    .fade-in h1 {
        font-size: 6em; 
    }
    `
]
})

export class PortadaComponent { 
  constructor(private router: Router) {}

  redireccionarALaInicio() {
    this.router.navigate(['login']); 
  }
}
