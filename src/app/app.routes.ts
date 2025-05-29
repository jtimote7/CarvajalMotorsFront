import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MerchantTableComponent } from './merchant-table/merchant-table.component';
import { DatepickerOverviewExampleComponent } from './datepicker-overview-example/datepicker-overview-example.component';
import { MerchantsResolver } from './models/merchants-resolver';
import { CargosComponent } from './cargos/cargos.component';

export const routes: Routes = [
    {path: 'header', component:HeaderComponent},
    {path: 'merchant', component:MerchantComponent, resolve:{merchant: MerchantsResolver}},
    {path: 'merchant-table', component:MerchantTableComponent},
    {path: 'datepicker',component:DatepickerOverviewExampleComponent},
    {path: 'cargos',component:CargosComponent},
    {path: '', component:HomeComponent}
];
