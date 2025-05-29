import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchant } from './models/merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  private apiUrl='http://localhost:8080/motors';

  constructor(private http: HttpClient) { }
  
  saveMerchant(data:Merchant): Observable<Merchant>{
    console.log("body "+data.nombreproducto);
    return this.http.post<Merchant>(this.apiUrl+"/saveMerc", data);
  }

  getMerchants(): Observable<any>{
    return this.http.get<any>(this.apiUrl+"/merchants");
  }

  deleteMerchant(idproducto: String,usuarioregistro:String){
    return this.http.delete<any>(this.apiUrl+"/delete?idproducto="+idproducto+"&usuarioregistro="+usuarioregistro);
  }

  updateMerchant(merchantId:number):void {
    //this.http.put<Merchant>(this.apiUrl+"/update");
  }

  getMerchant(merchantId:number){
    return this.http.get<Merchant>(this.apiUrl+"/buscarById?id="+merchantId);
  }
}
