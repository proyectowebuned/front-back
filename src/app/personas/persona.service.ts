import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string="http://localhost:8080/persona"
  //la variable http de conexi�n hacia el backend hay que declararla en los par�metros del constructor
  //ojo las importaciones arriba, eclipse no me la hace, hacerlas manual
  constructor(private http:HttpClient) { }

  //metodo obtener todas las personas (vendran en un list del backend)
  //apuntamos directo al controlador backend y a la funci�n que devuelve lista
  //pasamos la lista a un objeto Observable (parte del patron observer
  //representa un flujo de datos. ver http://blog.enriqueoriol.com/2019/04/aprende-rxjs-2.html)
  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+'/list'); 
  }
  //metodo crear que hace la llamada al m�todo del back
  //tenemos que pasar un par�metro persona
  create(persona: Persona):Observable<Persona>{
  return this.http.post<Persona>(this.url, persona+'/insert');
  }

  //obtener un estudiante pasamos id como par�metro
  get(idPersona: number):Observable<Persona>{
  return this.http.get<Persona>(this.url+'/'+idPersona); 
  }

  //actualizar, pasamos un par�metro persona
  update(persona: Persona):Observable<Persona>{
  return this.http.put<Persona>(this.url+'/update', persona);
  }

  //eliminar no funcionar� porque tengo que modificar en backend para que borre por id
  delte(idPersona: number):Observable<Persona>{
  return this.http.delete<Persona>(this.url+'/delete'+idPersona); 
  }
}
