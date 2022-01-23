import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantity$ = this.shoppingCartSrv.quantityAction$;
  total$ = this.shoppingCartSrv.totalAction$;
  cart$ = this.shoppingCartSrv.cartAction$;
  
  constructor(private shoppingCartSrv: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
