import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HeaderPrincipalComponent } from './pagina-principal/header-principal/header-principal.component';
import { InventariobotonesComponent } from './pagina-principal/Inventarios/inventariobotones/inventariobotones.component';
import { InventarioetiquetasComponent } from './pagina-principal/Inventarios/inventarioetiquetas/inventarioetiquetas.component';
import { InventariohilosComponent } from './pagina-principal/Inventarios/inventariohilos/inventariohilos.component';
import { InventarioreatasComponent } from './pagina-principal/Inventarios/inventarioreatas/inventarioreatas.component';
import { InventariotelasComponent } from './pagina-principal/Inventarios/inventariotelas/inventariotelas.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'inicio', component: InicioComponent },
   { path: 'principal', component: PaginaPrincipalComponent },
   { path: 'headerprincipal', component: HeaderPrincipalComponent},

   { path: 'Botones', component: InventariobotonesComponent },
   { path: 'Etiquetas', component: InventarioetiquetasComponent },
   { path: 'Hilos', component: InventariohilosComponent },
   { path: 'Reatas', component: InventarioreatasComponent },
   { path: 'Telas', component: InventariotelasComponent },









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
