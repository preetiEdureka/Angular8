import { Component, OnChanges, OnInit, Input,
    Output, EventEmitter, OnDestroy

} from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls : [
        './star.component.css'
    ]
})

export class StarComponent implements OnChanges,OnInit,OnDestroy{
    starWidth : number; 
    @Input() rate : number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    constructor(){
        console.log('>>>>constructor<<<<<');
    }

    ngOnChanges(){
        console.log('>>>>ngOnChanges<<<<<');
        this.starWidth = this.rate * 86 / 6;
    }

    ngOnInit(){
        console.log('>>>>ngOnInit<<<<<');
    }

    ngOnDestroy(){
        console.log('>>>>ngOnDestroy<<<<<');
    }
    onStar(): void {
        this.ratingClicked.emit(`The rating clicked is ${this.rate}`);
    }
}