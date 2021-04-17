import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string="http://localhost:8080/persona"
  //la variable http de conexión hacia el backend hay que declararla en los parámetros del constructor
  //ojo las importaciones arriba, eclipse no me la hace, hacerlas manual
  constructor(private http:HttpClient) { }

  //metodo obtener todas las personas (vendran en un list del backend)
  //apuntamos directo al controlador backend y a la función que devuelve lista
  //pasamos la lista a un objeto Observable (parte del patron observer
  //representa un flujo de datos. ver http://blog.enriqueoriol.com/2019/04/aprende-rxjs-2.html)
  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+'/list'); 
  }
  //metodo crear que hace la llamada al método del back
  //tenemos que pasar un parámetro persona
  create(persona: Persona):Observable<Persona>{
  return this.http.post<Persona>(this.url, persona+'/insert');
  }

  //obtener un estudiante pasamos id como parámetro
  get(idPersona: number):Observable<Persona>{
  return this.http.get<Persona>(this.url+'/'+idPersona); 
  }

  //actualizar, pasamos un parámetro persona
  update(persona: Persona):Observable<Persona>{
  return this.http.put<Persona>(this.url+'/update', persona);
  }

  //eliminar no funcionará porque tengo que modificar en backend para que borre por id
  delte(idPersona: number):Observable<Persona>{
  return this.http.delete<Persona>(this.url+'/delete'+idPersona); 
  }
}
