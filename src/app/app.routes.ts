import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'portada', component: PortadaComponent },
    { path: 'login', component: LoginComponent},
    { path: 'registro', component: RegistroComponent},
    { path: '', redirectTo: 'portada', pathMatch: 'full' }
];