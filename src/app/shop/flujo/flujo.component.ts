import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { TiendaComponent } from '../../home/tienda/tienda.component';

@Component({
  selector: 'app-flujo',
  standalone: true,
  imports: [HomeComponent, TiendaComponent],
  templateUrl: './flujo.component.html',
  styleUrl: './flujo.component.css'
})
export class FlujoComponent {
  constructor(private router: Router) {}

  redireccionarHome() {
    this.router.navigate(['home']);
  }
}
