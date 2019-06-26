import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ensayo1RoutingModule } from './ensayo1-routing.module';
import { Ensayo1Component } from './ensayo1.component';

@NgModule({
    imports: [CommonModule, Ensayo1RoutingModule],
    declarations: [Ensayo1Component],
    exports:[Ensayo1Component] 
})
export class Ensayo1Module {}
