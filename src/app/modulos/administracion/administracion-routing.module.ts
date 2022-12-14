import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:"crear-persona",
    component: CrearPersonaComponent
  },
  {
    path:"listar-persona",
    component: BuscarPersonaComponent
  },
  {
    path:"editar-persona/:id",
    component: EditarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-persona/:id",
    component: EliminarPersonaComponent,
    canActivate: [ValidadorSesionGuard]
  },
{
  path: "listar-productos",
  component: BuscarProductoComponent,
  canActivate: [ValidadorSesionGuard]
},

  {
    path:"crear-producto",
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"editar-producto/:id",
    component:  EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:"eliminar-producto/:id",
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
