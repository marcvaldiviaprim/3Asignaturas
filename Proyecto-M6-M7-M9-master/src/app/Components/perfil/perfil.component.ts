import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // Componenetes de prueba
  Alumnos : Alumno[] = [];
  Profesor : Profesor[] = [];
  Tipo : boolean = false;
  nombre: String;

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    // Componenete de prueba
    this.Alumnos.push(new Alumno('Marc','','','','','',''));
    this.Alumnos.push(new Alumno('Fonsi','','','','','',''));
    this.Alumnos.push(new Alumno('Rosa','','','','','',''));
    this.Alumnos.push(new Alumno('David','','','','','',''));
    this.Alumnos.push(new Alumno('Joel','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Profesor.push(new Profesor('plofe','uno','profe@gmail.com','alex','grani','ilerna','null?'));
  }

  listarProfesor(){

    this.BD.listarProfesor().subscribe(
      (respuesta: any) => {
        console.log(respuesta);

      },
      (error: any) => {
        console.log(error);
      }

    );

  }
}
