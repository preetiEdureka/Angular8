import {Component,OnInit} from '@angular/core';
import { IProduct } from './product.model';
import {ProductService} from './product.service';
import { Subscriber } from 'rxjs';

@Component({
    selector:'product-app',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
//logic
export class ProductComponent implements OnInit{
    title:string = "Product App";
    desc:string = "This is all about products";
    imageWidth:number=50;
    showTable:boolean = true;
    showImage:boolean = true;
    userInput:string="";
    product:IProduct[];
    constructor(private prService:ProductService){}

    ngOnInit(){
      this.prService.getProducts()
      .subscribe((data) => this.product = data);
    }
    toggleImage():void{
        console.log(this.showImage);
        this.showImage = !this.showImage;
    };

    dataRecive(message: string) {
      this.title = 'Product Pages>>>>>>' + message;
    };
    
}