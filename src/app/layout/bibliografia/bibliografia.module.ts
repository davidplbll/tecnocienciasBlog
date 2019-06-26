import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliografiaRoutingModule } from './bibliografia-routing.module';
import { BibliografiaComponent } from './bibliografia.component';

@NgModule({
    imports: [CommonModule, BibliografiaRoutingModule],
    declarations: [BibliografiaComponent]
})
export class BibliografiaModule {}
