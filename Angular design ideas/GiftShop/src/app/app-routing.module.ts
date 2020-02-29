import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewOrderComponent } from './view-order/view-order.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'view-order', component: ViewOrderComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
