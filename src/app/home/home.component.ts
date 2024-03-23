import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponent } from '../profile/user/user.component';
import { LevelComponent } from '../profile/level/level.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ShopComponent } from '../shop/shop.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent, LevelComponent, TiendaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  btnClick() {
    this.router.navigate(['portada']); 
  }
}
