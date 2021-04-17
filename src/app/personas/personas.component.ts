import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';
import {PersonaService} from './persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  title:string="Lista de personas";
  //variable que almacenar� una lista
  personas:Persona[];
  //declaramos la variable de la clase servicio en el constructor porque angular
  //de ese modo hace una inyecci�n de dependencias
  constructor(private personaService:PersonaService) { }

  //usamos directiva init
  ngOnInit(): void {
    //junto al Observable de la clase sevice, subscribe
    //completa el patr�n observer subscribi�ndose a la llamada
    this.personaService.getAll().subscribe(
      //funciones de flecha de typescript, para pasar a p
      p =>this.personas=p
    );
  }

}