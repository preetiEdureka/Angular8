import {Component} from '@angular/core';

@Component({
    selector:'product-app',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})
//logic
export class ProductComponent{
    title:string = "Product App";
    desc:string = "This is all about products";
    imageWidth:number=50;
    showTable:boolean = true;
    showImage:boolean = true;
    userInput:string="";

    toggleImage():void{
        console.log(this.showImage);
        this.showImage = !this.showImage;
    };

    product:any[] = [
        {
        _id: '5a05dacc734d1d68d42d31f3',
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 19.95,
        starRating: 2.5,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
      },
      {
        _id: '5a05daec734d1d68d42d32ca',
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2016',
        description: '15 gallon capacity rolling garden cart',
        price: 32.99,
        starRating: 3.2,
        imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        _id: '5a05dacc734d1d68d42d31f3',
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0013',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 33.95,
        starRating: 2.5,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/318557/openclipart-logo-2019.png'
      }
      ,
      {
        _id: '5a05dacc734d1d68d42d31f3',
        productId: 1,
        productName: 'Leaf Rake',
        productCode: 'GDN-0021',
        releaseDate: 'March 19, 2016',
        description: 'Leaf rake with 48-inch wooden handle.',
        price: 44.22,
        starRating: 2.5,
        imageUrl: 'https://openclipart.org/image/300px/svg_to_png/318/Gerald-G-Cartoon-Cat-Sitting.png'
      }
    ];
}