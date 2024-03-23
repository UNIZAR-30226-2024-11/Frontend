import { Component } from '@angular/core';
import { LevelComponent } from './level/level.component';
import { UserComponent } from './user/user.component';
import { FlujoComponent } from '../flujo/flujo.component';
import { InfoJugadorComponent } from './info-jugador/info-jugador.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LevelComponent, UserComponent, FlujoComponent, InfoJugadorComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
