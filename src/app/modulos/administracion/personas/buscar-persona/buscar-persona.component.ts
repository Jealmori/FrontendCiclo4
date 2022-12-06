import { Component } from '@angular/core';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent {
  listadoRegistrosPersona: ModeloPersona[] = [];
  
  constructor(private personaServicio: PersonaService) { }

   ngOnInit(): void {
    this.ObtenerListadoPersona();
   }

   ObtenerListadoPersona(){
    this.personaServicio.ObtenerRegistros().subscribe((datos: ModeloPersona[])=>{
      this.listadoRegistrosPersona = datos;
    })
   }
}
