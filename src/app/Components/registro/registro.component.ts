import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';
import { Profesor } from 'src/app/Models/Profesor.model';
import { Alumno } from 'src/app/Models/Alumno.model';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private BD: ProfeToolsService) { }
  Alumno: FormGroup;
  Profesor: FormGroup;
  submitted1 = false;
  submitted2 = false;
  switch1 = false;

  user = new Profesor();
  alumno = new Alumno();


  ngOnInit(): void {

    this.Alumno = this.formBuilder.group({
      nick_a: ['', Validators.required],
      correo_a: ['', [Validators.required, Validators.email]],
      cont_a: ['', Validators.required],
      nombre_a: ['', Validators.required],
      apell_a: ['', Validators.required],
      curso: ['', Validators.required],
      img: ['', Validators.required]
    });

    this.Profesor = this.formBuilder.group({
      nick_p: ['', Validators.required],
      correo_p: ['', [Validators.required, Validators.email]],
      cont_p: ['', Validators.required],
      nombre_p: ['', Validators.required],
      apell_p: ['', Validators.required],
      centro: ['', Validators.required]
    });
    // ,
    // img: ['', Validators.required]

  }

  //Funcion del modulo ngx-ui-switch que utilizamos para elegir el tipo de usuario a elegir
  manualUpdateEvent(value: boolean) {
    this.switch1 = value;
  }

  get A() {
    return this.Alumno.controls;
  }

  get P() {
    return this.Profesor.controls;
  }

  comp_Alum() {
    this.submitted1 = true;

    if (this.Alumno.invalid) {
      return;
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'

    }).then((result) => {
      if (result.isConfirmed) {
        this.BD.RegistroAlumno(this.alumno).subscribe();


        Swal.fire('¡Creado!', '', 'success')
      }
    })
  }

  comp_Prof() {
    this.submitted2 = true;

    if (this.Profesor.invalid) {
      return;
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'

    }).then((result) => {
      if (result.isConfirmed) {

        // var profesor: Profesor = new Profesor(this.Profesor.value.nick_p,
        //   this.Profesor.value.cont_p, this.Profesor.value.correo_p,
        //   this.Profesor.value.nombre_p, this.Profesor.value.apell_p,
        //   this.Profesor.value.centro);

        this.BD.RegistrarProfesor(this.user).subscribe(

          (respuesta: any) => {

            Swal.fire('¡Creado!', '', 'success')




          },
          (error: any) => {
            console.log(error);
            Swal.fire('¡Error!', '', 'error')

          }

        );


      }

    })

  }

  RegistroProfesor() {
    // this.BD.RegistroProfesor(this.user).subscribe (
      datos => {
        if(datos['response'] == 'OK') {
          console.log(datos['response'])
          alert(datos['mensaje']);
         } else {
          alert(datos['mensaje']);

        }
      }
    // );
    }
}
