import { Component } from "@angular/core";
@Component({
    selector: 'calc',
    templateUrl: 'calc.component.html',
    styleUrls: ['calc.component.css']
})
export class CalcComponent{
    public number1: number = 0;
    public number2: number = 0;
    public result: number = 0;
    public add(){
        this.result = this.number1 + this.number2;
    }
}