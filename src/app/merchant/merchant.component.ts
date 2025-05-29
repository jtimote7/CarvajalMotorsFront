import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Merchant } from '../models/merchant.model';
import { FormGroup, FormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { UserService } from '../service/user.service';
import { Usuario } from '../models/usuario.model';
import { NgFor } from '@angular/common';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-merchant',
  imports: [MatSelectModule, MatInputModule,
    MatFormFieldModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule, MatDatepickerModule, RouterModule, NgFor],
  templateUrl: './merchant.component.html',
  styleUrl: './merchant.component.css',
  providers: [provideNativeDateAdapter()],
})
export class MerchantComponent implements OnInit {
  //merchant2 Object para editar
  isCreateMerchant: boolean = true;
  merchant: any;

  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    return 'YYYY/MM/DD';
  });

  hoy: Date = new Date();
  formulario!: FormGroup;
  usersDto: Usuario[] = [];
  /*merchant: Merchant = {
    idproducto: 0,
    nombreproducto: '',
    cantidad: 0,
    fechaingreso: new Date(),
    usuarioregistro: 0

  }*/

  constructor(private api: MerchantService, private fb: FormBuilder, private apiUser: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
    this.users();

    this.merchant = this.activatedRoute.snapshot.data['merchant'];
    console.log(this.merchant);

    if (this.merchant && this.merchant.merchantId > 0) {
      this.isCreateMerchant = false;
    } else {
      this.isCreateMerchant = true;
    }
  }

  save(): void {
    this.merchant.usuariomod = this.merchant.usuarioregistro;
    this.merchant.fechamod = new Date;
    this.api.saveMerchant(this.merchant).subscribe({
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

  users(): void {
    this.apiUser.getUsers().subscribe({
      next: (ress) => this.usersDto = ress,
      error: (err) => {
        console.error('Error al guardar', err);
        alert('Error al guardar el producto');
      }
    })
  }

  validNumber(event: KeyboardEvent): boolean {
    const charcode = event.charCode;
    if (charcode < 48 || charcode > 57) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}

