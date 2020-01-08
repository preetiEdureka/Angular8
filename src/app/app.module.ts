import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductComponent } from './products/product.component';
import { FormsModule} from '@angular/forms'
import { MyUpperPipe } from './products/myupper.pipe';
import { MyDiscountPipe } from './products/discount.pipe';
import { MySearchPipe } from './products/search.pipe';
import { StartComponent } from './shared/star.component';

@NgModule({
    // all component,directive,pipe
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MyUpperPipe,
    MyDiscountPipe,
    MySearchPipe,
    StartComponent
  ],
  //all modules
  imports: [
    BrowserModule,FormsModule
  ],
  bootstrap: [AppComponent], // only and only main component
  providers: [] // only services
})
export class MyModule { }
