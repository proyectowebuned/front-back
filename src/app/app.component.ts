import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  mensaje="";
  registrado=false;
  nombre:string=""
  apellido:string=""

  registrarUsuario(){
    this.registrado=true
    this.mensaje="usuario registrado ok"
  }
}
