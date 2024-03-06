import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})

export class PortadaComponent { 
  constructor(private router: Router) {}

  redireccionarALaInicio() {
    this.router.navigate(['/inicio']); 
  }
}

