import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPersona } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  id: string ='';
  fgValidador: FormGroup = this.fb.group({
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'celular': ['',[Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioPersona: PersonaService,
    private router: Router,
    private route: ActivatedRoute ){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPersona();
  }
  BuscarPersona(){
      this.servicioPersona.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloPersona)=>{
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["celular"].setValue(datos.celular);

    });
  }
  
  EditarPersona(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let p = new ModeloPersona();
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correo = correo;
    p.celular = celular;
    p.id = this.id;
    this.servicioPersona.ActualizarPersona(p).subscribe((datos: ModeloPersona)=>{
      alert("Producto actualizado correctamente");
      this.router.navigate(["/administracion/listar-persona"]);
    }, (error: any)=>{
      alert("Error de actualizacion");
    })
  }
}
