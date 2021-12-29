import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {
  

  constructor() { 

    return [
      {usuario: "LeiserPro", nombre: 'Eliezer', apellido: "Fuentes", sexo: 'Masculino'},
      {usuario: "AmmiF", nombre: 'Ammi', apellido: "Fuentes", sexo: 'Femenino'},
      {usuario: "DavidF27", nombre: 'David', apellido: "Fuentes", sexo: 'Masculino'},
      {usuario: "Don Cesar", nombre: 'Cesar', apellido: "Cortesia", sexo: 'Masculino'},
      {usuario: "KettyAurora", nombre: 'Ketty', apellido: "Moreno", sexo: 'Femenino'},
      {usuario: "Aristides", nombre: 'Aristides', apellido: "Fuentes", sexo: 'Masculino'},
      {usuario: "Cheo", nombre: 'Jose', apellido: "Rodriguez", sexo: 'Masculino'},
      {usuario: "Luisito", nombre: 'Luis', apellido: "Zambrano", sexo: 'Masculino'},
      {usuario: "Cofla", nombre: 'Victor', apellido: "Diaz", sexo: 'Masculino'},
      {usuario: "Yolanda", nombre: 'Yolanda', apellido: "Guerrero", sexo: 'Femenino'},
      {usuario: "Hochicmin", nombre: 'Hochicmin', apellido: "Dominguez", sexo: 'Masculino'},
      {usuario: "JoseP", nombre: 'Jose', apellido: "Perez", sexo: 'Masculino'},
      {usuario: "Gerard27", nombre: 'Gerard', apellido: "Rincon", sexo: 'Masculino'},
      {usuario: "Lolimar", nombre: 'Lolymar', apellido: "Cortesia", sexo: 'Femenino'},
      {usuario: "KettyAurora", nombre: 'Ketty', apellido: "Moreno", sexo: 'Femenino'},
      {usuario: "Aristides", nombre: 'Aristides', apellido: "Fuentes", sexo: 'Masculino'},
      {usuario: "Cheo", nombre: 'Jose', apellido: "Rodriguez", sexo: 'Masculino'},
      {usuario: "Luisito", nombre: 'Luis', apellido: "Zambrano", sexo: 'Masculino'},
      {usuario: "Cofla", nombre: 'Victor', apellido: "Diaz", sexo: 'Masculino'},
      {usuario: "Yolanda", nombre: 'Yolanda', apellido: "Guerrero", sexo: 'Femenino'},
    ];

  }
}
