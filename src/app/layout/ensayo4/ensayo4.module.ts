import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ensayo4RoutingModule } from './ensayo4-routing.module';
import { Ensayo4Component } from './ensayo4.component';

@NgModule({
    imports: [CommonModule, Ensayo4RoutingModule],
    declarations: [Ensayo4Component],
    exports:[Ensayo4Component] 
})
export class Ensayo4Module {}
