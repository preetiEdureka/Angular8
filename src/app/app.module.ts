import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product.component';
import { FormsModule} from '@angular/forms'
import { MyUpperPipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { MySearchPipe } from './products/search.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details.component';

@NgModule({
    // all component,directive,pipe
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperPipe,
    MyDiscountPipe,
    MySearchPipe,
    StarComponent,
    OrdersComponent,
    ProductDetailsComponent
  ],
  //all modules
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'orders',component:OrdersComponent},
      {path:'products',component:ProductComponent},
      {path:'product/:id',component:ProductDetailsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent], // only and only main component
  providers: [ProductService] // only services
})
export class MyModule { }
