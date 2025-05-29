import { Component, OnInit } from '@angular/core';
import { Cargo } from '../models/cargo.model';
import { CargoService } from '../service/cargo.service';
import { Router, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface CargoTable {
  idcargo: number,
  nombreCargo: String
}

@Component({
  selector: 'app-cargos',
  imports: [MatIconModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, RouterModule],
  templateUrl: './cargos.component.html',
  styleUrl: './cargos.component.css'
})
export class CargosComponent implements OnInit {

  cargos: CargoTable[] = [];
  displayedColumns: string[] = ['idCargo', 'nombreCargo'];
  dataSource = this.cargos;
  cargo: Cargo = {
    idcargo: 0,
    nombreCargo: ''
  }
  constructor(private apiCargo: CargoService, private router: Router) { }

  ngOnInit(): void {
    this.apiCargo.getCargos().subscribe({
      next: (ress) => this.cargos = ress,
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al guardar el producto');
      }
    })

  }
  save(): void {
    if (this.cargo.nombreCargo.length > 0) {
      this.apiCargo.saveUser(this.cargo).subscribe({
        next: (res) => {
          console.log('Producto guardado', res);
          alert('Cargo guardado con éxito');
          this.router.navigate(["/"]);
        },
        error: (err) => {
          console.error('Error al guardar', err);
          alert('Error al guardar el cargo');
        }
      })
    } else {
      alert('Ingrese nombre');
    }
  }
}
