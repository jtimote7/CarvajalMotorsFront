import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export interface UsuarioTable {
  idusuario: number,
  nombre: string,
  edad: string,
  cargo: number,
  fechaIngreso: Date
}

@Component({
  selector: 'app-usuario',
  imports: [FormsModule,MatFormFieldModule,MatDatepickerModule,MatSelectModule,MatInputModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usersDto: Usuario[] = [];
  constructor(private apiUser: UserService,private router: Router) { }


  users(): void {
    this.apiUser.getUsers().subscribe({
      next: (ress) => this.usersDto = ress,
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al guardar el producto');
      }
    })
  }
  usuario: Usuario={
    idusuario:0,
    nombre:'',
    edad:'',
    cargo:0,
    fechaIngreso: new Date
  };

  save(): void {
    this.apiUser.saveUser(this.usuario).subscribe({
      next: (res) => {
        console.log('Producto guardado', res);
        this.router.navigate(["/merchant-table"]);
        alert('Producto guardado con éxito');
      },
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al guardar el producto');
      }
    })
  }

}
