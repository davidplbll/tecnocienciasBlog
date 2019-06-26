import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ensayo3RoutingModule } from './ensayo3-routing.module';
import { Ensayo3Component } from './ensayo3.component';

@NgModule({
    imports: [CommonModule, Ensayo3RoutingModule],
    declarations: [Ensayo3Component],
    exports:[Ensayo3Component] 
})
export class Ensayo3Module {}
