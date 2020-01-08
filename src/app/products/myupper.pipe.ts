import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"myUpperCase"

})

export class MyUpperPipe implements PipeTransform{
    transform(value: string,args:string) {
        if(args == "upper")
        {
        value = value.toUpperCase();
        }
        else
        {
            value = value.toLowerCase();
        }
        return value;
    }
    
}