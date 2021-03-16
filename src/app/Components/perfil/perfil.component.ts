import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfeToolsService } from '../../servicios/profe-tools.service';

import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // Componenetes de prueba
  Profesores : Profesor[] = [];
  Tipo : boolean = false;

  perfil = new Profesor();
  usuarios= null;

  usuario = {

    nick: null,
       password: null,
       correo: null,
       nombre: null,
       apellido: null,
       centro: null,
       img: null

  }




  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    // Componenete de prueba

    this.GetProfesor(this.usuario);



  }
  // GetProfesor() {
  //   this.BD.GetProfesor().subscribe(
  //     result => this.usuarios = result


  //   );
    // console.log(this.usuario.nick);



  // }
  GetProfesor(nick) {
    this.BD.GetProfesor(nick).subscribe(
      result => this.usuario = result[0]
    );

  }








}
