import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ItemDescComponent} from './item-desc/item-desc.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: 'shop/:id', component: ItemDescComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
