import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliograRoutingModule } from './articulo-routing.module';
import { BibliograComponent } from './bibliografia.component';

@NgModule({
    imports: [CommonModule, BibliograRoutingModule],
    declarations: [BibliograComponent]
})
export class BibliograModule {}
