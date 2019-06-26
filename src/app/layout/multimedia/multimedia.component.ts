import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';

@Component({
    selector: 'multimedia',
    templateUrl: './multimedia.component.html',
    styleUrls: ['./multimedia.component.scss']
})
export class MultimediaComponent implements OnInit {
    constructor() { AOS.init();}

    ngOnInit() {}
}
