import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// imortando router para redireccionar al usuario cuando se logue
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variable form para obtener los datos del formulario del login
  form: FormGroup;
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form=this.fb.group({
      usuario: ["", Validators.required],
      password: ["", Validators.required]
    })
   }
   // crendo variable va validar cuando se va a colocar el spinner que se coloca luego de que se logue el usuario
  spinner=false;
   tiempoDuracionSpinner=2500; // declarando varialbe para saber cuanto tiempo va a durar el spinner
  // parave validar el formulario del login para ver si coincide con los datos
   Agregar(){
     if(this.form.value.usuario=="admin" && this.form.value.password=="admin123"){
        this.spinner=true;
        // haciendo que el spinner aparesca si el login fue exitoso por 2.5s para luego redireccionar
        setTimeout(() => {
         this.router.navigate(["dashboard"]);
         // redireccionando al usuario al dashboard
        }, this.tiempoDuracionSpinner);
       
     }else{
       	this.error();
        this.spinner=false;
        this.form.reset(); // resetenado el formulario del login (Borrando su valor)
        // haciendo que el spinner no aparesca y mosrando un mensaje al usuario diciendo que sus credenciales son incorrectas
      }
   }
   // mostrando mensaje de error
   error(){
      this._snackBar.open('el usuario o la contraseña son incorrectas', 'Cerrar', {
      duration:5000,
      horizontalPosition:"center",
      verticalPosition: "bottom"
    });
   }

  ngOnInit(): void {
  }

}
