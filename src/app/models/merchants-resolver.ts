import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { MerchantService } from "../merchant.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Merchant } from "./merchant.model";

export const MerchantsResolver: ResolveFn<any> =
    (route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        merchantService: MerchantService = inject(MerchantService)): Observable<Merchant> => {
        const merchantId = route.paramMap.get("merchantId");
        if (merchantId) {
            //datos
            return merchantService.getMerchant(Number(merchantId));
        } else {
            const merchant: Merchant = {
                idproducto: 0,
                nombreproducto: "",
                cantidad: 0,
                fechaingreso: new Date,
                usuarioregistro: 0,
                usuariomod: "",
                fechamod: ""
            }
            //crear y retornar datos vacios
            return of(merchant);
        }
    }