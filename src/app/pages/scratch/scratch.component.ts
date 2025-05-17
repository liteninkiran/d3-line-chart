import { Component, OnInit } from '@angular/core';
import { filter2024 } from 'src/app/mock-data/helper';

@Component({
    selector: 'app-scratch',
    templateUrl: './scratch.component.html',
    styleUrls: ['./scratch.component.scss'],
})
export class ScratchComponent implements OnInit {

    public chartData = filter2024;

    constructor() { }

    public ngOnInit(): void {
        console.log(this.chartData);
    }
}
