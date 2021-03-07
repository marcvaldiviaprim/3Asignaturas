import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // Componenetes de prueba
  Alumnos : Alumno[] = [];
  Tipo : boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Componenete de prueba

  }

}
