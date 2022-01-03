import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuanComponent } from './pages/juan/juan.component';

const routes: Routes = [
  {path: 'juan', component: JuanComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
