import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Merchant } from '../models/merchant.model';
import { MerchantService } from '../merchant.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatListModule, RouterModule, MatButtonModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  merchants: Merchant[] = [];

  constructor(private api: MerchantService) { }

  ngOnInit(): void {
    this.api.getMerchants().subscribe({
      next: (res) => this.merchants = res,
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al listar mercancias');
      }
    })
  }
}
export interface MerchantsTable {
  idproducto: number;
  nombreproducto: number;
  cantidad: number;
  fechaingreso: string;
  usuarioregistro:number;
}

const ELEMENT_DATA: MerchantsTable[] = [];

export class TableBasicExample {
  displayedColumns: string[] = ['idproducto', 'nombreproducto', 'cantidad', 'fechaingreso', 'usuarioregistro'];
  dataSource = ELEMENT_DATA;
}