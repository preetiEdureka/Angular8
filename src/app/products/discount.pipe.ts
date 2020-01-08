import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"discount"

})

export class MyDiscountPipe implements PipeTransform{
    transform(value: number) {
        value = value-5;
        return value;
    }
    
}