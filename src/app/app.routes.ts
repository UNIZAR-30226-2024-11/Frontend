import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'portada', component: PortadaComponent },
    { path: '', redirectTo: 'portada', pathMatch: 'full' }
];