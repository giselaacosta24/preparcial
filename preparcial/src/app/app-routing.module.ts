import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
const routes: Routes = [
  { path: '', redirectTo: 'busqueda', pathMatch: 'full' },
  // { path: 'tabla-pelicula', component: TablaPeliculaComponent },
  // { path: 'pelicula-alta', component: PeliculaAltaComponent },
  // { path: 'editEmpleado/:id', component: CreateEmpleadoComponent },
  // { path: '**', redirectTo: 'busqueda', pathMatch: 'full' },
  { path: "busqueda", component: BusquedaComponent, pathMatch: "full" },
{ path: "bienvenido", component: BienvenidoComponent, pathMatch: "full" },
{ path: "peliculas/alta", component: PeliculaAltaComponent, pathMatch: "full" },
{ path: "actor/alta", component: ActorAltaComponent, pathMatch: "full" },
{ path: "actor/listado", component: ActorListadoComponent, pathMatch: "full" },
{ path: "peliculas/listado", component: PeliculaListadoComponent, pathMatch: "full" },
{ path: "paises", component: TablaPaisesComponent, pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
