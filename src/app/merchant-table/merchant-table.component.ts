import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Usuario } from '../models/usuario.model';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

export interface MerchantsTable {
  idproducto: number;
  nombreproducto: number;
  cantidad: number;
  fechaingreso: String;
  usuarioregistro: String;
  usuariomod: String,
  fechamod: String
}

@Component({
  selector: 'app-merchant-table',
  imports: [MatTableModule, MatSelectModule, FormsModule, NgFor, RouterModule, MatButtonModule],
  templateUrl: './merchant-table.component.html',
  styleUrl: './merchant-table.component.css'
})
export class MerchantTableComponent implements OnInit {
  merchants: MerchantsTable[] = [];
  merchantsOriginal: MerchantsTable[] = [];

  constructor(private api: MerchantService, private apiUser: UserService, private router: Router) { }

  ngOnInit(): void {
    this.api.getMerchants().subscribe(data => {
      this.merchantsOriginal = data;
      this.merchants=data;
    })

    this.users();

  }


  usuarioregistro: String = '';

  delete(idproducto: String): void {
    this.api.deleteMerchant(idproducto, this.usuarioregistro).subscribe({
      next: (res) => {
        console.log('Producto Eliminado', res);
        alert('Producto guardado con éxito');
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al eliminar', err);
        alert('Error al eliminar el producto');
        window.location.reload();
      }
    })
  }

  displayedColumns: string[] = ['idproducto', 'nombreproducto', 'cantidad', 'fechaingreso', 'usuarioregistro', 'usuariomod', 'opciones'];
  dataSource = this.merchants;


  usersDto: Usuario[] = [];
  users(): void {
    this.apiUser.getUsers().subscribe({
      next: (ress) => this.usersDto = ress,
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al guardar el producto');
      }
    })
  }

  updateMerchant(merchantId: number): void {
    this.router.navigate(['/merchant', { merchantId: merchantId }]);
  }

  //filtro
  filtrarPorUsuario() {
    console.log(this.usuarioregistro);
    if (this.usuarioregistro == "0") {
      console.log("entra");
      this.merchants = this.merchantsOriginal; // sin filtro
    } else {
      this.merchants = this.merchantsOriginal.filter(
        m => m.usuarioregistro === this.usuarioregistro
      );
      console.log(this.merchants);
    }
  }
}
