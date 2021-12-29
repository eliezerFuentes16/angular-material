import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';
console.log(UsuariosServicesService)
let elementos=[
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
const listaUsuario: Usuario[] = elementos;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  form: FormGroup;
  disableSelect = new FormControl(false);

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(listaUsuario);
  Filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor(private _snackBar: MatSnackBar, private fb:FormBuilder) {

    this.form=this.fb.group({
      "usuario":["",Validators.required],
      "nombre":["",Validators.required],
      "apellido":["",Validators.required],
      "sexo":["",Validators.required]
  
    })
   }

   

  ngOnInit(): void {
    
  }
  
  borrarUsuario(index: number){
    console.log(listaUsuario);
    this._snackBar.open('El usuario fue eliminado con exito', 'Cerrar', {
      duration:1000,
      horizontalPosition:"center",
      verticalPosition: "bottom"
    })

    listaUsuario.splice(index,1);
    this.ngAfterViewInit();
  }
  agregarUsuario(){
    let usuario={usuario: this.form.value.usuario,
       nombre: this.form.value.nombre,
       apellido: this.form.value.apellido,
       sexo: this.form.value.sexo};
    listaUsuario.push(usuario);
    this._snackBar.open('El usuario fue ingresado con exito', 'Cerrar', {
      duration:1000,
      horizontalPosition:"center",
      verticalPosition: "bottom"
    })
    this.form.reset();
    this.ngAfterViewInit();
  }
  editarUsuario(index: number){
    console.log(listaUsuario[index]);

  }
  valorInput:any[]=[];

}
