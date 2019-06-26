import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ensayo2RoutingModule } from './ensayo2-routing.module';
import { Ensayo2Component } from './ensayo2.component';

@NgModule({
    imports: [CommonModule, Ensayo2RoutingModule],
    declarations: [Ensayo2Component],
    exports:[Ensayo2Component] 
})
export class Ensayo2Module {}
