import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product-details',
    templateUrl:'./product-details.component.html'
})

export class ProductDetailsComponent implements OnInit{
    
    id:number;
    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.id = this.route.snapshot.params['id'];
    }
    
}