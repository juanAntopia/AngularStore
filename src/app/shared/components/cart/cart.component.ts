import { Component } from "@angular/core";
import { ShoppingCartService } from "../header/services/shopping-cart.service";

@Component({
    selector: 'app-cart',
    template: `
        <ng-container *ngIf="{total: total$ | async, quantity: quantity$ | async} as dataCart">
            <!-- <mat-icon>add_shopping_cart</mat-icon> -->

            <ng-container *ngIf="dataCart.total">
                {{dataCart.total | currency}}
                ({{dataCart.quantity}})
            </ng-container>
        </ng-container>
    `
})

export class CartComponent {
    constructor(private shoppingCartSrv: ShoppingCartService) { }

    quantity$ = this.shoppingCartSrv.quantityAction$;
    total$ = this.shoppingCartSrv.totalAction$;
    cart$ = this.shoppingCartSrv.cartAction$;
}